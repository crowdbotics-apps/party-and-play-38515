from django.contrib import admin
from .models import Bank_Account,Budget,Customer,Event,Notification,Payment,Reviews,Service,Service_Type,Settings,User_Role,Vendor
admin.site.register(Event)
admin.site.register(Vendor)
admin.site.register(Service)
admin.site.register(Payment)
admin.site.register(Notification)
admin.site.register(Customer)
admin.site.register(Budget)
admin.site.register(Service_Type)
admin.site.register(Reviews)
admin.site.register(Bank_Account)
admin.site.register(User_Role)
admin.site.register(Settings)

# Register your models here.
