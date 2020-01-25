import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

import Landing from '../containers/Landing';
import Login from '../containers/Login/components';
import Home from '../containers/Home/components';
import OtherPages from '../containers/OtherPages/components';

import Divs from '../containers/Divs/components';
import DivEdit from '../containers/Divs/components/edit';

import Result from '../containers/Result/components';
// import ResultEdit from "../containers/Result/components/edit";
// import ResultAdd from "../containers/Result/components/add";
// import BoardR from "../containers/Result/components/Board";
// import Grade from "../containers/Result/components/Grade";
// import PecResult from "../containers/Result/components/Pec";
// import AddContent from "../containers/Result/components/Grade/AddContent";
// import EditContent from "../containers/Result/components/Grade/EditContent";
// import AddTopper from "../containers/Result/components/Grade/AddTopper";
// import EditTopper from "../containers/Result/components/Grade/EditTopper";
// import AddTopperStudent from "../containers/Result/components/Grade/AddStudent";

import Banner from '../containers/Banner/components';
import BannerEdit from '../containers/Banner/components/edit';
import BannerAdd from '../containers/Banner/components/add';

import BottomImage from '../containers/BottomImage/components';
import BottomImageEdit from '../containers/BottomImage/components/edit';

import Slider from '../containers/Slider/components';
import SliderEdit from '../containers/Slider/components/edit';
import SliderAdd from '../containers/Slider/components/add';

import SocialLinks from '../containers/SocialLinks/components';
import SocialLinksEdit from '../containers/SocialLinks/components/edit';

import Seo from '../containers/Seo/components';
import SeoEdit from '../containers/Seo/components/edit';

import ADS from '../containers/Ads/components';
import SideAd from '../containers/Ads/components/sideAd';
import SideAdEdit from '../containers/Ads/components/editSideAd';
import SideAdAdd from '../containers/Ads/components/addSideAd';
import ContentAd from '../containers/Ads/components/contentAd';
import ContentAdEdit from '../containers/Ads/components/editContentAd';
import ContentAdAdd from '../containers/Ads/components/addContentAd';

import Board from '../containers/Board/components';
import DateSheet from '../containers/DateSheet/components';

const NoMatch = ({ location }) => (
  <div>
    <h3>
      No Found for <code>{location.pathname}</code>
    </h3>
  </div>
);
const Routes = () => (
  <Switch>
    <Route exact path='/admin/' component={Landing} />
    <Route path='/admin/login' component={Login} />

    <PrivateRoute exact path='/admin/dashboard' component={Home} />

    <PrivateRoute exact path='/admin/otherpages' component={OtherPages} />

    <PrivateRoute exact path='/admin/divs' component={Divs} />
    <PrivateRoute exact path='/admin/divs/edit/:id' component={DivEdit} />

    {/* <PrivateRoute path="/admin/result/board/:board/:grade" component={Grade} />
    <PrivateRoute path="/admin/result/board/:board" component={BoardR} />
    <PrivateRoute path="/admin/result/addcontent" component={AddContent} />
    <PrivateRoute path="/admin/result/editcontent" component={EditContent} />
    <PrivateRoute path="/admin/result/addtopper" component={AddTopper} />
    <PrivateRoute path="/admin/result/edittopper" component={EditTopper} />
    <PrivateRoute
      path="/admin/result/addtopperstudent"
      component={AddTopperStudent}
    />
    <PrivateRoute path="/admin/result/pec/:id" component={PecResult} />
    <PrivateRoute exact path="/admin/result" component={Result} />
    <PrivateRoute exact path="/admin/result/edit/:id" component={ResultEdit} />
    <PrivateRoute exact path="/admin/result/add" component={ResultAdd} /> */}

    <PrivateRoute exact path='/admin/banner' component={Banner} />
    <PrivateRoute exact path='/admin/banner/edit/:id' component={BannerEdit} />
    <PrivateRoute exact path='/admin/banner/add' component={BannerAdd} />

    <PrivateRoute exact path='/admin/bottomimage' component={BottomImage} />
    <PrivateRoute
      exact
      path='/admin/bottomimage/edit/:id'
      component={BottomImageEdit}
    />

    <PrivateRoute exact path='/admin/slider' component={Slider} />
    <PrivateRoute exact path='/admin/slider/edit/:id' component={SliderEdit} />
    <PrivateRoute exact path='/admin/slider/add' component={SliderAdd} />

    <PrivateRoute exact path='/admin/social' component={SocialLinks} />
    <PrivateRoute
      exact
      path='/admin/social/edit/:id'
      component={SocialLinksEdit}
    />

    <PrivateRoute exact path='/admin/seo' component={Seo} />
    <PrivateRoute exact path='/admin/seo/edit/:id' component={SeoEdit} />

    <PrivateRoute exact path='/admin/ads' component={ADS} />

    <PrivateRoute exact path='/admin/ads/sideAd' component={SideAd} />
    <PrivateRoute
      exact
      path='/admin/ads/sideAd/edit/:id'
      component={SideAdEdit}
    />
    <PrivateRoute exact path='/admin/ads/sideAd/add' component={SideAdAdd} />
    <PrivateRoute
      path='/admin/ads/sideAd/:page/edit/:id'
      component={SideAdEdit}
    />
    <PrivateRoute
      exact
      path='/admin/ads/sideAd/:page/add'
      component={SideAdAdd}
    />
    <PrivateRoute exact path='/admin/ads/sideAd/:page' component={SideAd} />

    <PrivateRoute exact path='/admin/ads/contentAd' component={ContentAd} />
    <PrivateRoute
      exact
      path='/admin/ads/contentAd/edit/:id'
      component={ContentAdEdit}
    />
    <PrivateRoute
      exact
      path='/admin/ads/contentAd/add'
      component={ContentAdAdd}
    />
    <PrivateRoute
      path='/admin/ads/contentAd/:page/edit/:id'
      component={ContentAdEdit}
    />
    <PrivateRoute
      exact
      path='/admin/ads/contentAd/:page/add'
      component={ContentAdAdd}
    />
    <PrivateRoute path='/admin/ads/contentAd/:page' component={ContentAd} />

    <PrivateRoute path='/admin/result' component={Result} />
    <PrivateRoute path='/admin/datesheet' component={DateSheet} />
    <PrivateRoute path='/admin/board' component={Board} />

    <Route component={NoMatch} />
  </Switch>
);
export default Routes;
