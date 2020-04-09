import axios from 'axios'


// 分类页面axios请求封装

export function getClassiftList() {
    return axios({
        url: '/json/Classift/ProductList.json',
        methods: 'get',
    })
}

