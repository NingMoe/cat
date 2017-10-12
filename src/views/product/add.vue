<template>
  <el-row class="product-add">
    <el-col :span="14">
      <el-form :model="product" label-width="150px">
        <h3>添加产品</h3>
        <el-form-item label="产品名称">
          <el-input v-model="product.name"></el-input>
        </el-form-item>
        <el-form-item label="产品热量">
          <el-input v-model.number="product.calorie"></el-input>
        </el-form-item>
        <el-form-item label="产品蛋白质">
          <el-input v-model.number="product.protein"></el-input>
        </el-form-item>
        <el-form-item label="产品脂肪">
          <el-input v-model.number="product.fat"></el-input>
        </el-form-item>
        <el-form-item label="产品每包克数">
          <el-input v-model.number="product.weight"></el-input>
        </el-form-item>
        <el-form-item label="产品二维码参数">
          <el-input v-model="product.erCode"></el-input>
        </el-form-item>
        <el-form-item label="广告图片">
          <ul
            v-if="product.imgSrc"
            class="el-upload-list el-upload-list--picture-card">
            <li class="el-upload-list__item">
              <img
                :src="product.imgSrc"
                class="el-upload-list__item-thumbnail">
              <i class="el-icon-close"></i>
              <span
                class="el-upload-list__item-actions">
                <span
                  @click="handlePreview"
                  class="el-upload-list__item-preview">
                  <i class="el-icon-view"></i>
                </span>
                <span
                  @click="handleRemove"
                  class="el-upload-list__item-delete">
                  <i class="el-icon-delete2"></i>
                </span>
              </span>
            </li>
          </ul>
          <app-upload
            @upload-success="__uploadSuccess">
          </app-upload>
        </el-form-item>
        <el-form-item label="广告链接">
          <el-input v-model="product.weidianLink"></el-input>
        </el-form-item>
        <el-form-item label="游客结果广告文字">
          <el-input type="textarea" v-model="product.visitorsAdsText"></el-input>
        </el-form-item>
        <el-form-item label="客户结果广告文字">
          <el-input type="textarea" v-model="product.customerAdsText"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            @click="handleSubmit"
            :loading="onLoading"
            type="primary">
            添加产品
          </el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <el-dialog v-model="dialogVisiable" size="tiny">
      <img width="375" height="150" :src="product.imgSrc">
    </el-dialog>
  </el-row>
</template>

<script>
  import AppUpload from '@/components/base/upload'

  export default {
    created() {
      const id = this.$route.query.id
      this.product.id = id
    },
    components: {
      AppUpload
    },
    data() {
      return {
        product: {
          "id": '',
          "name": "",
          "calorie": '',
          "protein": '',
          "fat": '',
          "weight": '',
          "erCode": "",
          "imgSrc": "",
          "weidianLink": "",
          "visitorsAdsText": "",
          "customerAdsText": ""
        },
        onLoading: false,
        dialogVisiable: false
      }
    },
    methods: {
      /**
       *  图片上传成功钩子
       *  @param {String} url
       */
      __uploadSuccess(url) {
        this.product.imgSrc = url
      },
      /**
       *  图片预览
       */
      handlePreview() {
        this.dialogVisiable = true
      },
      handleRemove() {
        this.product.imgSrc = ''
      },
      /**
       *  保存
       */
      handleSubmit() {
        // 加载中...
        this.onLoading = true
        this.$axios.post(this.$apis.product.edit, this.product)
        .then(res => {
          this.$message({
            type: 'success',
            message: '添加成功',
            duration: 500,
            onClose: () => {
              this.$router.push({
                path: 'list'
              })
            }
          })
        })
        .catch(error => {
          this.$message.error(error.message)
          // 取消加载...
          this.onLoading = false
        })
      }
    }
  }
</script>
