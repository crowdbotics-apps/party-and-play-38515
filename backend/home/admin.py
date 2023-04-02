from django.contrib import admin
from .models import Account_Settings,Bank_Account,Booking,Budget,Customer,Event,Notification,Payment,Reviews,Service,Service_Type,Settings,User_Role,Vendor
admin.site.register(Event)
admin.site.register(Vendor)
admin.site.register(Service)
admin.site.register(Payment)
admin.site.register(Booking)
admin.site.register(Notification)
admin.site.register(Customer)
admin.site.register(Settings)
admin.site.register(Account_Settings)
admin.site.register(Budget)
admin.site.register(Service_Type)
admin.site.register(Reviews)
admin.site.register(Bank_Account)
admin.site.register(User_Role)

# Register your models here.
