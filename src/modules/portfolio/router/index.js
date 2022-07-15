
export default{
    name: 'portfolio',
    component: () => import(/* webpackChunkName: "portfolio" */ '@/modules/portfolio/layouts/PortfolioLayout.vue'),
    children: [
        {
            path: 'home',
            name: 'phome',
            component: () => import(/* webpackChunkName: "phome" */ '@/modules/portfolio/views/PortfolioHome.vue')
        },
        {
            path: 'about',
            name: 'pabout',
            component: () => import(/* webpackChunkName: "pabout" */ '@/modules/portfolio/views/PortfolioAbout.vue')
        },
        {
            path: 'formation',
            name: 'pformation',
            component: () => import(/* webpackChunkName: "pabout" */ '@/modules/portfolio/views/PortfolioFormation.vue')
        },
        {
            path: 'contact',
            name: 'pcontact',
            component: () => import(/* webpackChunkName: "pabout" */ '@/modules/portfolio/views/PortfolioContact.vue')
        },
        // {
        //     path: ':id',
        //     name: 'entry',
        //     component: () => import(/* webpackChunkName: "entry" */ '@/modules/daybook/views/EntryView.vue'),
        //     props: (route) =>{
        //         return{
        //             id: route.params.id
        //         }
        //     }
        // },
    ]
}