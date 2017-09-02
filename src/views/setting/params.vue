<template>
  <el-row class="setting-params">
    <el-col :span="12">
      <el-form :model="form" label-width="100px">
        <h3>热量摄入指数，热量摄入=体重^0.75*70*摄入指数</h3>
        <el-form-item label="1-6个月小猫">
          <el-input v-model="form.calorie.cat6"></el-input>
        </el-form-item>
        <el-form-item label="7个月小猫">
          <el-input v-model="form.calorie.cat7"></el-input>
        </el-form-item>
        <el-form-item label="8个月小猫">
          <el-input v-model="form.calorie.cat8"></el-input>
        </el-form-item>
        <el-form-item label="9个月小猫">
          <el-input v-model="form.calorie.cat9"></el-input>
        </el-form-item>
        <el-form-item label="10个月小猫">
          <el-input v-model="form.calorie.cat10"></el-input>
        </el-form-item>
        <el-form-item label="11个月小猫">
          <el-input v-model="form.calorie.cat11"></el-input>
        </el-form-item>
        <el-form-item label="12个月小猫">
          <el-input v-model="form.calorie.cat12"></el-input>
        </el-form-item>
        <el-form-item label="健康成猫">
          <el-input v-model="form.calorie.adultCat"></el-input>
        </el-form-item>
        <el-form-item label="胖猫">
          <el-input v-model="form.calorie.fatCat"></el-input>
        </el-form-item>
        <el-form-item label="绝育猫">
          <el-input v-model="form.calorie.sterilizedCat"></el-input>
        </el-form-item>
        <el-form-item label="哺乳期猫咪">
          <el-input v-model="form.calorie.lactationCat"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">保存热量指数</el-button>
          <el-button>取消</el-button>
        </el-form-item>
        <h3>蛋白质参数，蛋白质摄入=体重*蛋白质参数</h3>
        <el-form-item label="1-6个月小猫">
          <el-input v-model="form.protein.cat6"></el-input>
        </el-form-item>
        <el-form-item label="7个月小猫">
          <el-input v-model="form.protein.cat7"></el-input>
        </el-form-item>
        <el-form-item label="8个月小猫">
          <el-input v-model="form.protein.cat8"></el-input>
        </el-form-item>
        <el-form-item label="9个月小猫">
          <el-input v-model="form.protein.cat9"></el-input>
        </el-form-item>
        <el-form-item label="10个月小猫">
          <el-input v-model="form.protein.cat10"></el-input>
        </el-form-item>
        <el-form-item label="11个月小猫">
          <el-input v-model="form.protein.cat11"></el-input>
        </el-form-item>
        <el-form-item label="12个月小猫">
          <el-input v-model="form.protein.cat12"></el-input>
        </el-form-item>
        <el-form-item label="健康成猫">
          <el-input v-model="form.protein.adultCat"></el-input>
        </el-form-item>
        <el-form-item label="胖猫">
          <el-input v-model="form.protein.fatCat"></el-input>
        </el-form-item>
        <el-form-item label="绝育猫">
          <el-input v-model="form.protein.sterilizedCat"></el-input>
        </el-form-item>
        <el-form-item label="哺乳期猫咪">
          <el-input v-model="form.protein.lactationCat"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">保存蛋白质指数</el-button>
          <el-button>取消</el-button>
        </el-form-item>
        <h3>脂肪参数，脂肪摄入=体重*脂肪参数</h3>
        <el-form-item label="1-6个月小猫">
          <el-input v-model="form.fat.cat6"></el-input>
        </el-form-item>
        <el-form-item label="7个月小猫">
          <el-input v-model="form.fat.cat7"></el-input>
        </el-form-item>
        <el-form-item label="8个月小猫">
          <el-input v-model="form.fat.cat8"></el-input>
        </el-form-item>
        <el-form-item label="9个月小猫">
          <el-input v-model="form.fat.cat9"></el-input>
        </el-form-item>
        <el-form-item label="10个月小猫">
          <el-input v-model="form.fat.cat10"></el-input>
        </el-form-item>
        <el-form-item label="11个月小猫">
          <el-input v-model="form.fat.cat11"></el-input>
        </el-form-item>
        <el-form-item label="12个月小猫">
          <el-input v-model="form.fat.cat12"></el-input>
        </el-form-item>
        <el-form-item label="健康成猫">
          <el-input v-model="form.fat.adultCat"></el-input>
        </el-form-item>
        <el-form-item label="胖猫">
          <el-input v-model="form.fat.fatCat"></el-input>
        </el-form-item>
        <el-form-item label="绝育猫">
          <el-input v-model="form.fat.sterilizedCat"></el-input>
        </el-form-item>
        <el-form-item label="哺乳期猫咪">
          <el-input v-model="form.fat.lactationCat"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">保存脂肪参数</el-button>
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
        form: {
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
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>

<style scoped>
  .setting-params {
    display: flex;
    padding: 20px;
  }
</style>