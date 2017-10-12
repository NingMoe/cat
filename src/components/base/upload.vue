<template>
  <div class="app-upload">
    <el-upload
      class="ele-upload"
      action="https://v0.api.upyun.com"
      list-type="picture-card"
      :show-file-list="false"
      :on-error="handleError"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :http-request="handleUpload"
      :before-upload="handelBeforeUpload">
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog
      v-model="dialogVisible"
      size="tiny">
      <img width="100%" :src="imageUrl">
    </el-dialog>
  </div>
</template>

<script>

  import axios from 'axios'

  const upyunInstance = axios.create({
    headers: { 'Content-Type': 'multipart/form-data' }
  })

  /**
   *
   *  需要优化
   *
   */

  export default {
    props: {
      wh: {
        type: Object,
        default: () => {
          return { width: 750, height: 300 }
        }
      },
      maxSize: {
        type: Number,
        default: 1024 * 1024 * 1
      },
      accept: {
        type: Array,
        default: () => ['JPG', 'JPEG', 'PNG', 'GIF']
      }
    },
    data() {
      return {
        file: null,
        bucket: '',   // bucket 又拍云文件上传的服务
        policy: '',   // policy 文件上传的参数
        signature: '',// 签名
        imageUrl: '',
        dialogVisible: false,
        fileList: []
      }
    },
    methods: {
      /**
       *  上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传
       *  @param {Object} 文件
       */
      handelBeforeUpload(file) {
        const reg = new RegExp(this.accept.join('|') || '', 'i')
        const isPIC = reg.test(file.type)
        const isRightSize = file.size < this.maxSize

        if (!isPIC) {
          this.$message.error('图片格式错误');
        }
        if (!isRightSize) {
          this.$message.error('图片大小超过范围');
        }
        // 图片宽高
        // this.__validateWH()

        if (isPIC && isRightSize) {
          this.file = file
        }
        return isPIC && isRightSize
      },
      // __validateWH() {
      //   return async validate = () => {
      //     const WIDTH = this.wh.width
      //     const HEIGHT = this.wh.height
      //     if (WIDTH || HEIGHT) {
      //       const __this = this
      //       const reader = new FileReader()
      //       reader.readAsDataURL(file)
      //       reader.onload = function() {
      //         let image = document.createElement('img')
      //         image.src = this.result
      //         image.onload = () => {
      //           if ((WIDTH && WIDTH !== image.width) ||
      //               (HEIGHT && HEIGHT !== image.height)) {
      //             // __this.$message.error(`请上传${WIDTH} X ${HEIGHT}的图片`)
      //             return false
      //           }
      //         }
      //       }
      //     }
      //   }
      // },
      /**
       *  准备上传
       */
      handleUpload() {
        this.__upyunToken()
      },
      /**
       *  获取又拍云上传参数
       */
      __upyunToken() {
        if (this.bucket && this.policy && this.signature) {
          this.__upload()
        } else {
          upyunInstance.get(this.$apis.upyun.token)
          .then(res => {
            this.bucket = res.data.bucket
            this.policy = res.data.policy,
            this.signature = res.data.signature
            this.__upload()
          })
          .catch(error => {
            this.$message.error('上传图片失败1')
          })
        }
      },
      /**
       *  上传到又拍云
       */
      __upload() {
        const fd = new FormData()
        fd.append('policy', this.policy)
        fd.append('signature', this.signature)
        fd.append('file', this.file)
        upyunInstance.post(`${this.$apis.upyun.action}/${this.bucket}`, fd)
        .then(res => {
          this.imageUrl = res.data.url
          this.$emit('upload-success', this.imageUrl)
        })
        .catch(error => {
          this.$message.error('上传图片失败2')
        })
      },
      /**
       *  图片预览
       *  点击已上传的文件链接时的钩子, 可以通过 file.response 拿到服务端返回数据
       */
      handlePreview(file) {
        this.imageUrl = file.url
        this.dialogVisible = true
      },
      /**
       *  文件列表移除文件
       */
      handleRemove(file, fileList) {
        console.log('file=============', file)
        console.log('fileList=========', fileList)
      },
      handleError(file, fileList) {
        console.log('error.file========', file)
        console.log('error.file========', file)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .upload-image
    width 100%
    height 100%
    border-radius 6px
</style>


