from dataclasses import field
from rest_framework import serializers
from data.models import *

class AppUserSerializer(serializers.ModelSerializer):
    class Meta:
        model=appuser
        fields=("uid","username","password")
    
class BlogSerializer(serializers.ModelSerializer):

    class Meta:
        model=blog
        fields=("bid","uid","title","text","btype","state")