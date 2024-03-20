import { AbstractControl } from "@angular/forms";

export function PasswordValidator(control: AbstractControl):{[key: string]:boolean } | null{
const PASSWORD = control.get('PASSWORD');
const confirmPASSWORD = control.get('confirmPASSWORD');
if (PASSWORD.pristine || confirmPASSWORD.pristine){
    return null;
}
return PASSWORD && confirmPASSWORD && PASSWORD.value !== confirmPASSWORD.value ?{
    'misMatch':true 
}: null; 
}