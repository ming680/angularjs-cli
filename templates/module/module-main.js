import app from '@/app/app-main';
import configs from './config/config';
import filters from './config/filter';
import services from './config/service';
import controllers from './config/controller';
import directives from './config/directive';

for(let config of configs){
    app.config(config);
}
for(let filter of filters){
    app.filter(filter.name, filter.content);
}
for(let service of services){
    app.factory(service.name, service.content);
}
for(let directive of directives){
    app.directive(directive.name, directive.content);
}
for(let controller of controllers){
    app.controller(controller.name, controller.content);
}
