import { CanMatchFn } from '@angular/router';

export const hrLodinGuard: CanMatchFn = (route, segments) => {
  return localStorage.getItem("owner")!=null||localStorage.getItem("owner")?.length!=0;
};
