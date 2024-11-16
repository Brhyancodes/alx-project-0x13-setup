from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    CategoryViewSet, UnitCategoryViewSet, ProductViewSet, CustomerViewSet,
    CartViewSet, CartItemViewSet, OrderViewSet, OrderItemViewSet, PaymentViewSet
)

router = DefaultRouter()
router.register(r'categories', CategoryViewSet)
router.register(r'unitcategories', UnitCategoryViewSet)
router.register(r'products', ProductViewSet)
router.register(r'customers', CustomerViewSet)
router.register(r'carts', CartViewSet)
router.register(r'cartitems', CartItemViewSet)
router.register(r'orders', OrderViewSet)
router.register(r'orderitems', OrderItemViewSet)
router.register(r'payments', PaymentViewSet)   

urlpatterns = [
    path('', include(router.urls)),
]
