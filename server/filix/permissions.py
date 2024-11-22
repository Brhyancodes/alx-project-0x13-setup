from rest_framework.permissions import BasePermission, SAFE_METHODS

class IsAdminOrReadOnly(BasePermission):
    """
    Custom permission to allow read-only access for everyone, but restrict
    write operations (POST, PUT, PATCH, DELETE) to admin users only.
    """
    def has_permission(self, request, view):
        # Allow safe methods (GET, HEAD, OPTIONS) for everyone
        if request.method in SAFE_METHODS:
            return True
        # Otherwise, only allow access to admin users
        return request.user and request.user.is_staff
