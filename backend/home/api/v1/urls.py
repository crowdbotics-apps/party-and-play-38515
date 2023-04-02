from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import Account_SettingsViewSet,Bank_AccountViewSet,BookingViewSet,BudgetViewSet,CustomerViewSet,EventViewSet,NotificationViewSet,PaymentViewSet,ReviewsViewSet,ServiceViewSet,Service_TypeViewSet,SettingsViewSet,VendorViewSet

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
router.register('account_settings', Account_SettingsViewSet )
router.register('budget', BudgetViewSet )
router.register('service_type', Service_TypeViewSet )
router.register('reviews', ReviewsViewSet )
router.register('bank_account', Bank_AccountViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
