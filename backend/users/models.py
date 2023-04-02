from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.urls import reverse
from django.utils.translation import ugettext_lazy as _


class User(AbstractUser):
    # WARNING!
    """
    Some officially supported features of Crowdbotics Dashboard depend on the initial
    state of this User model (Such as the creation of superusers using the CLI
    or password reset in the dashboard). Changing, extending, or modifying this model
    may lead to unexpected bugs and or behaviors in the automated flows provided
    by Crowdbotics. Change it at your own risk.


    This model represents the User instance of the system, login system and
    everything that relates with an `User` is represented by this model.
    """
    name = models.CharField(null=True,blank=True,max_length=255,)
    email = models.EmailField(max_length=254,null=True,blank=True,)
    mobile = models.IntegerField(null=True,blank=True,)
    role_id = models.ForeignKey("home.User_Role",on_delete=models.CASCADE,null=True,blank=True,related_name="user_role_id",)
    customer_id = models.OneToOneField("home.Customer",on_delete=models.CASCADE,null=True,blank=True,related_name="user_customer_id",)
    review_id = models.ForeignKey("home.Reviews",on_delete=models.CASCADE,null=True,blank=True,related_name="user_review_id",)
    notification_id = models.ManyToManyField("home.Notification",blank=True,related_name="user_notification_id",)
    account_id = models.ManyToManyField("home.Bank_Account",blank=True,related_name="user_account_id",)
    def get_absolute_url(self):
        return reverse('users:detail', kwargs={'username': self.username})
