from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Category, unitCategory, Product, Customer, Cart, CartItem, Order, OrderItem, Payment
from .serializers import (
    CategorySerializer, UnitCategorySerializer, ProductSerializer, CustomerSerializer,
    CartSerializer, CartItemSerializer, OrderSerializer, OrderItemSerializer, PaymentSerializer
)


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class UnitCategoryViewSet(viewsets.ModelViewSet):
    queryset = unitCategory.objects.all()
    serializer_class = UnitCategorySerializer


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class CustomerViewSet(viewsets.ModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer

    # Override the create method to handle password encryption
    def create(self, request, *args, **kwargs):
        data = request.data.copy()
        password = data.pop('Password', None)
        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)

        # Set the password
        customer = serializer.instance
        if password:
            customer.Password = password  # Replace with custom hashing if needed
            customer.save()

        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


class CartViewSet(viewsets.ModelViewSet):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer


class CartItemViewSet(viewsets.ModelViewSet):
    queryset = CartItem.objects.all()
    serializer_class = CartItemSerializer


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


class OrderItemViewSet(viewsets.ModelViewSet):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer


class PaymentViewSet(viewsets.ModelViewSet):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer

