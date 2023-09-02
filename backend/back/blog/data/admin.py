from django.contrib import admin
from .models import *

# Register your models here.
class appuserAdmin(admin.ModelAdmin):
    list_display=("username","password")

class blogAdmin(admin.ModelAdmin):
    list_display=("bid","uid","title","text","btype","state")

admin.site.register(appuser,appuserAdmin)
admin.site.register(blog,blogAdmin)