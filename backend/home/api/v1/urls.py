from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import BookingViewSet,CustomerViewSet,EventViewSet,NotificationViewSet,PaymentViewSet,ServiceViewSet,SettingsViewSet,VendorViewSet

from home.api.v1.viewsets import (
    SignupViewSet,
    LoginViewSet,
)

router = DefaultRouter()
router.register("signup", SignupViewSet, basename="signup")
router.register("login", LoginViewSet, basename="login")
router.register('event', EventViewSet )
router.register('vendor', VendorViewSet )
router.register('service', ServiceViewSet )
router.register('payment', PaymentViewSet )
router.register('booking', BookingViewSet )
router.register('notification', NotificationViewSet )
router.register('customer', CustomerViewSet )
router.register('settings', SettingsViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
