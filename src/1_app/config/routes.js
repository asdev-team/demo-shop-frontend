import { Page404 } from '../../3_pages/404'
import { Admin, AdminCategories, AdminCategoriesSet, AdminDashboard, AdminFAQ, AdminProducts, AdminProductsSet, AdminReviews, AdminReviewsSet } from '../../3_pages/Admin'
import AdminFAQSet from '../../3_pages/Admin/FAQ/AdminFAQSet'
import { Home } from '../../3_pages/Home'
import { IconDashboard, IconShop } from '../../7_shared/Icons'
import IconCategories from '../../7_shared/Icons/IconCategories'
import IconFAQ from '../../7_shared/Icons/IconFAQ'
import IconProducts from '../../7_shared/Icons/IconProducts'
import IconReviews from '../../7_shared/Icons/IconReviews'

export const routes = [
	{ id: 'home', path: '/', title: 'Магазин', permissions: [ 'user', 'admin' ], menu: true, Component: Home, Icon: IconShop },
	{ id: '404', path: '/404', title: 'Страница не найдена', permissions: [ 'user', 'admin' ], menu: false, Component: Page404 }
]

export const routesAdmin = [
	// Главная админки
	{ id: 'admin', path: '/admin', title: 'Админ панель', permissions: [ 'admin' ], menu: true, Component: Admin, Child: AdminDashboard, Icon: IconDashboard },
	// Категории
	{ id: 'admin-categories', path: '/admin/categories', title: 'Категории', permissions: [ 'admin' ], menu: true, Component: Admin, Child: AdminCategories, Icon: IconCategories },
	{ id: 'admin-categories-edit', path: '/admin/categories/edit/:id', title: 'Редактировать', permissions: [ 'admin' ], menu: false, Component: Admin, Child: AdminCategoriesSet },
	{ id: 'admin-categories-add', path: '/admin/categories/add', title: 'Добавить', permissions: [ 'admin' ], menu: false, Component: Admin, Child: AdminCategoriesSet },
	// Товары
	{ id: 'admin-products', path: '/admin/products', title: 'Товары', permissions: [ 'admin' ], menu: true, Component: Admin, Child: AdminProducts, Icon: IconProducts },
	{ id: 'admin-products-edit', path: '/admin/products/edit/:id', title: 'Редактировать', permissions: [ 'admin' ], menu: false, Component: Admin, Child: AdminProductsSet },
	{ id: 'admin-products-add', path: '/admin/products/add', title: 'Добавить', permissions: [ 'admin' ], menu: false, Component: Admin, Child: AdminProductsSet },
	// Отзывы
	{ id: 'admin-reviews', path: '/admin/reviews', title: 'Отзывы', permissions: [ 'admin' ], menu: true, Component: Admin, Child: AdminReviews, Icon: IconReviews },
	{ id: 'admin-reviews-edit', path: '/admin/reviews/edit/:id', title: 'Редактировать', permissions: [ 'admin' ], menu: false, Component: Admin, Child: AdminReviewsSet },
	{ id: 'admin-reviews-add', path: '/admin/reviews/add', title: 'Добавить', permissions: [ 'admin' ], menu: false, Component: Admin, Child: AdminReviewsSet },
	
	// FAQ
	{ id: 'admin-faq', path: '/admin/faq', title: 'FAQ', permissions: [ 'admin' ], menu: true, Component: Admin, Child: AdminFAQ, Icon: IconFAQ },
	{ id: 'admin-faq-edit', path: '/admin/faq/edit/:id', title: 'Редактировать', permissions: [ 'admin' ], menu: false, Component: Admin, Child: AdminFAQSet },
	{ id: 'admin-faq-add', path: '/admin/faq/add', title: 'Добавить', permissions: [ 'admin' ], menu: false, Component: Admin, Child: AdminFAQSet }
]