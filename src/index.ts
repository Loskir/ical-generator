/**
 * ical-generator entrypoint
 */

'use strict';

import ICalCalendar, {ICalCalendarData} from './calendar.ts';


/**
 * Create a new, empty calendar and returns it.
 *
 * ```javascript
 * import ical from 'ical-generator';
 *
 * // or use require:
 * // const ical = require('ical-generator');
 *
 * const cal = ical();
 * ```
 *
 * You can pass options to setup your calendar or use setters to do this.
 *
 * ```javascript
 * import ical from 'ical-generator';
 *
 * // or use require:
 * // const ical = require('ical-generator');
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
function ical(data?: ICalCalendarData): ICalCalendar {
    return new ICalCalendar(data);
}

export default ical;

export {
    default as ICalAlarm,
    type ICalAlarmData,
    ICalAlarmType,
    type ICalAlarmTypeValue,
    type ICalAlarmJSONData,
    type ICalAttachment
} from './alarm.ts';

export {
    default as ICalAttendee,
    type ICalAttendeeData,
    ICalAttendeeType,
    ICalAttendeeRole,
    ICalAttendeeStatus,
    type ICalAttendeeJSONData
} from './attendee.ts';

export {
    default as ICalCalendar,
    type ICalCalendarData,
    type ICalCalendarProdIdData,
    ICalCalendarMethod,
    type ICalCalendarJSONData
} from './calendar.ts';

export {
    default as ICalCategory,
    type ICalCategoryData
} from './category.ts';

export {
    default as ICalEvent,
    ICalEventStatus,
    ICalEventBusyStatus,
    ICalEventTransparency,
    type ICalEventData,
    type ICalEventJSONData,
    ICalEventClass,
} from './event.ts';

export {
    type ICalDateTimeValue,
    type ICalRepeatingOptions,
    type ICalLocation,
    type ICalGeo,
    type ICalOrganizer,
    type ICalDescription,
    ICalEventRepeatingFreq,
    ICalWeekday,
    type ICalTimezone,
    type ICalMomentStub,
    type ICalMomentTimezoneStub,
    type ICalMomentDurationStub,
    type ICalLuxonDateTimeStub,
    type ICalDayJsStub,
    type ICalRRuleStub
} from './types.ts';

export {
    formatDate,
    formatDateTZ,
    escape,
    foldLines
} from './tools.ts';
