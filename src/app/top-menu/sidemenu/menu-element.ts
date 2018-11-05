export const adminmenus = [
    {
        'name': 'Dashboard',
        'icon': './assets/icon/dashboard.svg',
        'link': false,
        'open': false,
        'chip': { 'value': 1, 'color': 'accent' },
        'sub': [
            {
                'name': 'Dashboard',
                'link': '/optical/dashboard',
                'icon': './assets/icon/dashboard.svg',
                'chip': false,
                'open': true,
                'Tooltip':'DashBoard'
            }
        ]
    },
    {
        'name'   : 'Employees',
        'icon'   : './assets/icon/Employee.svg',
        'open'   : false,
        'link'   : false,
        'sub'    :  [
                        {
                            'name': 'Add Employee',
                            'icon': './assets/icon/addemployee.svg',
                            'open'   : false,
                            'link':'employees/addemployees',
                            'Tooltip':'AddEmployee'
                        },
                        {
                            'name': 'List Employee',
                            'icon': './assets/icon/listemployee.svg',
                            'open'   : false,
                            'link':'employees/listemployees',
                            'Tooltip':'ListEmployee'
                        }
                    ]
    },
    {
        'name'   : 'Products',
        'icon'   : './assets/icon/product.svg',
        'open'   : false,
        'link'   : false,
        'sub'    :  [
                        {
                            'name': 'Glasses',
                            'icon': './assets/icon/Spects.svg',
                            'open'   : false,
                            'link':false,
                            'sub':[
                                
                                    {
                                        'name': 'Frame Material',
                                        'icon': './assets/icon/frame_material.svg',
                                        'open' : false,
                                        'link':'products/glasses/frame_material',
                                        'Tooltip':'FrameMaterial'
                                    },
                                    {
                                        'name': 'Frame Type',
                                        'icon': './assets/icon/frame_type.svg',
                                        'open': false,
                                        'link':'products/glasses/frame_type',
                                        'Tooltip':'FrameType'
                                    },
                                    {
                                        'name': 'Lens Type',
                                        'icon': './assets/icon/Lens.svg',
                                        'open': false,
                                        'link':'products/glasses/lens_type',
                                        'Tooltip':'LensType'
                                    }
                            
                        ]
                        },
                        {
                            'name': 'Boxes',
                            'icon': './assets/icon/Box.svg',
                            'open'   : false,
                            'link':'products/boxes/box_model',
                            'Tooltip':'Boxes'
                        }
                    ]
    },
]
    export const Employee_menus = [
        
       {
            'name'   : 'Employees',
            'icon'   : './assets/icon/Employee.svg',
            'open'   : false,
            'link'   : false,
            'sub'    :  [
                            {
                                'name': 'List Employee',
                                'icon': './assets/icon/listemployee.svg',
                                'open'   : false,
                                'link':'employees/listemployees'
                            }
                        ]
        },
    
    // {
    //     'name': 'Material Widget',
    //     'icon': 'widgets',
    //     'link': false,
    //     'open': false,
    //     'sub': [
    //         {
    //             'name': 'Buttons',
    //             'link': 'material-widgets/buttons',
    //             'icon': 'indeterminate_check_box',
    //             'chip': false,
    //             'open': false,
    //         },
    //         {
    //             'name': 'List',
    //             'link': 'material-widgets/list',
    //             'icon': 'list',
    //             'chip': false,
    //             'open': false,
    //         },
    //         {

    //             'name': 'Stepper',
    //             'link': 'material-widgets/stepper',
    //             'icon': 'view_week',
    //             'chip': false,
    //             'open': false,

    //         },
    //         {
    //             'name': 'Expansion',
    //             'link': 'material-widgets/expansion',
    //             'icon': 'web_aaset',
    //             'chip': false,
    //             'open': false,
    //         },
    //         {
    //             'name': 'Progress Spinner',
    //             'link': 'material-widgets/spinner',
    //             'icon': 'cached',
    //             'chip': false,
    //             'open': false,
    //         },
    //         {
    //             'name': 'Cards',
    //             'link': 'material-widgets/cards',
    //             'icon': 'crop_16_9',
    //             'chip': false,
    //             'open': false,
    //         },
    //         {
    //             'name': 'Icons',
    //             'link': 'material-widgets/icons',
    //             'icon': 'gif',
    //             'chip': false,
    //             'open': false,
    //         },
    //         {

    //             'name': 'AutoComplete',
    //             'link': 'material-widgets/autocomplete',
    //             'icon': 'get_app',
    //             'chip': false,
    //             'open': false,
    //         },
    //         {
    //             'name': 'CheckBox',
    //             'link': 'material-widgets/checkbox',
    //             'icon': 'check_box',
    //             'chip': false,
    //             'open': false,
    //         },
    //         {
    //             'name': 'DatePicker',
    //             'link': 'material-widgets/datepicker',
    //             'icon': 'date_range',
    //             'chip': false,
    //             'open': false,
    //         },

    //         {
    //             'name': 'Slider',
    //             'link': 'material-widgets/slider',
    //             'icon': 'keyboard_tab',
    //             'chip': false,
    //             'open': false,
    //         },
    //         {
    //             'name': 'Slide Toggle',
    //             'link': 'material-widgets/slide-toggle',
    //             'icon': 'album',
    //             'chip': false,
    //             'open': false,
    //         },
    //         {
    //             'name': 'Menu',
    //             'icon': 'menu',
    //             'link': 'material-widgets/menu',
    //             'chip': false,
    //             'open': false,
    //         },
    //         {
    //             'name': 'Progress Bar',
    //             'link': 'material-widgets/progress-bar',
    //             'icon': 'trending_flat',
    //             'chip': false,
    //             'open': false,
    //         },
    //         {
    //             'name': 'Input',
    //             'icon': 'input',
    //             'link': 'material-widgets/input',
    //             'open': false,
    //         },
    //         {
    //             'name': 'Radio',
    //             'icon': 'radio_button_checked',
    //             'link': 'material-widgets/radio',
    //             'chip': false,
    //             'open': false,
    //         },
    //         {
    //             'name': 'Select',
    //             'icon': 'select_all',
    //             'link': 'material-widgets/select',
    //             'open': false,
    //         },
    //     ]
    // },
    
    // {
    //     'name': 'Tables',
    //     'icon': 'list',
    //     'link': false,
    //     'open': false,
    //     'chip': { 'value': 2, 'color': 'accent' },
    //     'sub': [
    //         {
    //             'name': 'Fixed',
    //             'icon': 'filter_list',
    //             'link': 'tables/fixed',
    //             'open': false,
    //         },
    //         {
    //             'name': 'Feature',
    //             'icon': 'done_all',
    //             'link': 'tables/featured',
    //             'open': false,
    //         },
    //         {
    //             'name': 'Responsive Tables',
    //             'icon': 'filter_center_focus',
    //             'link': 'tables/responsive',
    //             'open': false,
    //         }
    //     ]

    // },
    // {
    //     'name': 'Guarded Routes',
    //     'icon': 'mode_edit',
    //     'link': '/optical/guarded-routes',
    //     'open': false,
    // }, {
    //     'name': 'Scrumboard',
    //     'open': false,
    //     'link': '/optical/scrumboard',
    //     'icon': 'grade',
    // }, {
    //     'name': 'Applications',
    //     'icon': 'view_module',
    //     'open': false,
    //     'link': false,
    //     'sub': [
    //         {
    //             'name': 'chat',
    //             'icon': 'chat',
    //             'link': 'chats/chat',
    //             'open': false,
    //         },
    //         {
    //             'name': 'mail',
    //             'icon': 'mail',
    //             'link': 'mail/mail',
    //             'open': false,
    //         },
    //         {
    //             'name': 'Editor',
    //             'icon': 'editor',
    //             'link': 'editor/editor',
    //             'open': false,
    //         }
    //     ]
    // }
    // , {
    //     'name': 'Pages',
    //     'icon': 'content_copy',
    //     'open': false,
    //     'link': false,
    //     'sub': [
    //         {
    //             'name': 'Login',
    //             'icon': 'work',
    //             'open': false,
    //             'link': '../login',
    //         }, {
    //             'name': 'Services',
    //             'icon': 'local_laundry_service',
    //             'open': false,
    //             'link': 'pages/services',
    //         }, {
    //             'name': 'Contact',
    //             'icon': 'directions',
    //             'open': false,
    //             'link': 'pages/contact'
    //         }
    //     ]
    // }
    // , {

    //     'name': 'Charts',
    //     'icon': 'pie_chart_outlined',
    //     'open': false,
    //     'link': false,
    //     'sub': [
    //         {
    //             'name': 'chartjs',
    //             'icon': 'view_list',
    //             'link': 'charts/chartjs',
    //             'open': false,

    //         },
    //         {
    //             'name': 'ngx-chart',
    //             'icon': 'show_chart',
    //             'open': false,
    //             'link': 'charts/ngx-charts',
    //         },
    //         {
    //             'name': 'nvd3',
    //             'icon': 'pie_chart',
    //             'open': false,
    //             'link': 'charts/nvd3-charts',
    //         }
    //     ]
    // }, {
    //     'name': 'maps',
    //     'icon': 'map',
    //     'open': false,
    //     'link': false,
    //     'sub': [
    //         {
    //             'name': 'google-map',
    //             'icon': 'directions',
    //             'link': 'maps/googlemap',
    //             'open': false,
    //         },
    //         {
    //             'name': 'leaflet-map',
    //             'icon': 'directions',
    //             'link': 'maps/leafletmap',
    //             'open': false,
    //         }
    //     ]
    // }
];
