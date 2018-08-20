"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var firestore_service_1 = require("./firestore.service");
describe('FirestoreService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [firestore_service_1.FirestoreService]
        });
    });
    it('should be created', testing_1.inject([firestore_service_1.FirestoreService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=firestore.service.spec.js.map