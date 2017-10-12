<template>
  <div class="ads-config">
    <el-form :mode="adsConfig.visitors">
      <h3>游客/客户首页广告</h3>
      <el-form-item>
        <ul
          v-if="adsConfig.visitors.imgSrc"
          class="el-upload-list el-upload-list--picture-card">
          <li class="el-upload-list__item">
            <img
              :src="adsConfig.visitors.imgSrc"
              class="el-upload-list__item-thumbnail">
            <span class="el-upload-list__item-actions">
              <span
                @click="handlePreview(adsConfig.visitors.imgSrc)"
                class="el-upload-list__item-preview">
                <i class="el-icon-view"></i>
              </span>
              <span
                @click="handleRemove('visitors')"
                class="el-upload-list__item-delete">
                <i class="el-icon-delete2"></i>
              </span>
            </span>
          </li>
        </ul>
        <app-upload
          @upload-success="__visitorsImguploadSuccess">
        </app-upload>
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="adsConfig.visitors.weidianLink"
          placeholder="输入广告跳转地址">
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="handleSubmit('visitors')">保存游客广告</el-button>
      </el-form-item>
    </el-form>
    <el-form>
      <h3>客户计算结果广告</h3>
      <el-form-item>
        <ul
          v-if="adsConfig.customer.imgSrc"
          class="el-upload-list el-upload-list--picture-card">
          <li class="el-upload-list__item">
            <img
              :src="adsConfig.customer.imgSrc"
              class="el-upload-list__item-thumbnail">
            <span class="el-upload-list__item-actions">
              <span
                @click="handlePreview(adsConfig.customer.imgSrc)"
                class="el-upload-list__item-preview">
                <i class="el-icon-view"></i>
              </span>
              <span
                @click="handleRemove('customer')"
                class="el-upload-list__item-delete">
                <i class="el-icon-delete2"></i>
              </span>
            </span>
          </li>
        </ul>
        <app-upload
          @upload-success="__customerImguploadSuccess">
        </app-upload>
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="adsConfig.customer.weidianLink"
          placeholder="输入广告跳转地址">
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="handleSubmit('customer')">保存客户广告</el-button>
      </el-form-item>
    </el-form>
    <el-form>
      <h3>计算结果文字内容（公用）</h3>
      <el-form-item>
        <el-input
          v-model="adsConfig.note"
          type="textarea"
          placeholder="请输入文字">
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="handleSubmit('note')">保存客户广告</el-button>
      </el-form-item>
    </el-form>
    <el-dialog v-model="dialogVisiable" size="tiny">
      <img width="375" height="150" :src="dialogImageUrl">
    </el-dialog>
  </div>
</template>

<script>
  import AppUpload from '@/components/base/upload'

  export default {
    components: {
      AppUpload
    },
    created() {
      this.fetchAdsConfig()
    },
    data () {
      return {
        // 小程序首页广告
        adsConfig: {
          visitors: {
            imgSrc: '',           // 小程序首页广告图片
            weidianLink: ''       // 微店地址
          },
          customer: {
            imgSrc: '',
            weidianLink: ''
          },
          note: ''
        },
        dialogVisiable: false,    // 图片预览弹框
        dialogImageUrl: ''        // 预览图片链接
      }
    },
    methods: {
      /**
       *  获取广告设置
       */
      fetchAdsConfig() {
        this.$axios.get(this.$apis.config.ads.detail)
        .then(res => {
          this.adsConfig = Object.assign({ visitors: {}, customer: {}}, res)
        })
        .catch(error => {
          this.$message.error(error.message)
        })
      },
      /**
       *  更新广告设置
       */
      handleSubmit(type) {
        let params = {
          k: type
        }
        if (typeof this.adsConfig[type] === 'object') {
          params.v = JSON.stringify(this.adsConfig[type])
        }
        if (typeof this.adsConfig[type] === 'string') {
          params.v = this.adsConfig[type]
        }
        this.$axios.post(this.$apis.config.ads.update, params)
        .then(res => {
          this.$message({
            type: 'success',
            message: `${type}保存成功`
          })
        })
        .catch(error => {
          this.$message.error(error.message)
        })
      },
      // 游客浏览图片上传成功
      __visitorsImguploadSuccess(url) {
        this.adsConfig.visitors.imgSrc = url
      },
      // 客户浏览图片上传成功
      __customerImguploadSuccess(url) {
        this.adsConfig.customer.imgSrc = url
      },
      // 图片预览
      handlePreview(url) {
        this.dialogImageUrl = url
        this.dialogVisiable = true
      },
      // 删除图片
      handleRemove(type) {
        this.adsConfig[type].imgSrc = ''
      }
    },
  }
</script>
