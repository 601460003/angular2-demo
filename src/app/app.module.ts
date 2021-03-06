// ;NgModule是我们组织Angular应用所必须的根模块
import  { NgModule }  from '@angular/core';
// 提供了启动和运行浏览器应用的那些基本的服务提供商
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
// 引入路由模块
import { AppRoutingModule }     from './app-routing.module';
// 所有组件
import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroSearchComponent }  from './hero-search/hero-search.component';
import { MessagesComponent }    from './messages/messages.component';
import { CardComponent } from './card/card.component';
import { ElModule } from 'element-angular';
import { ZhangComponent } from './zhang/zhang.component';
import { WeiComponent } from './wei/wei.component'

@NgModule({          //用于定义模块用的装饰器
  imports: [         //用来导入当前模块所需的其他模块。
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ElModule.forRoot(),

    //模块，依赖注入，指令，服务，组件，原数据，模板，数据绑定
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],

  // 新的组件加入到我们的根模板里面//声明导入模块依赖的组件、指令等
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    CardComponent,
    ZhangComponent,
    WeiComponent
  ],
  //只有在主模块 AppModule 会使用到.
  bootstrap: [ AppComponent ]
})
export class AppModule { }
