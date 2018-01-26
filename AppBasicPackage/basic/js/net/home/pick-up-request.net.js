/**
 * @author Yasin
 * @version [React-Native V01, 2017/10/24]
 * @date 2017/10/24
 * @description
 */

import BaseRequest from '../base-request.net';

export default class PickUpRequest extends BaseRequest {
    setTripId(tripId) {
        this.tripId = tripId;
        return this;
    }

    requestUrl() {
        return `/trip-service/driver-api/trips/${this.tripId}/start`;
    }
}