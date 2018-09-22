import { SearchBarImplementComponent } from './../components/search-bar-implement/search-bar-implement';
import { SearchBarComponent } from './../components/search-bar/search-bar';
import { ValidationMessagesComponent } from './../components/validation-messages/validation-messages';
import { ConfigPage } from './../pages/config/config';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http'

import { MyApp } from './app.component';
import { LandingPage } from '../pages/landing/landing';
import { ListPage } from '../pages/list/list';
import { InboxPage } from '../pages/inbox/inbox';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { CommunitiesProvider } from '../providers/communities/communities';
import { ConfigProvider } from '../providers/config/config';
import { EventsProvider } from '../providers/events/events';
import { SecurityProvider } from '../providers/security/security';
import { ApiProvider } from '../providers/api/api';
import { UsersProvider } from '../providers/users/users';
import { AgentSchedulesProvider } from '../providers/agent-schedules/agent-schedules';
import { AgentTypesProvider } from '../providers/agent-types/agent-types';
import { SecurityCompaniesProvider } from '../providers/security-companies/security-companies';
import { MemberTypesProvider } from '../providers/member-types/member-types';
import { ItemTypesProvider } from '../providers/item-types/item-types';
import { WeaponLocationsProvider } from '../providers/weapon-locations/weapon-locations';
import { EventTypesProvider } from '../providers/event-types/event-types';
import { CountriesProvider } from '../providers/countries/countries';
import { StaffJobsProvider } from '../providers/staff-jobs/staff-jobs';
import { SecurityAgentRolesProvider } from '../providers/security-agent-roles/security-agent-roles';
import { AlertStatusesProvider } from '../providers/alert-statuses/alert-statuses';
import { EndowmentStatusesProvider } from '../providers/endowment-statuses/endowment-statuses';
import { EventStatusesProvider } from '../providers/event-statuses/event-statuses';
import { VehicleTypesProvider } from '../providers/vehicle-types/vehicle-types';
import { ItemStatusesProvider } from '../providers/item-statuses/item-statuses';
import { BlackListStatusesProvider } from '../providers/black-list-statuses/black-list-statuses';
import { AssetStatusesProvider } from '../providers/asset-statuses/asset-statuses';
import { VehiclesProvider } from '../providers/vehicles/vehicles';
import { DayOfWeeksProvider } from '../providers/day-of-weeks/day-of-weeks';
import { WeaponStatusesProvider } from '../providers/weapon-statuses/weapon-statuses';
import { WeaponTypesProvider } from '../providers/weapon-types/weapon-types';
import { AssetsProvider } from '../providers/assets/assets';
import { SchedulesProvider } from '../providers/schedules/schedules';
import { WeaponsProvider } from '../providers/weapons/weapons';
import { PeopleProvider } from '../providers/people/people';
import { CommunityTypesProvider } from '../providers/community-types/community-types';
import { CitiesProvider } from '../providers/cities/cities';
import { CheckVehicleStatusesProvider } from '../providers/check-vehicle-statuses/check-vehicle-statuses';
import { SecurityAgentsProvider } from '../providers/security-agents/security-agents';
import { VisitorsProvider } from '../providers/visitors/visitors';
import { AssetStockStatusesProvider } from '../providers/asset-stock-statuses/asset-stock-statuses';
import { MembersProvider } from '../providers/members/members';
import { CheckVehiclesProvider } from '../providers/check-vehicles/check-vehicles';
import { AssetStocksProvider } from '../providers/asset-stocks/asset-stocks';
import { LostObjectsProvider } from '../providers/lost-objects/lost-objects';
import { ContractStatusesProvider } from '../providers/contract-statuses/contract-statuses';
import { EndowmentsProvider } from '../providers/endowments/endowments';
import { ContractsProvider } from '../providers/contracts/contracts';
import { CheckStaffsProvider } from '../providers/check-staffs/check-staffs';
import { BlackListsProvider } from '../providers/black-lists/black-lists';
import { LayoutsProvider } from '../providers/layouts/layouts';
import { StaffsProvider } from '../providers/staffs/staffs';
import { AlertsProvider } from '../providers/alerts/alerts';
import { ItemsProvider } from '../providers/items/items';
import { CommunityStaffsProvider } from '../providers/community-staffs/community-staffs';
import { MinuteBooksProvider } from '../providers/minute-books/minute-books';
import { MemberTypeMembersProvider } from '../providers/member-type-members/member-type-members';
import { DepartmentsProvider } from '../providers/departments/departments';
import { AlertCommunitiesProvider } from '../providers/alert-communities/alert-communities';
import { AssetStockPage } from '../pages/asset-stock/asset-stock';
import { SecurityAgentsPage } from '../pages/security-agents/security-agents';
import { SecurityAgentDetailPage } from '../pages/security-agent-detail/security-agent-detail';
import { AssetStockDetailPage } from '../pages/asset-stock-detail/asset-stock-detail';
import { StaffPage } from '../pages/staff/staff';
import { StaffDetailPage } from '../pages/staff-detail/staff-detail';
import { SecurityAgentCommunitiesPage } from '../pages/security-agent-communities/security-agent-communities';
import { VisitorHistoryDetailPage } from '../pages/visitor-history-detail/visitor-history-detail';
import { VisitorHistoryPage } from '../pages/visitor-history/visitor-history';
import { LostObjectDetailPage } from '../pages/lost-object-detail/lost-object-detail';
import { AddLostObjectPage } from '../pages/add-lost-object/add-lost-object';
import { VehiclePage } from '../pages/vehicle/vehicle';
import { CommunitiesPage } from '../pages/communities/communities';
import { VisitorsPage } from '../pages/visitors/visitors';
import { LostObjectsPage } from '../pages/lost-objects/lost-objects';
import { MinuteGeneratePage } from '../pages/minute-generate/minute-generate';
import { MyheaderComponent } from '../components/myheader/myheader';
import { VisitorsVehiclesPage } from '../pages/visitors-vehicles/visitors-vehicles';
import { OwnersVehiclesPage } from '../pages/owners-vehicles/owners-vehicles';


