
    export type RemoteKeys = 'checkout/Routes';
    type PackageType<T> = T extends 'checkout/Routes' ? typeof import('checkout/Routes') :any;