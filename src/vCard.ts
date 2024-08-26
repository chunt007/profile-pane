
import { ProfilePresentation, presentProfile } from "./presenter";




const userInputForFN  = 'CHASE'
const ADR:string = 'ADR;TYPE=home:;;123 Main St.;Springfield;IL;12345;USA\r\n';
//const AGENT:string = 'AGENT:http://mi6.gov.uk/007';
const ANNIVERSARY = 'ANNIVERSARY:19901021\r\n';
const BDAY:string = 'BDAY:0602\r\n';
const BEGIN:string = 'BEGIN:VCARD\r\n';
const KEY:string = '\r\n';
const LABEL:string = 'LABEL;TYPE=HOME:123 Main St.\nSpringfield, IL 12345\nUSA\r\n';
const lang:string = 'LANG:fr-CA\r\n';
const CALADRURI:string = 'CALADRURI:http://example.com/calendar/jdoe\r\n';
const FN:string = 'FN:' + userInputForFN + '\r\n';
const URLL:string = '';
const VERSION:string = '';
const EMAIL:string = 'EMAIL:chase@test.com\r\n';
const END:string = 'END:VCARD\r\n';
const REV:string = 'REV:20121201T134211Z\r\n';
const ROLE:string = 'ROLE:Executive\r\n'
const GENDER:string = 'GENDER:M\r\n';
const SOUND:string = 'SOUND;MEDIATYPE=audio/ogg:http://example.com/sound.ogg\r\n';
const SOURCE:string = 'SOURCE:';
const TEL:string = 'TEL;TYPE=cell:(123) 555-5832';
const TITLE:string = 'TITLE:V.P. Research and Development\r\n';
const TZ:string = 'TZ:America/New_York\r\n';
const UID:string = 'UID:urn:uuid:da418720-3754-4631-a169-db89a02b831b\r\n';
const URL:string = 'URL:http://www.johndoe.com\r\n';
const VERSIONV:string = 'VERSION:4.0\r\n';
const XML:string = 'XML:<b>Not an xCard XML element</b>\r\n';


//export const vCard: string = BEGIN + ADR + ANNIVERSARY + FN + EMAIL + BDAY + END + VERSIONV;
export const vCard: string = BEGIN + FN + EMAIL + END + VERSIONV;


  

