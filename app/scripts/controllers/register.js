'use strict';

/**
 * @ngdoc function
 * @name continuaApp.controller:Register
 * @description
 * # AboutCtrl
 * Controller of the continuaApp
 */
angular.module('continuaApp')
  .controller('RegisterCtrl', ['$rootScope', '$log', function($rootScope, $log) {
    var self = this;
    self.model = {};
    self.model.instructions = [];
    self.model.instructions[0] = "Será requisito indispensable darse de alta como delegado/a en el Servicio de Deportes, solicitándolo por e-mail o personalmente en la oficina de inscripciones."
    self.model.instructions[1] = "Entrar en Campus Virtual (Deportes >> Inscripción Ligas Internas (ver tutorial)); o a través de este enlace http://www.deportes.ua.es/ligasinternas/, para universitarios con NIE."
    self.model.instructions[2] = "El pago se podrá abonar desde el día siguiente a la inscripción hasta el día posterior al fin del plazo de inscripción. Lo realizará el/la delegado/a por Campus Virtual o en el TPV del pabellón. Si finalizado el plazo no estuviera abonado, los jugadores serán dados de baja de manera automática."
    self.model.instructions[3] = "Las fechas, plazos y bases se publicarán puntualmente en la web de competiciones internas.";

  }]);
