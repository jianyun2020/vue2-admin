import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/auto'
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

