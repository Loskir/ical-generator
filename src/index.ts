/**
 * ical-generator entrypoint
 */

'use strict';

import ICalCalendar, {ICalCalendarData} from './calendar';


/**
 * Create a new, empty calendar and returns it.
 *
 * ```javascript
 * const ical = require('ical-generator');
 * const cal = ical();
 * ```
 *
 * You can pass options to setup your calendar or use setters to do this.
 *
 * ```javascript
 * const ical = require('ical-generator');
 * const cal = ical({domain: 'sebbo.net'});
 *
 * // is the same as
 *
 * const cal = ical().domain('sebbo.net');
 *
 * // is the same as
 *
 * const cal = ical();
 * cal.domain('sebbo.net');
 * ```
 *
 * @param data Calendar data
 */
export default function (data?: ICalCalendarData): ICalCalendar {
    return new ICalCalendar(data);
}

export {
    default as ICalAlarm,
    ICalAlarmData,
    ICalAlarmType,
    ICalAlarmTypeValue,
    ICalAlarmJSONData,
    ICalAttachment
} from './alarm';

export {
    default as ICalAttendee,
    ICalAttendeeData,
    ICalAttendeeType,
    ICalAttendeeRole,
    ICalAttendeeStatus,
    ICalAttendeeJSONData
} from './attendee';

export {
    default as ICalCalendar,
    ICalCalendarData,
    ICalCalendarProdIdData,
    ICalCalendarMethod,
    ICalCalendarJSONData
} from './calendar';

export {
    default as ICalCategory,
    ICalCategoryData
} from './category';

export {
    default as ICalEvent,
    ICalEventStatus,
    ICalEventBusyStatus,
    ICalEventTransparency,
    ICalEventData,
    ICalEventJSONData
} from './event';

export {
    ICalDateTimeValue,
    ICalRepeatingOptions,
    ICalLocation,
    ICalGeo,
    ICalOrganizer,
    ICalDescription,
    ICalEventRepeatingFreq,
    ICalWeekday
} from './types';