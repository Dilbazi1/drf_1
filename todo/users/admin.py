from django.contrib import admin
from users import models as model_users
# Register your models here.
@admin.register(model_users.User)
class UserAdmin(admin.ModelAdmin):
    list_display = ["id",'username','email','password','is_active','is_staff','date_joined']
    list_editable = ['is_active']
    ordering = ['-date_joined']
    list_filter = ['is_active','is_staff']