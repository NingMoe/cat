const apis = {
    // 设置
    config: {
        // 参数
        params: {
            // 详情
            detail: '/admin/config/config.htm',
            // 更新
            update: '/admin/config/set-config.htm'
        },
        // 广告
        ads: {
            // 详情
            detail: '/admin/config/ads.htm',
            // 更新
            update: '/admin/config/set-ad.htm'
        }
    },
    // 产品
    product: {
        // 分页列表
        list: '/admin/product/page.htm',
        // 编辑&&添加
        edit: '/admin/product/edit.htm',
        // 删除
        delete: '/admin/product/delete.htm',
        // 排序
        sort: '/admin/product/update-score.htm'
    },
    user: {
        logout: '/admin/j_spring_security_logout'
    },
    upyun: {
        token: '/common/form-upload-params.htm',
        action: 'https://v0.api.upyun.com'
    }
}

apis.install = Vue => {
    Vue.prototype.$apis = apis
}

export default apis
