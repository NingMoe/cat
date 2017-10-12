<template>
  <el-row class="params-config">
    <el-col :span="12">
      <h3>热量摄入指数，热量摄入=体重^0.75*70*摄入指数</h3>
      <el-form :model="params" label-width="100px">
        <el-form-item label="1-6个月小猫">
          <el-input v-model.number="params.calorie.cat6"></el-input>
        </el-form-item>
        <el-form-item label="7个月小猫">
          <el-input v-model.number="params.calorie.cat7"></el-input>
        </el-form-item>
        <el-form-item label="8个月小猫">
          <el-input v-model.number="params.calorie.cat8"></el-input>
        </el-form-item>
        <el-form-item label="9个月小猫">
          <el-input v-model.number="params.calorie.cat9"></el-input>
        </el-form-item>
        <el-form-item label="10个月小猫">
          <el-input v-model.number="params.calorie.cat10"></el-input>
        </el-form-item>
        <el-form-item label="11个月小猫">
          <el-input v-model.number="params.calorie.cat11"></el-input>
        </el-form-item>
        <el-form-item label="12个月小猫">
          <el-input v-model.number="params.calorie.cat12"></el-input>
        </el-form-item>
        <el-form-item label="健康成猫">
          <el-input v-model.number="params.calorie.adultCat"></el-input>
        </el-form-item>
        <el-form-item label="胖猫">
          <el-input v-model.number="params.calorie.fatCat"></el-input>
        </el-form-item>
        <el-form-item label="绝育猫">
          <el-input v-model.number="params.calorie.sterilizedCat"></el-input>
        </el-form-item>
        <el-form-item label="哺乳期猫咪">
          <el-input v-model.number="params.calorie.lactationCat"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSubmit('calorie')">保存热量指数</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>

      <h3>蛋白质参数，蛋白质摄入=体重*蛋白质参数</h3>
      <el-form :model="params" label-width="100px">
        <el-form-item label="1-6个月小猫">
          <el-input v-model.number="params.protein.cat6"></el-input>
        </el-form-item>
        <el-form-item label="7个月小猫">
          <el-input v-model.number="params.protein.cat7"></el-input>
        </el-form-item>
        <el-form-item label="8个月小猫">
          <el-input v-model.number="params.protein.cat8"></el-input>
        </el-form-item>
        <el-form-item label="9个月小猫">
          <el-input v-model.number="params.protein.cat9"></el-input>
        </el-form-item>
        <el-form-item label="10个月小猫">
          <el-input v-model.number="params.protein.cat10"></el-input>
        </el-form-item>
        <el-form-item label="11个月小猫">
          <el-input v-model.number="params.protein.cat11"></el-input>
        </el-form-item>
        <el-form-item label="12个月小猫">
          <el-input v-model.number="params.protein.cat12"></el-input>
        </el-form-item>
        <el-form-item label="健康成猫">
          <el-input v-model.number="params.protein.adultCat"></el-input>
        </el-form-item>
        <el-form-item label="胖猫">
          <el-input v-model.number="params.protein.fatCat"></el-input>
        </el-form-item>
        <el-form-item label="绝育猫">
          <el-input v-model.number="params.protein.sterilizedCat"></el-input>
        </el-form-item>
        <el-form-item label="哺乳期猫咪">
          <el-input v-model.number="params.protein.lactationCat"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSubmit('protein')">保存蛋白质指数</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>

      <h3>脂肪参数，脂肪摄入=体重*脂肪参数</h3>
      <el-form :model="params" label-width="100px">
        <el-form-item label="1-6个月小猫">
          <el-input v-model.number="params.fat.cat6"></el-input>
        </el-form-item>
        <el-form-item label="7个月小猫">
          <el-input v-model.number="params.fat.cat7"></el-input>
        </el-form-item>
        <el-form-item label="8个月小猫">
          <el-input v-model.number="params.fat.cat8"></el-input>
        </el-form-item>
        <el-form-item label="9个月小猫">
          <el-input v-model.number="params.fat.cat9"></el-input>
        </el-form-item>
        <el-form-item label="10个月小猫">
          <el-input v-model.number="params.fat.cat10"></el-input>
        </el-form-item>
        <el-form-item label="11个月小猫">
          <el-input v-model.number="params.fat.cat11"></el-input>
        </el-form-item>
        <el-form-item label="12个月小猫">
          <el-input v-model.number="params.fat.cat12"></el-input>
        </el-form-item>
        <el-form-item label="健康成猫">
          <el-input v-model.number="params.fat.adultCat"></el-input>
        </el-form-item>
        <el-form-item label="胖猫">
          <el-input v-model.number="params.fat.fatCat"></el-input>
        </el-form-item>
        <el-form-item label="绝育猫">
          <el-input v-model.number="params.fat.sterilizedCat"></el-input>
        </el-form-item>
        <el-form-item label="哺乳期猫咪">
          <el-input v-model.number="params.fat.lactationCat"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSubmit('fat')">保存脂肪参数</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    data() {
      return {
        params: {
          calorie: {
            cat1: '',
            cat2: '',
            cat3: '',
            cat4: '',
            cat5: '',
            cat6: '',
            cat7: '',
            cat8: '',
            cat9: '',
            cat10: '',
            cat11: '',
            cat12: '',
            adultCat: '',
            fatCat: '',
            sterilizedCat: '',
            lactationCat: ''
          },
          protein: {
            cat1: '',                    // 1个月小猫
            cat2: '',                    // 2个月小猫
            cat3: '',                    // 3个月小猫
            cat4: '',                    // 4个月小猫
            cat5: '',                    // 5个月小猫
            cat6: '',                    // 6个月小猫
            cat7: '',                    // 7个月小猫
            cat8: '',                    // 8个月小猫
            cat9: '',                    // 9个月小猫
            cat10: '',                   // 10个月小猫
            cat11: '',                   // 11个月小猫
            cat12: '',                   // 12个月小猫
            adultCat: '',                // 健康成猫
            fatCat: '',                  // 胖猫
            sterilizedCat: '',           // 绝育猫
            lactationCat: ''            // 哺乳期猫咪
          },
          fat: {
           cat1: '',                    // 1个月小猫
           cat2: '',                    // 2个月小猫
           cat3: '',                    // 3个月小猫
           cat4: '',                    // 4个月小猫
           cat5: '',                    // 5个月小猫
           cat6: '',                    // 6个月小猫
           cat7: '',                    // 7个月小猫
           cat8: '',                    // 8个月小猫
           cat9: '',                    // 9个月小猫
           cat10: '',                   // 10个月小猫
           cat11: '',                   // 11个月小猫
           cat12: '',                   // 12个月小猫
           adultCat: '',                // 健康成猫
           fatCat: '',                  // 胖猫
           sterilizedCat: '',           // 绝育猫
           lactationCat: ''             // 哺乳期猫咪
          }
        }
      }
    },
    watch: {
      'params.calorie.cat6': {
        handler(val, oldVal) {
          this.params.calorie.cat1 = val
          this.params.calorie.cat2 = val
          this.params.calorie.cat3 = val
          this.params.calorie.cat4 = val
          this.params.calorie.cat5 = val
        },
        deep: true
      },
      'params.protein.cat6': {
        handler(val, oldVal) {
          this.params.protein.cat1 = val
          this.params.protein.cat2 = val
          this.params.protein.cat3 = val
          this.params.protein.cat4 = val
          this.params.protein.cat5 = val
        },
        deep: true
      },
      'params.fat.cat6': {
        handler(val, oldVal) {
          this.params.fat.cat1 = val
          this.params.fat.cat2 = val
          this.params.fat.cat3 = val
          this.params.fat.cat4 = val
          this.params.fat.cat5 = val
        },
        deep: true
      }
    },
    methods: {
      fetchParamsConfig() {
        this.$axios.get(this.$apis.config.params.detail)
        .then(res => {
          this.params = Object.assign({calorie: {}, protein: {}, fat: {}}, res)
        })
        .catch(error => {
          this.$message.error(error.message)
        })
      },
      handleSubmit(type) {
        let params = {
          k: type,
          v: JSON.stringify(this.params[type])
        }
        this.$axios.post(this.$apis.config.params.update, params)
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
    },
    created() {
      this.fetchParamsConfig()
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .setting-params {
    display: flex;
  }
</style>