@NgModule({
  declarations: [
    MyApp,
    LandingPage,
    ListPage,
    InboxPage,
    CommunitiesPage,
    AssetStockPage,
    AssetStockDetailPage,
    MinuteGeneratePage,
    LostObjectsPage,
    SecurityAgentsPage,
    SecurityAgentDetailPage,
    StaffPage,
    StaffDetailPage,
    SecurityAgentCommunitiesPage,
    VisitorsPage,
    VisitorHistoryDetailPage,
    VisitorHistoryPage,
    LostObjectDetailPage,
    AddLostObjectPage,
    MyheaderComponent,
    VehiclePage,
    VisitorsVehiclesPage,
    OwnersVehiclesPage,
    ConfigPage,
    ValidationMessagesComponent,
    SearchBarComponent,
    SearchBarImplementComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatDialogModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LandingPage,
    CommunitiesPage,
    ListPage,
    InboxPage,
    AssetStockPage,
    AssetStockDetailPage,
    LostObjectsPage,
    MinuteGeneratePage,
    SecurityAgentsPage,
    SecurityAgentDetailPage,
    StaffPage,
    StaffDetailPage,
    SecurityAgentCommunitiesPage,
    VisitorsPage,
    VisitorHistoryDetailPage,
    VisitorHistoryPage,
    LostObjectDetailPage,
    AddLostObjectPage,
    VehiclePage,
    VisitorsVehiclesPage,
    OwnersVehiclesPage,
    ConfigPage,
    SearchBarImplementComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CommunitiesProvider,
    ConfigProvider,
    EventsProvider,
    SecurityProvider,
    ApiProvider,
    UsersProvider,
    AgentSchedulesProvider,
    AgentTypesProvider,
    SecurityCompaniesProvider,
    MemberTypesProvider,
    ItemTypesProvider,
    WeaponLocationsProvider,
    EventTypesProvider,
    CountriesProvider,
    StaffJobsProvider,
    SecurityAgentRolesProvider,
    AlertStatusesProvider,
    EndowmentStatusesProvider,
    EventStatusesProvider,
    VehicleTypesProvider,
    ItemStatusesProvider,
    BlackListStatusesProvider,
    AssetStatusesProvider,
    VehiclesProvider,
    DayOfWeeksProvider,
    WeaponStatusesProvider,
    WeaponTypesProvider,
    AssetsProvider,
    SchedulesProvider,
    WeaponsProvider,
    PeopleProvider,
    CommunityTypesProvider,
    CitiesProvider,
    CheckVehicleStatusesProvider,
    SecurityAgentsProvider,
    VisitorsProvider,
    AssetStockStatusesProvider,
    MembersProvider,
    CheckVehiclesProvider,
    AssetStocksProvider,
    LostObjectsProvider,
    ContractStatusesProvider,
    EndowmentsProvider,
    ContractsProvider,
    CheckStaffsProvider,
    BlackListsProvider,
    LayoutsProvider,
    StaffsProvider,
    AlertsProvider,
    ItemsProvider,
    CommunityStaffsProvider,
    MinuteBooksProvider,
    MemberTypeMembersProvider,
    DepartmentsProvider,
    AlertCommunitiesProvider
  ]
})
export class AppModule {}
