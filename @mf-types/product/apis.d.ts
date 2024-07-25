
    export type RemoteKeys = 'product/Routes';
    type PackageType<T> = T extends 'product/Routes' ? typeof import('product/Routes') :any;