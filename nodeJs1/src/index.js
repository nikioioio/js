import { HeaderComponent } from './components/Header.component'
import { NavigationComponent } from './components/Navigation.component'
import { PostsComponent } from './components/Posts.component'
import { FavoriteComponent } from './components/Favorite.component'
import { CreateComponent } from './components/Create.component'

new HeaderComponent('header')

const navigation = new NavigationComponent('navigation')

const postComponent =  new PostsComponent('posts')

const favoriteComponent =  new FavoriteComponent('favorite')

const createComponent =  new CreateComponent('create')


navigation.registerTabs([
    {name: 'posts', component: postComponent},
    {name: 'favorite', component: favoriteComponent},
    {name: 'create', component: createComponent},
])