import ProfileNavigator from "../navigators/ProfileNavigator";
import { Activity, Profile, Statistics, Shop } from "../screens/index";

const dataTab = [
    {
      id: 1,
      name: "Actividad",
      component: Activity,
      icon: "flash-outline",
      headerShow : true
    },
    { id: 2, name: "Perfil", component: ProfileNavigator, icon: "person-outline" , headerShow : false },
    {
      id: 3,
      name: "Estadisticas",
      component: Statistics,
      icon: "stats-chart-outline",
      headerShow : true
    },
    { id: 4, name: "Tienda", component: Shop, icon: "storefront-outline" , headerShow : false },
  ];
  
  export default dataTab