import {HttpClient} from '@angular/common/http';
import {InjectionToken} from '@angular/core';

export let PISKANDAR_API = new InjectionToken<HttpClient>('piskandar.api.client');
