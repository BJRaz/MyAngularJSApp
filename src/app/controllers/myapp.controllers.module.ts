import { MyController } from "./my.controller";
import * as angular from "angular";

export let MyappControllerModule : ng.IModule = angular.module("myapp.controllers", [])
    .controller("mycontroller", MyController);