import {useInjection} from 'inversify-react';

import {interfaces} from 'inversify'; //

export const createTypedInjection =
  <T>() =>
  <K extends keyof T>(key: K): T[K] => {
    const serviceIdentifier: interfaces.ServiceIdentifier<T[K]> =
      key as unknown as interfaces.ServiceIdentifier<T[K]>;
    return useInjection(serviceIdentifier);
  };
