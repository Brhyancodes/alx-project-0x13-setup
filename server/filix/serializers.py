from rest_framework import serializers
from .models import Category, unitCategory, Product, Customer, Cart, CartItem, Order, OrderItem, Payment

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'description', 'created_at', 'updated_at']


class UnitCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = unitCategory
        fields = ['id', 'unit', 'quantity', 'created_at', 'updated_at']


class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)
    unitcategory = UnitCategorySerializer(read_only=True)
    category_id = serializers.PrimaryKeyRelatedField(queryset=Category.objects.all(), source='category', write_only=True)
    unitcategory_id = serializers.PrimaryKeyRelatedField(queryset=unitCategory.objects.all(), source='unitcategory', write_only=True)

    class Meta:
        model = Product
        fields = [
            'id', 'name', 'description', 'price', 'quantity', 'image_url', 'created_at', 'updated_at',
            'category', 'category_id', 'unitcategory', 'unitcategory_id', 'Expire_date'
        ]


class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ['id', 'Full_name', 'Email', 'Password', 'Address', 'phone_number', 'updated_at']
        extra_kwargs = {'Password': {'write_only': True}}


class CartSerializer(serializers.ModelSerializer):
    customer = CustomerSerializer(read_only=True)
    customer_id = serializers.PrimaryKeyRelatedField(queryset=Customer.objects.all(), source='Customer', write_only=True)

    class Meta:
        model = Cart
        fields = ['id', 'customer', 'customer_id', 'total_price', 'created_at', 'updated_at']


class CartItemSerializer(serializers.ModelSerializer):
    cart = CartSerializer(read_only=True)
    cart_id = serializers.PrimaryKeyRelatedField(queryset=Cart.objects.all(), source='cart', write_only=True)
    product = ProductSerializer(read_only=True)
    product_id = serializers.PrimaryKeyRelatedField(queryset=Product.objects.all(), source='product', write_only=True)

    class Meta:
        model = CartItem
        fields = ['id', 'cart', 'cart_id', 'product', 'product_id', 'quantity', 'created_at', 'updated_at']


class OrderSerializer(serializers.ModelSerializer):
    customer = serializers.StringRelatedField(source='Customer', read_only=True)
    customer_id = serializers.PrimaryKeyRelatedField(queryset=Customer.objects.all(), source='Customer', write_only=True)
    status = serializers.ChoiceField(choices=Order.STATUS_CHOICES, default='pending')

    class Meta:
        model = Order
        fields = ['id', 'customer', 'customer_id', 'created_at', 'updated_at', 'status']


class OrderItemSerializer(serializers.ModelSerializer):
    order = OrderSerializer(read_only=True)
    order_id = serializers.PrimaryKeyRelatedField(queryset=Order.objects.all(), source='order', write_only=True)
    product = ProductSerializer(read_only=True)
    product_id = serializers.PrimaryKeyRelatedField(queryset=Product.objects.all(), source='product', write_only=True)

    class Meta:
        model = OrderItem
        fields = ['id', 'order', 'order_id', 'product', 'product_id', 'quantity', 'created_at', 'updated_at']


class PaymentSerializer(serializers.ModelSerializer):
    order = OrderSerializer(read_only=True)
    order_id = serializers.PrimaryKeyRelatedField(queryset=Order.objects.all(), source='order', write_only=True)

    class Meta:
        model = Payment
        fields = ['id', 'order', 'order_id', 'status', 'updated_at']
