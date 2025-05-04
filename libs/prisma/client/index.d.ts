
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model FacebookUser
 * 
 */
export type FacebookUser = $Result.DefaultSelection<Prisma.$FacebookUserPayload>
/**
 * Model FacebookEvent
 * 
 */
export type FacebookEvent = $Result.DefaultSelection<Prisma.$FacebookEventPayload>
/**
 * Model FacebookEngagementTop
 * 
 */
export type FacebookEngagementTop = $Result.DefaultSelection<Prisma.$FacebookEngagementTopPayload>
/**
 * Model FacebookEngagementBottom
 * 
 */
export type FacebookEngagementBottom = $Result.DefaultSelection<Prisma.$FacebookEngagementBottomPayload>
/**
 * Model TiktokUser
 * 
 */
export type TiktokUser = $Result.DefaultSelection<Prisma.$TiktokUserPayload>
/**
 * Model TiktokEvent
 * 
 */
export type TiktokEvent = $Result.DefaultSelection<Prisma.$TiktokEventPayload>
/**
 * Model TiktokEngagementTop
 * 
 */
export type TiktokEngagementTop = $Result.DefaultSelection<Prisma.$TiktokEngagementTopPayload>
/**
 * Model TiktokEngagementBottom
 * 
 */
export type TiktokEngagementBottom = $Result.DefaultSelection<Prisma.$TiktokEngagementBottomPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more FacebookUsers
 * const facebookUsers = await prisma.facebookUser.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more FacebookUsers
   * const facebookUsers = await prisma.facebookUser.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.facebookUser`: Exposes CRUD operations for the **FacebookUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FacebookUsers
    * const facebookUsers = await prisma.facebookUser.findMany()
    * ```
    */
  get facebookUser(): Prisma.FacebookUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.facebookEvent`: Exposes CRUD operations for the **FacebookEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FacebookEvents
    * const facebookEvents = await prisma.facebookEvent.findMany()
    * ```
    */
  get facebookEvent(): Prisma.FacebookEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.facebookEngagementTop`: Exposes CRUD operations for the **FacebookEngagementTop** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FacebookEngagementTops
    * const facebookEngagementTops = await prisma.facebookEngagementTop.findMany()
    * ```
    */
  get facebookEngagementTop(): Prisma.FacebookEngagementTopDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.facebookEngagementBottom`: Exposes CRUD operations for the **FacebookEngagementBottom** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FacebookEngagementBottoms
    * const facebookEngagementBottoms = await prisma.facebookEngagementBottom.findMany()
    * ```
    */
  get facebookEngagementBottom(): Prisma.FacebookEngagementBottomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tiktokUser`: Exposes CRUD operations for the **TiktokUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TiktokUsers
    * const tiktokUsers = await prisma.tiktokUser.findMany()
    * ```
    */
  get tiktokUser(): Prisma.TiktokUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tiktokEvent`: Exposes CRUD operations for the **TiktokEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TiktokEvents
    * const tiktokEvents = await prisma.tiktokEvent.findMany()
    * ```
    */
  get tiktokEvent(): Prisma.TiktokEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tiktokEngagementTop`: Exposes CRUD operations for the **TiktokEngagementTop** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TiktokEngagementTops
    * const tiktokEngagementTops = await prisma.tiktokEngagementTop.findMany()
    * ```
    */
  get tiktokEngagementTop(): Prisma.TiktokEngagementTopDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tiktokEngagementBottom`: Exposes CRUD operations for the **TiktokEngagementBottom** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TiktokEngagementBottoms
    * const tiktokEngagementBottoms = await prisma.tiktokEngagementBottom.findMany()
    * ```
    */
  get tiktokEngagementBottom(): Prisma.TiktokEngagementBottomDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    FacebookUser: 'FacebookUser',
    FacebookEvent: 'FacebookEvent',
    FacebookEngagementTop: 'FacebookEngagementTop',
    FacebookEngagementBottom: 'FacebookEngagementBottom',
    TiktokUser: 'TiktokUser',
    TiktokEvent: 'TiktokEvent',
    TiktokEngagementTop: 'TiktokEngagementTop',
    TiktokEngagementBottom: 'TiktokEngagementBottom'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "facebookUser" | "facebookEvent" | "facebookEngagementTop" | "facebookEngagementBottom" | "tiktokUser" | "tiktokEvent" | "tiktokEngagementTop" | "tiktokEngagementBottom"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      FacebookUser: {
        payload: Prisma.$FacebookUserPayload<ExtArgs>
        fields: Prisma.FacebookUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FacebookUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FacebookUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookUserPayload>
          }
          findFirst: {
            args: Prisma.FacebookUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FacebookUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookUserPayload>
          }
          findMany: {
            args: Prisma.FacebookUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookUserPayload>[]
          }
          create: {
            args: Prisma.FacebookUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookUserPayload>
          }
          createMany: {
            args: Prisma.FacebookUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FacebookUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookUserPayload>[]
          }
          delete: {
            args: Prisma.FacebookUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookUserPayload>
          }
          update: {
            args: Prisma.FacebookUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookUserPayload>
          }
          deleteMany: {
            args: Prisma.FacebookUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FacebookUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FacebookUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookUserPayload>[]
          }
          upsert: {
            args: Prisma.FacebookUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookUserPayload>
          }
          aggregate: {
            args: Prisma.FacebookUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFacebookUser>
          }
          groupBy: {
            args: Prisma.FacebookUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<FacebookUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.FacebookUserCountArgs<ExtArgs>
            result: $Utils.Optional<FacebookUserCountAggregateOutputType> | number
          }
        }
      }
      FacebookEvent: {
        payload: Prisma.$FacebookEventPayload<ExtArgs>
        fields: Prisma.FacebookEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FacebookEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FacebookEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEventPayload>
          }
          findFirst: {
            args: Prisma.FacebookEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FacebookEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEventPayload>
          }
          findMany: {
            args: Prisma.FacebookEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEventPayload>[]
          }
          create: {
            args: Prisma.FacebookEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEventPayload>
          }
          createMany: {
            args: Prisma.FacebookEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FacebookEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEventPayload>[]
          }
          delete: {
            args: Prisma.FacebookEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEventPayload>
          }
          update: {
            args: Prisma.FacebookEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEventPayload>
          }
          deleteMany: {
            args: Prisma.FacebookEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FacebookEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FacebookEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEventPayload>[]
          }
          upsert: {
            args: Prisma.FacebookEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEventPayload>
          }
          aggregate: {
            args: Prisma.FacebookEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFacebookEvent>
          }
          groupBy: {
            args: Prisma.FacebookEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<FacebookEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.FacebookEventCountArgs<ExtArgs>
            result: $Utils.Optional<FacebookEventCountAggregateOutputType> | number
          }
        }
      }
      FacebookEngagementTop: {
        payload: Prisma.$FacebookEngagementTopPayload<ExtArgs>
        fields: Prisma.FacebookEngagementTopFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FacebookEngagementTopFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEngagementTopPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FacebookEngagementTopFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEngagementTopPayload>
          }
          findFirst: {
            args: Prisma.FacebookEngagementTopFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEngagementTopPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FacebookEngagementTopFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEngagementTopPayload>
          }
          findMany: {
            args: Prisma.FacebookEngagementTopFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEngagementTopPayload>[]
          }
          create: {
            args: Prisma.FacebookEngagementTopCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEngagementTopPayload>
          }
          createMany: {
            args: Prisma.FacebookEngagementTopCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FacebookEngagementTopCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEngagementTopPayload>[]
          }
          delete: {
            args: Prisma.FacebookEngagementTopDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEngagementTopPayload>
          }
          update: {
            args: Prisma.FacebookEngagementTopUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEngagementTopPayload>
          }
          deleteMany: {
            args: Prisma.FacebookEngagementTopDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FacebookEngagementTopUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FacebookEngagementTopUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEngagementTopPayload>[]
          }
          upsert: {
            args: Prisma.FacebookEngagementTopUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEngagementTopPayload>
          }
          aggregate: {
            args: Prisma.FacebookEngagementTopAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFacebookEngagementTop>
          }
          groupBy: {
            args: Prisma.FacebookEngagementTopGroupByArgs<ExtArgs>
            result: $Utils.Optional<FacebookEngagementTopGroupByOutputType>[]
          }
          count: {
            args: Prisma.FacebookEngagementTopCountArgs<ExtArgs>
            result: $Utils.Optional<FacebookEngagementTopCountAggregateOutputType> | number
          }
        }
      }
      FacebookEngagementBottom: {
        payload: Prisma.$FacebookEngagementBottomPayload<ExtArgs>
        fields: Prisma.FacebookEngagementBottomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FacebookEngagementBottomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEngagementBottomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FacebookEngagementBottomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEngagementBottomPayload>
          }
          findFirst: {
            args: Prisma.FacebookEngagementBottomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEngagementBottomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FacebookEngagementBottomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEngagementBottomPayload>
          }
          findMany: {
            args: Prisma.FacebookEngagementBottomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEngagementBottomPayload>[]
          }
          create: {
            args: Prisma.FacebookEngagementBottomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEngagementBottomPayload>
          }
          createMany: {
            args: Prisma.FacebookEngagementBottomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FacebookEngagementBottomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEngagementBottomPayload>[]
          }
          delete: {
            args: Prisma.FacebookEngagementBottomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEngagementBottomPayload>
          }
          update: {
            args: Prisma.FacebookEngagementBottomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEngagementBottomPayload>
          }
          deleteMany: {
            args: Prisma.FacebookEngagementBottomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FacebookEngagementBottomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FacebookEngagementBottomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEngagementBottomPayload>[]
          }
          upsert: {
            args: Prisma.FacebookEngagementBottomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEngagementBottomPayload>
          }
          aggregate: {
            args: Prisma.FacebookEngagementBottomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFacebookEngagementBottom>
          }
          groupBy: {
            args: Prisma.FacebookEngagementBottomGroupByArgs<ExtArgs>
            result: $Utils.Optional<FacebookEngagementBottomGroupByOutputType>[]
          }
          count: {
            args: Prisma.FacebookEngagementBottomCountArgs<ExtArgs>
            result: $Utils.Optional<FacebookEngagementBottomCountAggregateOutputType> | number
          }
        }
      }
      TiktokUser: {
        payload: Prisma.$TiktokUserPayload<ExtArgs>
        fields: Prisma.TiktokUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TiktokUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TiktokUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokUserPayload>
          }
          findFirst: {
            args: Prisma.TiktokUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TiktokUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokUserPayload>
          }
          findMany: {
            args: Prisma.TiktokUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokUserPayload>[]
          }
          create: {
            args: Prisma.TiktokUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokUserPayload>
          }
          createMany: {
            args: Prisma.TiktokUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TiktokUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokUserPayload>[]
          }
          delete: {
            args: Prisma.TiktokUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokUserPayload>
          }
          update: {
            args: Prisma.TiktokUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokUserPayload>
          }
          deleteMany: {
            args: Prisma.TiktokUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TiktokUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TiktokUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokUserPayload>[]
          }
          upsert: {
            args: Prisma.TiktokUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokUserPayload>
          }
          aggregate: {
            args: Prisma.TiktokUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTiktokUser>
          }
          groupBy: {
            args: Prisma.TiktokUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<TiktokUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.TiktokUserCountArgs<ExtArgs>
            result: $Utils.Optional<TiktokUserCountAggregateOutputType> | number
          }
        }
      }
      TiktokEvent: {
        payload: Prisma.$TiktokEventPayload<ExtArgs>
        fields: Prisma.TiktokEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TiktokEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TiktokEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokEventPayload>
          }
          findFirst: {
            args: Prisma.TiktokEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TiktokEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokEventPayload>
          }
          findMany: {
            args: Prisma.TiktokEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokEventPayload>[]
          }
          create: {
            args: Prisma.TiktokEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokEventPayload>
          }
          createMany: {
            args: Prisma.TiktokEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TiktokEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokEventPayload>[]
          }
          delete: {
            args: Prisma.TiktokEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokEventPayload>
          }
          update: {
            args: Prisma.TiktokEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokEventPayload>
          }
          deleteMany: {
            args: Prisma.TiktokEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TiktokEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TiktokEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokEventPayload>[]
          }
          upsert: {
            args: Prisma.TiktokEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokEventPayload>
          }
          aggregate: {
            args: Prisma.TiktokEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTiktokEvent>
          }
          groupBy: {
            args: Prisma.TiktokEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<TiktokEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.TiktokEventCountArgs<ExtArgs>
            result: $Utils.Optional<TiktokEventCountAggregateOutputType> | number
          }
        }
      }
      TiktokEngagementTop: {
        payload: Prisma.$TiktokEngagementTopPayload<ExtArgs>
        fields: Prisma.TiktokEngagementTopFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TiktokEngagementTopFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokEngagementTopPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TiktokEngagementTopFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokEngagementTopPayload>
          }
          findFirst: {
            args: Prisma.TiktokEngagementTopFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokEngagementTopPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TiktokEngagementTopFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokEngagementTopPayload>
          }
          findMany: {
            args: Prisma.TiktokEngagementTopFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokEngagementTopPayload>[]
          }
          create: {
            args: Prisma.TiktokEngagementTopCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokEngagementTopPayload>
          }
          createMany: {
            args: Prisma.TiktokEngagementTopCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TiktokEngagementTopCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokEngagementTopPayload>[]
          }
          delete: {
            args: Prisma.TiktokEngagementTopDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokEngagementTopPayload>
          }
          update: {
            args: Prisma.TiktokEngagementTopUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokEngagementTopPayload>
          }
          deleteMany: {
            args: Prisma.TiktokEngagementTopDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TiktokEngagementTopUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TiktokEngagementTopUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokEngagementTopPayload>[]
          }
          upsert: {
            args: Prisma.TiktokEngagementTopUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokEngagementTopPayload>
          }
          aggregate: {
            args: Prisma.TiktokEngagementTopAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTiktokEngagementTop>
          }
          groupBy: {
            args: Prisma.TiktokEngagementTopGroupByArgs<ExtArgs>
            result: $Utils.Optional<TiktokEngagementTopGroupByOutputType>[]
          }
          count: {
            args: Prisma.TiktokEngagementTopCountArgs<ExtArgs>
            result: $Utils.Optional<TiktokEngagementTopCountAggregateOutputType> | number
          }
        }
      }
      TiktokEngagementBottom: {
        payload: Prisma.$TiktokEngagementBottomPayload<ExtArgs>
        fields: Prisma.TiktokEngagementBottomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TiktokEngagementBottomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokEngagementBottomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TiktokEngagementBottomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokEngagementBottomPayload>
          }
          findFirst: {
            args: Prisma.TiktokEngagementBottomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokEngagementBottomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TiktokEngagementBottomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokEngagementBottomPayload>
          }
          findMany: {
            args: Prisma.TiktokEngagementBottomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokEngagementBottomPayload>[]
          }
          create: {
            args: Prisma.TiktokEngagementBottomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokEngagementBottomPayload>
          }
          createMany: {
            args: Prisma.TiktokEngagementBottomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TiktokEngagementBottomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokEngagementBottomPayload>[]
          }
          delete: {
            args: Prisma.TiktokEngagementBottomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokEngagementBottomPayload>
          }
          update: {
            args: Prisma.TiktokEngagementBottomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokEngagementBottomPayload>
          }
          deleteMany: {
            args: Prisma.TiktokEngagementBottomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TiktokEngagementBottomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TiktokEngagementBottomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokEngagementBottomPayload>[]
          }
          upsert: {
            args: Prisma.TiktokEngagementBottomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokEngagementBottomPayload>
          }
          aggregate: {
            args: Prisma.TiktokEngagementBottomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTiktokEngagementBottom>
          }
          groupBy: {
            args: Prisma.TiktokEngagementBottomGroupByArgs<ExtArgs>
            result: $Utils.Optional<TiktokEngagementBottomGroupByOutputType>[]
          }
          count: {
            args: Prisma.TiktokEngagementBottomCountArgs<ExtArgs>
            result: $Utils.Optional<TiktokEngagementBottomCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    facebookUser?: FacebookUserOmit
    facebookEvent?: FacebookEventOmit
    facebookEngagementTop?: FacebookEngagementTopOmit
    facebookEngagementBottom?: FacebookEngagementBottomOmit
    tiktokUser?: TiktokUserOmit
    tiktokEvent?: TiktokEventOmit
    tiktokEngagementTop?: TiktokEngagementTopOmit
    tiktokEngagementBottom?: TiktokEngagementBottomOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type FacebookUserCountOutputType
   */

  export type FacebookUserCountOutputType = {
    events: number
  }

  export type FacebookUserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | FacebookUserCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * FacebookUserCountOutputType without action
   */
  export type FacebookUserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookUserCountOutputType
     */
    select?: FacebookUserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FacebookUserCountOutputType without action
   */
  export type FacebookUserCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacebookEventWhereInput
  }


  /**
   * Count Type TiktokUserCountOutputType
   */

  export type TiktokUserCountOutputType = {
    events: number
  }

  export type TiktokUserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | TiktokUserCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * TiktokUserCountOutputType without action
   */
  export type TiktokUserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokUserCountOutputType
     */
    select?: TiktokUserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TiktokUserCountOutputType without action
   */
  export type TiktokUserCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TiktokEventWhereInput
  }


  /**
   * Models
   */

  /**
   * Model FacebookUser
   */

  export type AggregateFacebookUser = {
    _count: FacebookUserCountAggregateOutputType | null
    _avg: FacebookUserAvgAggregateOutputType | null
    _sum: FacebookUserSumAggregateOutputType | null
    _min: FacebookUserMinAggregateOutputType | null
    _max: FacebookUserMaxAggregateOutputType | null
  }

  export type FacebookUserAvgAggregateOutputType = {
    age: number | null
  }

  export type FacebookUserSumAggregateOutputType = {
    age: number | null
  }

  export type FacebookUserMinAggregateOutputType = {
    userId: string | null
    name: string | null
    age: number | null
    gender: string | null
    country: string | null
    city: string | null
  }

  export type FacebookUserMaxAggregateOutputType = {
    userId: string | null
    name: string | null
    age: number | null
    gender: string | null
    country: string | null
    city: string | null
  }

  export type FacebookUserCountAggregateOutputType = {
    userId: number
    name: number
    age: number
    gender: number
    country: number
    city: number
    _all: number
  }


  export type FacebookUserAvgAggregateInputType = {
    age?: true
  }

  export type FacebookUserSumAggregateInputType = {
    age?: true
  }

  export type FacebookUserMinAggregateInputType = {
    userId?: true
    name?: true
    age?: true
    gender?: true
    country?: true
    city?: true
  }

  export type FacebookUserMaxAggregateInputType = {
    userId?: true
    name?: true
    age?: true
    gender?: true
    country?: true
    city?: true
  }

  export type FacebookUserCountAggregateInputType = {
    userId?: true
    name?: true
    age?: true
    gender?: true
    country?: true
    city?: true
    _all?: true
  }

  export type FacebookUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacebookUser to aggregate.
     */
    where?: FacebookUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacebookUsers to fetch.
     */
    orderBy?: FacebookUserOrderByWithRelationInput | FacebookUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FacebookUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacebookUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacebookUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FacebookUsers
    **/
    _count?: true | FacebookUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FacebookUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FacebookUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacebookUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacebookUserMaxAggregateInputType
  }

  export type GetFacebookUserAggregateType<T extends FacebookUserAggregateArgs> = {
        [P in keyof T & keyof AggregateFacebookUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacebookUser[P]>
      : GetScalarType<T[P], AggregateFacebookUser[P]>
  }




  export type FacebookUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacebookUserWhereInput
    orderBy?: FacebookUserOrderByWithAggregationInput | FacebookUserOrderByWithAggregationInput[]
    by: FacebookUserScalarFieldEnum[] | FacebookUserScalarFieldEnum
    having?: FacebookUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacebookUserCountAggregateInputType | true
    _avg?: FacebookUserAvgAggregateInputType
    _sum?: FacebookUserSumAggregateInputType
    _min?: FacebookUserMinAggregateInputType
    _max?: FacebookUserMaxAggregateInputType
  }

  export type FacebookUserGroupByOutputType = {
    userId: string
    name: string
    age: number
    gender: string
    country: string
    city: string
    _count: FacebookUserCountAggregateOutputType | null
    _avg: FacebookUserAvgAggregateOutputType | null
    _sum: FacebookUserSumAggregateOutputType | null
    _min: FacebookUserMinAggregateOutputType | null
    _max: FacebookUserMaxAggregateOutputType | null
  }

  type GetFacebookUserGroupByPayload<T extends FacebookUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FacebookUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacebookUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacebookUserGroupByOutputType[P]>
            : GetScalarType<T[P], FacebookUserGroupByOutputType[P]>
        }
      >
    >


  export type FacebookUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    name?: boolean
    age?: boolean
    gender?: boolean
    country?: boolean
    city?: boolean
    events?: boolean | FacebookUser$eventsArgs<ExtArgs>
    _count?: boolean | FacebookUserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facebookUser"]>

  export type FacebookUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    name?: boolean
    age?: boolean
    gender?: boolean
    country?: boolean
    city?: boolean
  }, ExtArgs["result"]["facebookUser"]>

  export type FacebookUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    name?: boolean
    age?: boolean
    gender?: boolean
    country?: boolean
    city?: boolean
  }, ExtArgs["result"]["facebookUser"]>

  export type FacebookUserSelectScalar = {
    userId?: boolean
    name?: boolean
    age?: boolean
    gender?: boolean
    country?: boolean
    city?: boolean
  }

  export type FacebookUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "name" | "age" | "gender" | "country" | "city", ExtArgs["result"]["facebookUser"]>
  export type FacebookUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | FacebookUser$eventsArgs<ExtArgs>
    _count?: boolean | FacebookUserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FacebookUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FacebookUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FacebookUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FacebookUser"
    objects: {
      events: Prisma.$FacebookEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      name: string
      age: number
      gender: string
      country: string
      city: string
    }, ExtArgs["result"]["facebookUser"]>
    composites: {}
  }

  type FacebookUserGetPayload<S extends boolean | null | undefined | FacebookUserDefaultArgs> = $Result.GetResult<Prisma.$FacebookUserPayload, S>

  type FacebookUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FacebookUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FacebookUserCountAggregateInputType | true
    }

  export interface FacebookUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FacebookUser'], meta: { name: 'FacebookUser' } }
    /**
     * Find zero or one FacebookUser that matches the filter.
     * @param {FacebookUserFindUniqueArgs} args - Arguments to find a FacebookUser
     * @example
     * // Get one FacebookUser
     * const facebookUser = await prisma.facebookUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FacebookUserFindUniqueArgs>(args: SelectSubset<T, FacebookUserFindUniqueArgs<ExtArgs>>): Prisma__FacebookUserClient<$Result.GetResult<Prisma.$FacebookUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FacebookUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FacebookUserFindUniqueOrThrowArgs} args - Arguments to find a FacebookUser
     * @example
     * // Get one FacebookUser
     * const facebookUser = await prisma.facebookUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FacebookUserFindUniqueOrThrowArgs>(args: SelectSubset<T, FacebookUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FacebookUserClient<$Result.GetResult<Prisma.$FacebookUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FacebookUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookUserFindFirstArgs} args - Arguments to find a FacebookUser
     * @example
     * // Get one FacebookUser
     * const facebookUser = await prisma.facebookUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FacebookUserFindFirstArgs>(args?: SelectSubset<T, FacebookUserFindFirstArgs<ExtArgs>>): Prisma__FacebookUserClient<$Result.GetResult<Prisma.$FacebookUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FacebookUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookUserFindFirstOrThrowArgs} args - Arguments to find a FacebookUser
     * @example
     * // Get one FacebookUser
     * const facebookUser = await prisma.facebookUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FacebookUserFindFirstOrThrowArgs>(args?: SelectSubset<T, FacebookUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__FacebookUserClient<$Result.GetResult<Prisma.$FacebookUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FacebookUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FacebookUsers
     * const facebookUsers = await prisma.facebookUser.findMany()
     * 
     * // Get first 10 FacebookUsers
     * const facebookUsers = await prisma.facebookUser.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const facebookUserWithUserIdOnly = await prisma.facebookUser.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends FacebookUserFindManyArgs>(args?: SelectSubset<T, FacebookUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacebookUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FacebookUser.
     * @param {FacebookUserCreateArgs} args - Arguments to create a FacebookUser.
     * @example
     * // Create one FacebookUser
     * const FacebookUser = await prisma.facebookUser.create({
     *   data: {
     *     // ... data to create a FacebookUser
     *   }
     * })
     * 
     */
    create<T extends FacebookUserCreateArgs>(args: SelectSubset<T, FacebookUserCreateArgs<ExtArgs>>): Prisma__FacebookUserClient<$Result.GetResult<Prisma.$FacebookUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FacebookUsers.
     * @param {FacebookUserCreateManyArgs} args - Arguments to create many FacebookUsers.
     * @example
     * // Create many FacebookUsers
     * const facebookUser = await prisma.facebookUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FacebookUserCreateManyArgs>(args?: SelectSubset<T, FacebookUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FacebookUsers and returns the data saved in the database.
     * @param {FacebookUserCreateManyAndReturnArgs} args - Arguments to create many FacebookUsers.
     * @example
     * // Create many FacebookUsers
     * const facebookUser = await prisma.facebookUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FacebookUsers and only return the `userId`
     * const facebookUserWithUserIdOnly = await prisma.facebookUser.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FacebookUserCreateManyAndReturnArgs>(args?: SelectSubset<T, FacebookUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacebookUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FacebookUser.
     * @param {FacebookUserDeleteArgs} args - Arguments to delete one FacebookUser.
     * @example
     * // Delete one FacebookUser
     * const FacebookUser = await prisma.facebookUser.delete({
     *   where: {
     *     // ... filter to delete one FacebookUser
     *   }
     * })
     * 
     */
    delete<T extends FacebookUserDeleteArgs>(args: SelectSubset<T, FacebookUserDeleteArgs<ExtArgs>>): Prisma__FacebookUserClient<$Result.GetResult<Prisma.$FacebookUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FacebookUser.
     * @param {FacebookUserUpdateArgs} args - Arguments to update one FacebookUser.
     * @example
     * // Update one FacebookUser
     * const facebookUser = await prisma.facebookUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FacebookUserUpdateArgs>(args: SelectSubset<T, FacebookUserUpdateArgs<ExtArgs>>): Prisma__FacebookUserClient<$Result.GetResult<Prisma.$FacebookUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FacebookUsers.
     * @param {FacebookUserDeleteManyArgs} args - Arguments to filter FacebookUsers to delete.
     * @example
     * // Delete a few FacebookUsers
     * const { count } = await prisma.facebookUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FacebookUserDeleteManyArgs>(args?: SelectSubset<T, FacebookUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FacebookUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FacebookUsers
     * const facebookUser = await prisma.facebookUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FacebookUserUpdateManyArgs>(args: SelectSubset<T, FacebookUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FacebookUsers and returns the data updated in the database.
     * @param {FacebookUserUpdateManyAndReturnArgs} args - Arguments to update many FacebookUsers.
     * @example
     * // Update many FacebookUsers
     * const facebookUser = await prisma.facebookUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FacebookUsers and only return the `userId`
     * const facebookUserWithUserIdOnly = await prisma.facebookUser.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FacebookUserUpdateManyAndReturnArgs>(args: SelectSubset<T, FacebookUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacebookUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FacebookUser.
     * @param {FacebookUserUpsertArgs} args - Arguments to update or create a FacebookUser.
     * @example
     * // Update or create a FacebookUser
     * const facebookUser = await prisma.facebookUser.upsert({
     *   create: {
     *     // ... data to create a FacebookUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FacebookUser we want to update
     *   }
     * })
     */
    upsert<T extends FacebookUserUpsertArgs>(args: SelectSubset<T, FacebookUserUpsertArgs<ExtArgs>>): Prisma__FacebookUserClient<$Result.GetResult<Prisma.$FacebookUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FacebookUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookUserCountArgs} args - Arguments to filter FacebookUsers to count.
     * @example
     * // Count the number of FacebookUsers
     * const count = await prisma.facebookUser.count({
     *   where: {
     *     // ... the filter for the FacebookUsers we want to count
     *   }
     * })
    **/
    count<T extends FacebookUserCountArgs>(
      args?: Subset<T, FacebookUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacebookUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FacebookUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FacebookUserAggregateArgs>(args: Subset<T, FacebookUserAggregateArgs>): Prisma.PrismaPromise<GetFacebookUserAggregateType<T>>

    /**
     * Group by FacebookUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FacebookUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FacebookUserGroupByArgs['orderBy'] }
        : { orderBy?: FacebookUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FacebookUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacebookUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FacebookUser model
   */
  readonly fields: FacebookUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FacebookUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FacebookUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    events<T extends FacebookUser$eventsArgs<ExtArgs> = {}>(args?: Subset<T, FacebookUser$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacebookEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FacebookUser model
   */
  interface FacebookUserFieldRefs {
    readonly userId: FieldRef<"FacebookUser", 'String'>
    readonly name: FieldRef<"FacebookUser", 'String'>
    readonly age: FieldRef<"FacebookUser", 'Int'>
    readonly gender: FieldRef<"FacebookUser", 'String'>
    readonly country: FieldRef<"FacebookUser", 'String'>
    readonly city: FieldRef<"FacebookUser", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FacebookUser findUnique
   */
  export type FacebookUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookUser
     */
    select?: FacebookUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookUser
     */
    omit?: FacebookUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookUserInclude<ExtArgs> | null
    /**
     * Filter, which FacebookUser to fetch.
     */
    where: FacebookUserWhereUniqueInput
  }

  /**
   * FacebookUser findUniqueOrThrow
   */
  export type FacebookUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookUser
     */
    select?: FacebookUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookUser
     */
    omit?: FacebookUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookUserInclude<ExtArgs> | null
    /**
     * Filter, which FacebookUser to fetch.
     */
    where: FacebookUserWhereUniqueInput
  }

  /**
   * FacebookUser findFirst
   */
  export type FacebookUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookUser
     */
    select?: FacebookUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookUser
     */
    omit?: FacebookUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookUserInclude<ExtArgs> | null
    /**
     * Filter, which FacebookUser to fetch.
     */
    where?: FacebookUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacebookUsers to fetch.
     */
    orderBy?: FacebookUserOrderByWithRelationInput | FacebookUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacebookUsers.
     */
    cursor?: FacebookUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacebookUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacebookUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacebookUsers.
     */
    distinct?: FacebookUserScalarFieldEnum | FacebookUserScalarFieldEnum[]
  }

  /**
   * FacebookUser findFirstOrThrow
   */
  export type FacebookUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookUser
     */
    select?: FacebookUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookUser
     */
    omit?: FacebookUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookUserInclude<ExtArgs> | null
    /**
     * Filter, which FacebookUser to fetch.
     */
    where?: FacebookUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacebookUsers to fetch.
     */
    orderBy?: FacebookUserOrderByWithRelationInput | FacebookUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacebookUsers.
     */
    cursor?: FacebookUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacebookUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacebookUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacebookUsers.
     */
    distinct?: FacebookUserScalarFieldEnum | FacebookUserScalarFieldEnum[]
  }

  /**
   * FacebookUser findMany
   */
  export type FacebookUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookUser
     */
    select?: FacebookUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookUser
     */
    omit?: FacebookUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookUserInclude<ExtArgs> | null
    /**
     * Filter, which FacebookUsers to fetch.
     */
    where?: FacebookUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacebookUsers to fetch.
     */
    orderBy?: FacebookUserOrderByWithRelationInput | FacebookUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FacebookUsers.
     */
    cursor?: FacebookUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacebookUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacebookUsers.
     */
    skip?: number
    distinct?: FacebookUserScalarFieldEnum | FacebookUserScalarFieldEnum[]
  }

  /**
   * FacebookUser create
   */
  export type FacebookUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookUser
     */
    select?: FacebookUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookUser
     */
    omit?: FacebookUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookUserInclude<ExtArgs> | null
    /**
     * The data needed to create a FacebookUser.
     */
    data: XOR<FacebookUserCreateInput, FacebookUserUncheckedCreateInput>
  }

  /**
   * FacebookUser createMany
   */
  export type FacebookUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FacebookUsers.
     */
    data: FacebookUserCreateManyInput | FacebookUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FacebookUser createManyAndReturn
   */
  export type FacebookUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookUser
     */
    select?: FacebookUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookUser
     */
    omit?: FacebookUserOmit<ExtArgs> | null
    /**
     * The data used to create many FacebookUsers.
     */
    data: FacebookUserCreateManyInput | FacebookUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FacebookUser update
   */
  export type FacebookUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookUser
     */
    select?: FacebookUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookUser
     */
    omit?: FacebookUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookUserInclude<ExtArgs> | null
    /**
     * The data needed to update a FacebookUser.
     */
    data: XOR<FacebookUserUpdateInput, FacebookUserUncheckedUpdateInput>
    /**
     * Choose, which FacebookUser to update.
     */
    where: FacebookUserWhereUniqueInput
  }

  /**
   * FacebookUser updateMany
   */
  export type FacebookUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FacebookUsers.
     */
    data: XOR<FacebookUserUpdateManyMutationInput, FacebookUserUncheckedUpdateManyInput>
    /**
     * Filter which FacebookUsers to update
     */
    where?: FacebookUserWhereInput
    /**
     * Limit how many FacebookUsers to update.
     */
    limit?: number
  }

  /**
   * FacebookUser updateManyAndReturn
   */
  export type FacebookUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookUser
     */
    select?: FacebookUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookUser
     */
    omit?: FacebookUserOmit<ExtArgs> | null
    /**
     * The data used to update FacebookUsers.
     */
    data: XOR<FacebookUserUpdateManyMutationInput, FacebookUserUncheckedUpdateManyInput>
    /**
     * Filter which FacebookUsers to update
     */
    where?: FacebookUserWhereInput
    /**
     * Limit how many FacebookUsers to update.
     */
    limit?: number
  }

  /**
   * FacebookUser upsert
   */
  export type FacebookUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookUser
     */
    select?: FacebookUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookUser
     */
    omit?: FacebookUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookUserInclude<ExtArgs> | null
    /**
     * The filter to search for the FacebookUser to update in case it exists.
     */
    where: FacebookUserWhereUniqueInput
    /**
     * In case the FacebookUser found by the `where` argument doesn't exist, create a new FacebookUser with this data.
     */
    create: XOR<FacebookUserCreateInput, FacebookUserUncheckedCreateInput>
    /**
     * In case the FacebookUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FacebookUserUpdateInput, FacebookUserUncheckedUpdateInput>
  }

  /**
   * FacebookUser delete
   */
  export type FacebookUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookUser
     */
    select?: FacebookUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookUser
     */
    omit?: FacebookUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookUserInclude<ExtArgs> | null
    /**
     * Filter which FacebookUser to delete.
     */
    where: FacebookUserWhereUniqueInput
  }

  /**
   * FacebookUser deleteMany
   */
  export type FacebookUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacebookUsers to delete
     */
    where?: FacebookUserWhereInput
    /**
     * Limit how many FacebookUsers to delete.
     */
    limit?: number
  }

  /**
   * FacebookUser.events
   */
  export type FacebookUser$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEvent
     */
    select?: FacebookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEvent
     */
    omit?: FacebookEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEventInclude<ExtArgs> | null
    where?: FacebookEventWhereInput
    orderBy?: FacebookEventOrderByWithRelationInput | FacebookEventOrderByWithRelationInput[]
    cursor?: FacebookEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FacebookEventScalarFieldEnum | FacebookEventScalarFieldEnum[]
  }

  /**
   * FacebookUser without action
   */
  export type FacebookUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookUser
     */
    select?: FacebookUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookUser
     */
    omit?: FacebookUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookUserInclude<ExtArgs> | null
  }


  /**
   * Model FacebookEvent
   */

  export type AggregateFacebookEvent = {
    _count: FacebookEventCountAggregateOutputType | null
    _min: FacebookEventMinAggregateOutputType | null
    _max: FacebookEventMaxAggregateOutputType | null
  }

  export type FacebookEventMinAggregateOutputType = {
    eventId: string | null
    timestamp: Date | null
    funnelStage: string | null
    eventType: string | null
    userId: string | null
  }

  export type FacebookEventMaxAggregateOutputType = {
    eventId: string | null
    timestamp: Date | null
    funnelStage: string | null
    eventType: string | null
    userId: string | null
  }

  export type FacebookEventCountAggregateOutputType = {
    eventId: number
    timestamp: number
    funnelStage: number
    eventType: number
    userId: number
    _all: number
  }


  export type FacebookEventMinAggregateInputType = {
    eventId?: true
    timestamp?: true
    funnelStage?: true
    eventType?: true
    userId?: true
  }

  export type FacebookEventMaxAggregateInputType = {
    eventId?: true
    timestamp?: true
    funnelStage?: true
    eventType?: true
    userId?: true
  }

  export type FacebookEventCountAggregateInputType = {
    eventId?: true
    timestamp?: true
    funnelStage?: true
    eventType?: true
    userId?: true
    _all?: true
  }

  export type FacebookEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacebookEvent to aggregate.
     */
    where?: FacebookEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacebookEvents to fetch.
     */
    orderBy?: FacebookEventOrderByWithRelationInput | FacebookEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FacebookEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacebookEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacebookEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FacebookEvents
    **/
    _count?: true | FacebookEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacebookEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacebookEventMaxAggregateInputType
  }

  export type GetFacebookEventAggregateType<T extends FacebookEventAggregateArgs> = {
        [P in keyof T & keyof AggregateFacebookEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacebookEvent[P]>
      : GetScalarType<T[P], AggregateFacebookEvent[P]>
  }




  export type FacebookEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacebookEventWhereInput
    orderBy?: FacebookEventOrderByWithAggregationInput | FacebookEventOrderByWithAggregationInput[]
    by: FacebookEventScalarFieldEnum[] | FacebookEventScalarFieldEnum
    having?: FacebookEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacebookEventCountAggregateInputType | true
    _min?: FacebookEventMinAggregateInputType
    _max?: FacebookEventMaxAggregateInputType
  }

  export type FacebookEventGroupByOutputType = {
    eventId: string
    timestamp: Date
    funnelStage: string
    eventType: string
    userId: string
    _count: FacebookEventCountAggregateOutputType | null
    _min: FacebookEventMinAggregateOutputType | null
    _max: FacebookEventMaxAggregateOutputType | null
  }

  type GetFacebookEventGroupByPayload<T extends FacebookEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FacebookEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacebookEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacebookEventGroupByOutputType[P]>
            : GetScalarType<T[P], FacebookEventGroupByOutputType[P]>
        }
      >
    >


  export type FacebookEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    eventId?: boolean
    timestamp?: boolean
    funnelStage?: boolean
    eventType?: boolean
    userId?: boolean
    user?: boolean | FacebookUserDefaultArgs<ExtArgs>
    engagementTop?: boolean | FacebookEvent$engagementTopArgs<ExtArgs>
    engagementBottom?: boolean | FacebookEvent$engagementBottomArgs<ExtArgs>
  }, ExtArgs["result"]["facebookEvent"]>

  export type FacebookEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    eventId?: boolean
    timestamp?: boolean
    funnelStage?: boolean
    eventType?: boolean
    userId?: boolean
    user?: boolean | FacebookUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facebookEvent"]>

  export type FacebookEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    eventId?: boolean
    timestamp?: boolean
    funnelStage?: boolean
    eventType?: boolean
    userId?: boolean
    user?: boolean | FacebookUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facebookEvent"]>

  export type FacebookEventSelectScalar = {
    eventId?: boolean
    timestamp?: boolean
    funnelStage?: boolean
    eventType?: boolean
    userId?: boolean
  }

  export type FacebookEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"eventId" | "timestamp" | "funnelStage" | "eventType" | "userId", ExtArgs["result"]["facebookEvent"]>
  export type FacebookEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | FacebookUserDefaultArgs<ExtArgs>
    engagementTop?: boolean | FacebookEvent$engagementTopArgs<ExtArgs>
    engagementBottom?: boolean | FacebookEvent$engagementBottomArgs<ExtArgs>
  }
  export type FacebookEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | FacebookUserDefaultArgs<ExtArgs>
  }
  export type FacebookEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | FacebookUserDefaultArgs<ExtArgs>
  }

  export type $FacebookEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FacebookEvent"
    objects: {
      user: Prisma.$FacebookUserPayload<ExtArgs>
      engagementTop: Prisma.$FacebookEngagementTopPayload<ExtArgs> | null
      engagementBottom: Prisma.$FacebookEngagementBottomPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      eventId: string
      timestamp: Date
      funnelStage: string
      eventType: string
      userId: string
    }, ExtArgs["result"]["facebookEvent"]>
    composites: {}
  }

  type FacebookEventGetPayload<S extends boolean | null | undefined | FacebookEventDefaultArgs> = $Result.GetResult<Prisma.$FacebookEventPayload, S>

  type FacebookEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FacebookEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FacebookEventCountAggregateInputType | true
    }

  export interface FacebookEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FacebookEvent'], meta: { name: 'FacebookEvent' } }
    /**
     * Find zero or one FacebookEvent that matches the filter.
     * @param {FacebookEventFindUniqueArgs} args - Arguments to find a FacebookEvent
     * @example
     * // Get one FacebookEvent
     * const facebookEvent = await prisma.facebookEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FacebookEventFindUniqueArgs>(args: SelectSubset<T, FacebookEventFindUniqueArgs<ExtArgs>>): Prisma__FacebookEventClient<$Result.GetResult<Prisma.$FacebookEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FacebookEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FacebookEventFindUniqueOrThrowArgs} args - Arguments to find a FacebookEvent
     * @example
     * // Get one FacebookEvent
     * const facebookEvent = await prisma.facebookEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FacebookEventFindUniqueOrThrowArgs>(args: SelectSubset<T, FacebookEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FacebookEventClient<$Result.GetResult<Prisma.$FacebookEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FacebookEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookEventFindFirstArgs} args - Arguments to find a FacebookEvent
     * @example
     * // Get one FacebookEvent
     * const facebookEvent = await prisma.facebookEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FacebookEventFindFirstArgs>(args?: SelectSubset<T, FacebookEventFindFirstArgs<ExtArgs>>): Prisma__FacebookEventClient<$Result.GetResult<Prisma.$FacebookEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FacebookEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookEventFindFirstOrThrowArgs} args - Arguments to find a FacebookEvent
     * @example
     * // Get one FacebookEvent
     * const facebookEvent = await prisma.facebookEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FacebookEventFindFirstOrThrowArgs>(args?: SelectSubset<T, FacebookEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__FacebookEventClient<$Result.GetResult<Prisma.$FacebookEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FacebookEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FacebookEvents
     * const facebookEvents = await prisma.facebookEvent.findMany()
     * 
     * // Get first 10 FacebookEvents
     * const facebookEvents = await prisma.facebookEvent.findMany({ take: 10 })
     * 
     * // Only select the `eventId`
     * const facebookEventWithEventIdOnly = await prisma.facebookEvent.findMany({ select: { eventId: true } })
     * 
     */
    findMany<T extends FacebookEventFindManyArgs>(args?: SelectSubset<T, FacebookEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacebookEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FacebookEvent.
     * @param {FacebookEventCreateArgs} args - Arguments to create a FacebookEvent.
     * @example
     * // Create one FacebookEvent
     * const FacebookEvent = await prisma.facebookEvent.create({
     *   data: {
     *     // ... data to create a FacebookEvent
     *   }
     * })
     * 
     */
    create<T extends FacebookEventCreateArgs>(args: SelectSubset<T, FacebookEventCreateArgs<ExtArgs>>): Prisma__FacebookEventClient<$Result.GetResult<Prisma.$FacebookEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FacebookEvents.
     * @param {FacebookEventCreateManyArgs} args - Arguments to create many FacebookEvents.
     * @example
     * // Create many FacebookEvents
     * const facebookEvent = await prisma.facebookEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FacebookEventCreateManyArgs>(args?: SelectSubset<T, FacebookEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FacebookEvents and returns the data saved in the database.
     * @param {FacebookEventCreateManyAndReturnArgs} args - Arguments to create many FacebookEvents.
     * @example
     * // Create many FacebookEvents
     * const facebookEvent = await prisma.facebookEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FacebookEvents and only return the `eventId`
     * const facebookEventWithEventIdOnly = await prisma.facebookEvent.createManyAndReturn({
     *   select: { eventId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FacebookEventCreateManyAndReturnArgs>(args?: SelectSubset<T, FacebookEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacebookEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FacebookEvent.
     * @param {FacebookEventDeleteArgs} args - Arguments to delete one FacebookEvent.
     * @example
     * // Delete one FacebookEvent
     * const FacebookEvent = await prisma.facebookEvent.delete({
     *   where: {
     *     // ... filter to delete one FacebookEvent
     *   }
     * })
     * 
     */
    delete<T extends FacebookEventDeleteArgs>(args: SelectSubset<T, FacebookEventDeleteArgs<ExtArgs>>): Prisma__FacebookEventClient<$Result.GetResult<Prisma.$FacebookEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FacebookEvent.
     * @param {FacebookEventUpdateArgs} args - Arguments to update one FacebookEvent.
     * @example
     * // Update one FacebookEvent
     * const facebookEvent = await prisma.facebookEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FacebookEventUpdateArgs>(args: SelectSubset<T, FacebookEventUpdateArgs<ExtArgs>>): Prisma__FacebookEventClient<$Result.GetResult<Prisma.$FacebookEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FacebookEvents.
     * @param {FacebookEventDeleteManyArgs} args - Arguments to filter FacebookEvents to delete.
     * @example
     * // Delete a few FacebookEvents
     * const { count } = await prisma.facebookEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FacebookEventDeleteManyArgs>(args?: SelectSubset<T, FacebookEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FacebookEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FacebookEvents
     * const facebookEvent = await prisma.facebookEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FacebookEventUpdateManyArgs>(args: SelectSubset<T, FacebookEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FacebookEvents and returns the data updated in the database.
     * @param {FacebookEventUpdateManyAndReturnArgs} args - Arguments to update many FacebookEvents.
     * @example
     * // Update many FacebookEvents
     * const facebookEvent = await prisma.facebookEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FacebookEvents and only return the `eventId`
     * const facebookEventWithEventIdOnly = await prisma.facebookEvent.updateManyAndReturn({
     *   select: { eventId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FacebookEventUpdateManyAndReturnArgs>(args: SelectSubset<T, FacebookEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacebookEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FacebookEvent.
     * @param {FacebookEventUpsertArgs} args - Arguments to update or create a FacebookEvent.
     * @example
     * // Update or create a FacebookEvent
     * const facebookEvent = await prisma.facebookEvent.upsert({
     *   create: {
     *     // ... data to create a FacebookEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FacebookEvent we want to update
     *   }
     * })
     */
    upsert<T extends FacebookEventUpsertArgs>(args: SelectSubset<T, FacebookEventUpsertArgs<ExtArgs>>): Prisma__FacebookEventClient<$Result.GetResult<Prisma.$FacebookEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FacebookEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookEventCountArgs} args - Arguments to filter FacebookEvents to count.
     * @example
     * // Count the number of FacebookEvents
     * const count = await prisma.facebookEvent.count({
     *   where: {
     *     // ... the filter for the FacebookEvents we want to count
     *   }
     * })
    **/
    count<T extends FacebookEventCountArgs>(
      args?: Subset<T, FacebookEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacebookEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FacebookEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FacebookEventAggregateArgs>(args: Subset<T, FacebookEventAggregateArgs>): Prisma.PrismaPromise<GetFacebookEventAggregateType<T>>

    /**
     * Group by FacebookEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FacebookEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FacebookEventGroupByArgs['orderBy'] }
        : { orderBy?: FacebookEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FacebookEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacebookEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FacebookEvent model
   */
  readonly fields: FacebookEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FacebookEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FacebookEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends FacebookUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FacebookUserDefaultArgs<ExtArgs>>): Prisma__FacebookUserClient<$Result.GetResult<Prisma.$FacebookUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    engagementTop<T extends FacebookEvent$engagementTopArgs<ExtArgs> = {}>(args?: Subset<T, FacebookEvent$engagementTopArgs<ExtArgs>>): Prisma__FacebookEngagementTopClient<$Result.GetResult<Prisma.$FacebookEngagementTopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    engagementBottom<T extends FacebookEvent$engagementBottomArgs<ExtArgs> = {}>(args?: Subset<T, FacebookEvent$engagementBottomArgs<ExtArgs>>): Prisma__FacebookEngagementBottomClient<$Result.GetResult<Prisma.$FacebookEngagementBottomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FacebookEvent model
   */
  interface FacebookEventFieldRefs {
    readonly eventId: FieldRef<"FacebookEvent", 'String'>
    readonly timestamp: FieldRef<"FacebookEvent", 'DateTime'>
    readonly funnelStage: FieldRef<"FacebookEvent", 'String'>
    readonly eventType: FieldRef<"FacebookEvent", 'String'>
    readonly userId: FieldRef<"FacebookEvent", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FacebookEvent findUnique
   */
  export type FacebookEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEvent
     */
    select?: FacebookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEvent
     */
    omit?: FacebookEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEventInclude<ExtArgs> | null
    /**
     * Filter, which FacebookEvent to fetch.
     */
    where: FacebookEventWhereUniqueInput
  }

  /**
   * FacebookEvent findUniqueOrThrow
   */
  export type FacebookEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEvent
     */
    select?: FacebookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEvent
     */
    omit?: FacebookEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEventInclude<ExtArgs> | null
    /**
     * Filter, which FacebookEvent to fetch.
     */
    where: FacebookEventWhereUniqueInput
  }

  /**
   * FacebookEvent findFirst
   */
  export type FacebookEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEvent
     */
    select?: FacebookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEvent
     */
    omit?: FacebookEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEventInclude<ExtArgs> | null
    /**
     * Filter, which FacebookEvent to fetch.
     */
    where?: FacebookEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacebookEvents to fetch.
     */
    orderBy?: FacebookEventOrderByWithRelationInput | FacebookEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacebookEvents.
     */
    cursor?: FacebookEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacebookEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacebookEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacebookEvents.
     */
    distinct?: FacebookEventScalarFieldEnum | FacebookEventScalarFieldEnum[]
  }

  /**
   * FacebookEvent findFirstOrThrow
   */
  export type FacebookEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEvent
     */
    select?: FacebookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEvent
     */
    omit?: FacebookEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEventInclude<ExtArgs> | null
    /**
     * Filter, which FacebookEvent to fetch.
     */
    where?: FacebookEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacebookEvents to fetch.
     */
    orderBy?: FacebookEventOrderByWithRelationInput | FacebookEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacebookEvents.
     */
    cursor?: FacebookEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacebookEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacebookEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacebookEvents.
     */
    distinct?: FacebookEventScalarFieldEnum | FacebookEventScalarFieldEnum[]
  }

  /**
   * FacebookEvent findMany
   */
  export type FacebookEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEvent
     */
    select?: FacebookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEvent
     */
    omit?: FacebookEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEventInclude<ExtArgs> | null
    /**
     * Filter, which FacebookEvents to fetch.
     */
    where?: FacebookEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacebookEvents to fetch.
     */
    orderBy?: FacebookEventOrderByWithRelationInput | FacebookEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FacebookEvents.
     */
    cursor?: FacebookEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacebookEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacebookEvents.
     */
    skip?: number
    distinct?: FacebookEventScalarFieldEnum | FacebookEventScalarFieldEnum[]
  }

  /**
   * FacebookEvent create
   */
  export type FacebookEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEvent
     */
    select?: FacebookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEvent
     */
    omit?: FacebookEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEventInclude<ExtArgs> | null
    /**
     * The data needed to create a FacebookEvent.
     */
    data: XOR<FacebookEventCreateInput, FacebookEventUncheckedCreateInput>
  }

  /**
   * FacebookEvent createMany
   */
  export type FacebookEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FacebookEvents.
     */
    data: FacebookEventCreateManyInput | FacebookEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FacebookEvent createManyAndReturn
   */
  export type FacebookEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEvent
     */
    select?: FacebookEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEvent
     */
    omit?: FacebookEventOmit<ExtArgs> | null
    /**
     * The data used to create many FacebookEvents.
     */
    data: FacebookEventCreateManyInput | FacebookEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FacebookEvent update
   */
  export type FacebookEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEvent
     */
    select?: FacebookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEvent
     */
    omit?: FacebookEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEventInclude<ExtArgs> | null
    /**
     * The data needed to update a FacebookEvent.
     */
    data: XOR<FacebookEventUpdateInput, FacebookEventUncheckedUpdateInput>
    /**
     * Choose, which FacebookEvent to update.
     */
    where: FacebookEventWhereUniqueInput
  }

  /**
   * FacebookEvent updateMany
   */
  export type FacebookEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FacebookEvents.
     */
    data: XOR<FacebookEventUpdateManyMutationInput, FacebookEventUncheckedUpdateManyInput>
    /**
     * Filter which FacebookEvents to update
     */
    where?: FacebookEventWhereInput
    /**
     * Limit how many FacebookEvents to update.
     */
    limit?: number
  }

  /**
   * FacebookEvent updateManyAndReturn
   */
  export type FacebookEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEvent
     */
    select?: FacebookEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEvent
     */
    omit?: FacebookEventOmit<ExtArgs> | null
    /**
     * The data used to update FacebookEvents.
     */
    data: XOR<FacebookEventUpdateManyMutationInput, FacebookEventUncheckedUpdateManyInput>
    /**
     * Filter which FacebookEvents to update
     */
    where?: FacebookEventWhereInput
    /**
     * Limit how many FacebookEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FacebookEvent upsert
   */
  export type FacebookEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEvent
     */
    select?: FacebookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEvent
     */
    omit?: FacebookEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEventInclude<ExtArgs> | null
    /**
     * The filter to search for the FacebookEvent to update in case it exists.
     */
    where: FacebookEventWhereUniqueInput
    /**
     * In case the FacebookEvent found by the `where` argument doesn't exist, create a new FacebookEvent with this data.
     */
    create: XOR<FacebookEventCreateInput, FacebookEventUncheckedCreateInput>
    /**
     * In case the FacebookEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FacebookEventUpdateInput, FacebookEventUncheckedUpdateInput>
  }

  /**
   * FacebookEvent delete
   */
  export type FacebookEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEvent
     */
    select?: FacebookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEvent
     */
    omit?: FacebookEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEventInclude<ExtArgs> | null
    /**
     * Filter which FacebookEvent to delete.
     */
    where: FacebookEventWhereUniqueInput
  }

  /**
   * FacebookEvent deleteMany
   */
  export type FacebookEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacebookEvents to delete
     */
    where?: FacebookEventWhereInput
    /**
     * Limit how many FacebookEvents to delete.
     */
    limit?: number
  }

  /**
   * FacebookEvent.engagementTop
   */
  export type FacebookEvent$engagementTopArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEngagementTop
     */
    select?: FacebookEngagementTopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEngagementTop
     */
    omit?: FacebookEngagementTopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEngagementTopInclude<ExtArgs> | null
    where?: FacebookEngagementTopWhereInput
  }

  /**
   * FacebookEvent.engagementBottom
   */
  export type FacebookEvent$engagementBottomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEngagementBottom
     */
    select?: FacebookEngagementBottomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEngagementBottom
     */
    omit?: FacebookEngagementBottomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEngagementBottomInclude<ExtArgs> | null
    where?: FacebookEngagementBottomWhereInput
  }

  /**
   * FacebookEvent without action
   */
  export type FacebookEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEvent
     */
    select?: FacebookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEvent
     */
    omit?: FacebookEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEventInclude<ExtArgs> | null
  }


  /**
   * Model FacebookEngagementTop
   */

  export type AggregateFacebookEngagementTop = {
    _count: FacebookEngagementTopCountAggregateOutputType | null
    _min: FacebookEngagementTopMinAggregateOutputType | null
    _max: FacebookEngagementTopMaxAggregateOutputType | null
  }

  export type FacebookEngagementTopMinAggregateOutputType = {
    facebookEventId: string | null
    actionTime: Date | null
    referrer: string | null
    videoId: string | null
  }

  export type FacebookEngagementTopMaxAggregateOutputType = {
    facebookEventId: string | null
    actionTime: Date | null
    referrer: string | null
    videoId: string | null
  }

  export type FacebookEngagementTopCountAggregateOutputType = {
    facebookEventId: number
    actionTime: number
    referrer: number
    videoId: number
    _all: number
  }


  export type FacebookEngagementTopMinAggregateInputType = {
    facebookEventId?: true
    actionTime?: true
    referrer?: true
    videoId?: true
  }

  export type FacebookEngagementTopMaxAggregateInputType = {
    facebookEventId?: true
    actionTime?: true
    referrer?: true
    videoId?: true
  }

  export type FacebookEngagementTopCountAggregateInputType = {
    facebookEventId?: true
    actionTime?: true
    referrer?: true
    videoId?: true
    _all?: true
  }

  export type FacebookEngagementTopAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacebookEngagementTop to aggregate.
     */
    where?: FacebookEngagementTopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacebookEngagementTops to fetch.
     */
    orderBy?: FacebookEngagementTopOrderByWithRelationInput | FacebookEngagementTopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FacebookEngagementTopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacebookEngagementTops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacebookEngagementTops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FacebookEngagementTops
    **/
    _count?: true | FacebookEngagementTopCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacebookEngagementTopMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacebookEngagementTopMaxAggregateInputType
  }

  export type GetFacebookEngagementTopAggregateType<T extends FacebookEngagementTopAggregateArgs> = {
        [P in keyof T & keyof AggregateFacebookEngagementTop]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacebookEngagementTop[P]>
      : GetScalarType<T[P], AggregateFacebookEngagementTop[P]>
  }




  export type FacebookEngagementTopGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacebookEngagementTopWhereInput
    orderBy?: FacebookEngagementTopOrderByWithAggregationInput | FacebookEngagementTopOrderByWithAggregationInput[]
    by: FacebookEngagementTopScalarFieldEnum[] | FacebookEngagementTopScalarFieldEnum
    having?: FacebookEngagementTopScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacebookEngagementTopCountAggregateInputType | true
    _min?: FacebookEngagementTopMinAggregateInputType
    _max?: FacebookEngagementTopMaxAggregateInputType
  }

  export type FacebookEngagementTopGroupByOutputType = {
    facebookEventId: string
    actionTime: Date
    referrer: string
    videoId: string | null
    _count: FacebookEngagementTopCountAggregateOutputType | null
    _min: FacebookEngagementTopMinAggregateOutputType | null
    _max: FacebookEngagementTopMaxAggregateOutputType | null
  }

  type GetFacebookEngagementTopGroupByPayload<T extends FacebookEngagementTopGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FacebookEngagementTopGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacebookEngagementTopGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacebookEngagementTopGroupByOutputType[P]>
            : GetScalarType<T[P], FacebookEngagementTopGroupByOutputType[P]>
        }
      >
    >


  export type FacebookEngagementTopSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    facebookEventId?: boolean
    actionTime?: boolean
    referrer?: boolean
    videoId?: boolean
    facebookEvent?: boolean | FacebookEventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facebookEngagementTop"]>

  export type FacebookEngagementTopSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    facebookEventId?: boolean
    actionTime?: boolean
    referrer?: boolean
    videoId?: boolean
    facebookEvent?: boolean | FacebookEventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facebookEngagementTop"]>

  export type FacebookEngagementTopSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    facebookEventId?: boolean
    actionTime?: boolean
    referrer?: boolean
    videoId?: boolean
    facebookEvent?: boolean | FacebookEventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facebookEngagementTop"]>

  export type FacebookEngagementTopSelectScalar = {
    facebookEventId?: boolean
    actionTime?: boolean
    referrer?: boolean
    videoId?: boolean
  }

  export type FacebookEngagementTopOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"facebookEventId" | "actionTime" | "referrer" | "videoId", ExtArgs["result"]["facebookEngagementTop"]>
  export type FacebookEngagementTopInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facebookEvent?: boolean | FacebookEventDefaultArgs<ExtArgs>
  }
  export type FacebookEngagementTopIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facebookEvent?: boolean | FacebookEventDefaultArgs<ExtArgs>
  }
  export type FacebookEngagementTopIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facebookEvent?: boolean | FacebookEventDefaultArgs<ExtArgs>
  }

  export type $FacebookEngagementTopPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FacebookEngagementTop"
    objects: {
      facebookEvent: Prisma.$FacebookEventPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      facebookEventId: string
      actionTime: Date
      referrer: string
      videoId: string | null
    }, ExtArgs["result"]["facebookEngagementTop"]>
    composites: {}
  }

  type FacebookEngagementTopGetPayload<S extends boolean | null | undefined | FacebookEngagementTopDefaultArgs> = $Result.GetResult<Prisma.$FacebookEngagementTopPayload, S>

  type FacebookEngagementTopCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FacebookEngagementTopFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FacebookEngagementTopCountAggregateInputType | true
    }

  export interface FacebookEngagementTopDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FacebookEngagementTop'], meta: { name: 'FacebookEngagementTop' } }
    /**
     * Find zero or one FacebookEngagementTop that matches the filter.
     * @param {FacebookEngagementTopFindUniqueArgs} args - Arguments to find a FacebookEngagementTop
     * @example
     * // Get one FacebookEngagementTop
     * const facebookEngagementTop = await prisma.facebookEngagementTop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FacebookEngagementTopFindUniqueArgs>(args: SelectSubset<T, FacebookEngagementTopFindUniqueArgs<ExtArgs>>): Prisma__FacebookEngagementTopClient<$Result.GetResult<Prisma.$FacebookEngagementTopPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FacebookEngagementTop that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FacebookEngagementTopFindUniqueOrThrowArgs} args - Arguments to find a FacebookEngagementTop
     * @example
     * // Get one FacebookEngagementTop
     * const facebookEngagementTop = await prisma.facebookEngagementTop.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FacebookEngagementTopFindUniqueOrThrowArgs>(args: SelectSubset<T, FacebookEngagementTopFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FacebookEngagementTopClient<$Result.GetResult<Prisma.$FacebookEngagementTopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FacebookEngagementTop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookEngagementTopFindFirstArgs} args - Arguments to find a FacebookEngagementTop
     * @example
     * // Get one FacebookEngagementTop
     * const facebookEngagementTop = await prisma.facebookEngagementTop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FacebookEngagementTopFindFirstArgs>(args?: SelectSubset<T, FacebookEngagementTopFindFirstArgs<ExtArgs>>): Prisma__FacebookEngagementTopClient<$Result.GetResult<Prisma.$FacebookEngagementTopPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FacebookEngagementTop that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookEngagementTopFindFirstOrThrowArgs} args - Arguments to find a FacebookEngagementTop
     * @example
     * // Get one FacebookEngagementTop
     * const facebookEngagementTop = await prisma.facebookEngagementTop.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FacebookEngagementTopFindFirstOrThrowArgs>(args?: SelectSubset<T, FacebookEngagementTopFindFirstOrThrowArgs<ExtArgs>>): Prisma__FacebookEngagementTopClient<$Result.GetResult<Prisma.$FacebookEngagementTopPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FacebookEngagementTops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookEngagementTopFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FacebookEngagementTops
     * const facebookEngagementTops = await prisma.facebookEngagementTop.findMany()
     * 
     * // Get first 10 FacebookEngagementTops
     * const facebookEngagementTops = await prisma.facebookEngagementTop.findMany({ take: 10 })
     * 
     * // Only select the `facebookEventId`
     * const facebookEngagementTopWithFacebookEventIdOnly = await prisma.facebookEngagementTop.findMany({ select: { facebookEventId: true } })
     * 
     */
    findMany<T extends FacebookEngagementTopFindManyArgs>(args?: SelectSubset<T, FacebookEngagementTopFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacebookEngagementTopPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FacebookEngagementTop.
     * @param {FacebookEngagementTopCreateArgs} args - Arguments to create a FacebookEngagementTop.
     * @example
     * // Create one FacebookEngagementTop
     * const FacebookEngagementTop = await prisma.facebookEngagementTop.create({
     *   data: {
     *     // ... data to create a FacebookEngagementTop
     *   }
     * })
     * 
     */
    create<T extends FacebookEngagementTopCreateArgs>(args: SelectSubset<T, FacebookEngagementTopCreateArgs<ExtArgs>>): Prisma__FacebookEngagementTopClient<$Result.GetResult<Prisma.$FacebookEngagementTopPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FacebookEngagementTops.
     * @param {FacebookEngagementTopCreateManyArgs} args - Arguments to create many FacebookEngagementTops.
     * @example
     * // Create many FacebookEngagementTops
     * const facebookEngagementTop = await prisma.facebookEngagementTop.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FacebookEngagementTopCreateManyArgs>(args?: SelectSubset<T, FacebookEngagementTopCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FacebookEngagementTops and returns the data saved in the database.
     * @param {FacebookEngagementTopCreateManyAndReturnArgs} args - Arguments to create many FacebookEngagementTops.
     * @example
     * // Create many FacebookEngagementTops
     * const facebookEngagementTop = await prisma.facebookEngagementTop.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FacebookEngagementTops and only return the `facebookEventId`
     * const facebookEngagementTopWithFacebookEventIdOnly = await prisma.facebookEngagementTop.createManyAndReturn({
     *   select: { facebookEventId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FacebookEngagementTopCreateManyAndReturnArgs>(args?: SelectSubset<T, FacebookEngagementTopCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacebookEngagementTopPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FacebookEngagementTop.
     * @param {FacebookEngagementTopDeleteArgs} args - Arguments to delete one FacebookEngagementTop.
     * @example
     * // Delete one FacebookEngagementTop
     * const FacebookEngagementTop = await prisma.facebookEngagementTop.delete({
     *   where: {
     *     // ... filter to delete one FacebookEngagementTop
     *   }
     * })
     * 
     */
    delete<T extends FacebookEngagementTopDeleteArgs>(args: SelectSubset<T, FacebookEngagementTopDeleteArgs<ExtArgs>>): Prisma__FacebookEngagementTopClient<$Result.GetResult<Prisma.$FacebookEngagementTopPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FacebookEngagementTop.
     * @param {FacebookEngagementTopUpdateArgs} args - Arguments to update one FacebookEngagementTop.
     * @example
     * // Update one FacebookEngagementTop
     * const facebookEngagementTop = await prisma.facebookEngagementTop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FacebookEngagementTopUpdateArgs>(args: SelectSubset<T, FacebookEngagementTopUpdateArgs<ExtArgs>>): Prisma__FacebookEngagementTopClient<$Result.GetResult<Prisma.$FacebookEngagementTopPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FacebookEngagementTops.
     * @param {FacebookEngagementTopDeleteManyArgs} args - Arguments to filter FacebookEngagementTops to delete.
     * @example
     * // Delete a few FacebookEngagementTops
     * const { count } = await prisma.facebookEngagementTop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FacebookEngagementTopDeleteManyArgs>(args?: SelectSubset<T, FacebookEngagementTopDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FacebookEngagementTops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookEngagementTopUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FacebookEngagementTops
     * const facebookEngagementTop = await prisma.facebookEngagementTop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FacebookEngagementTopUpdateManyArgs>(args: SelectSubset<T, FacebookEngagementTopUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FacebookEngagementTops and returns the data updated in the database.
     * @param {FacebookEngagementTopUpdateManyAndReturnArgs} args - Arguments to update many FacebookEngagementTops.
     * @example
     * // Update many FacebookEngagementTops
     * const facebookEngagementTop = await prisma.facebookEngagementTop.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FacebookEngagementTops and only return the `facebookEventId`
     * const facebookEngagementTopWithFacebookEventIdOnly = await prisma.facebookEngagementTop.updateManyAndReturn({
     *   select: { facebookEventId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FacebookEngagementTopUpdateManyAndReturnArgs>(args: SelectSubset<T, FacebookEngagementTopUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacebookEngagementTopPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FacebookEngagementTop.
     * @param {FacebookEngagementTopUpsertArgs} args - Arguments to update or create a FacebookEngagementTop.
     * @example
     * // Update or create a FacebookEngagementTop
     * const facebookEngagementTop = await prisma.facebookEngagementTop.upsert({
     *   create: {
     *     // ... data to create a FacebookEngagementTop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FacebookEngagementTop we want to update
     *   }
     * })
     */
    upsert<T extends FacebookEngagementTopUpsertArgs>(args: SelectSubset<T, FacebookEngagementTopUpsertArgs<ExtArgs>>): Prisma__FacebookEngagementTopClient<$Result.GetResult<Prisma.$FacebookEngagementTopPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FacebookEngagementTops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookEngagementTopCountArgs} args - Arguments to filter FacebookEngagementTops to count.
     * @example
     * // Count the number of FacebookEngagementTops
     * const count = await prisma.facebookEngagementTop.count({
     *   where: {
     *     // ... the filter for the FacebookEngagementTops we want to count
     *   }
     * })
    **/
    count<T extends FacebookEngagementTopCountArgs>(
      args?: Subset<T, FacebookEngagementTopCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacebookEngagementTopCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FacebookEngagementTop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookEngagementTopAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FacebookEngagementTopAggregateArgs>(args: Subset<T, FacebookEngagementTopAggregateArgs>): Prisma.PrismaPromise<GetFacebookEngagementTopAggregateType<T>>

    /**
     * Group by FacebookEngagementTop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookEngagementTopGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FacebookEngagementTopGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FacebookEngagementTopGroupByArgs['orderBy'] }
        : { orderBy?: FacebookEngagementTopGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FacebookEngagementTopGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacebookEngagementTopGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FacebookEngagementTop model
   */
  readonly fields: FacebookEngagementTopFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FacebookEngagementTop.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FacebookEngagementTopClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    facebookEvent<T extends FacebookEventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FacebookEventDefaultArgs<ExtArgs>>): Prisma__FacebookEventClient<$Result.GetResult<Prisma.$FacebookEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FacebookEngagementTop model
   */
  interface FacebookEngagementTopFieldRefs {
    readonly facebookEventId: FieldRef<"FacebookEngagementTop", 'String'>
    readonly actionTime: FieldRef<"FacebookEngagementTop", 'DateTime'>
    readonly referrer: FieldRef<"FacebookEngagementTop", 'String'>
    readonly videoId: FieldRef<"FacebookEngagementTop", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FacebookEngagementTop findUnique
   */
  export type FacebookEngagementTopFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEngagementTop
     */
    select?: FacebookEngagementTopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEngagementTop
     */
    omit?: FacebookEngagementTopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEngagementTopInclude<ExtArgs> | null
    /**
     * Filter, which FacebookEngagementTop to fetch.
     */
    where: FacebookEngagementTopWhereUniqueInput
  }

  /**
   * FacebookEngagementTop findUniqueOrThrow
   */
  export type FacebookEngagementTopFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEngagementTop
     */
    select?: FacebookEngagementTopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEngagementTop
     */
    omit?: FacebookEngagementTopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEngagementTopInclude<ExtArgs> | null
    /**
     * Filter, which FacebookEngagementTop to fetch.
     */
    where: FacebookEngagementTopWhereUniqueInput
  }

  /**
   * FacebookEngagementTop findFirst
   */
  export type FacebookEngagementTopFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEngagementTop
     */
    select?: FacebookEngagementTopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEngagementTop
     */
    omit?: FacebookEngagementTopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEngagementTopInclude<ExtArgs> | null
    /**
     * Filter, which FacebookEngagementTop to fetch.
     */
    where?: FacebookEngagementTopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacebookEngagementTops to fetch.
     */
    orderBy?: FacebookEngagementTopOrderByWithRelationInput | FacebookEngagementTopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacebookEngagementTops.
     */
    cursor?: FacebookEngagementTopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacebookEngagementTops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacebookEngagementTops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacebookEngagementTops.
     */
    distinct?: FacebookEngagementTopScalarFieldEnum | FacebookEngagementTopScalarFieldEnum[]
  }

  /**
   * FacebookEngagementTop findFirstOrThrow
   */
  export type FacebookEngagementTopFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEngagementTop
     */
    select?: FacebookEngagementTopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEngagementTop
     */
    omit?: FacebookEngagementTopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEngagementTopInclude<ExtArgs> | null
    /**
     * Filter, which FacebookEngagementTop to fetch.
     */
    where?: FacebookEngagementTopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacebookEngagementTops to fetch.
     */
    orderBy?: FacebookEngagementTopOrderByWithRelationInput | FacebookEngagementTopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacebookEngagementTops.
     */
    cursor?: FacebookEngagementTopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacebookEngagementTops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacebookEngagementTops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacebookEngagementTops.
     */
    distinct?: FacebookEngagementTopScalarFieldEnum | FacebookEngagementTopScalarFieldEnum[]
  }

  /**
   * FacebookEngagementTop findMany
   */
  export type FacebookEngagementTopFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEngagementTop
     */
    select?: FacebookEngagementTopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEngagementTop
     */
    omit?: FacebookEngagementTopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEngagementTopInclude<ExtArgs> | null
    /**
     * Filter, which FacebookEngagementTops to fetch.
     */
    where?: FacebookEngagementTopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacebookEngagementTops to fetch.
     */
    orderBy?: FacebookEngagementTopOrderByWithRelationInput | FacebookEngagementTopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FacebookEngagementTops.
     */
    cursor?: FacebookEngagementTopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacebookEngagementTops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacebookEngagementTops.
     */
    skip?: number
    distinct?: FacebookEngagementTopScalarFieldEnum | FacebookEngagementTopScalarFieldEnum[]
  }

  /**
   * FacebookEngagementTop create
   */
  export type FacebookEngagementTopCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEngagementTop
     */
    select?: FacebookEngagementTopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEngagementTop
     */
    omit?: FacebookEngagementTopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEngagementTopInclude<ExtArgs> | null
    /**
     * The data needed to create a FacebookEngagementTop.
     */
    data: XOR<FacebookEngagementTopCreateInput, FacebookEngagementTopUncheckedCreateInput>
  }

  /**
   * FacebookEngagementTop createMany
   */
  export type FacebookEngagementTopCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FacebookEngagementTops.
     */
    data: FacebookEngagementTopCreateManyInput | FacebookEngagementTopCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FacebookEngagementTop createManyAndReturn
   */
  export type FacebookEngagementTopCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEngagementTop
     */
    select?: FacebookEngagementTopSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEngagementTop
     */
    omit?: FacebookEngagementTopOmit<ExtArgs> | null
    /**
     * The data used to create many FacebookEngagementTops.
     */
    data: FacebookEngagementTopCreateManyInput | FacebookEngagementTopCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEngagementTopIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FacebookEngagementTop update
   */
  export type FacebookEngagementTopUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEngagementTop
     */
    select?: FacebookEngagementTopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEngagementTop
     */
    omit?: FacebookEngagementTopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEngagementTopInclude<ExtArgs> | null
    /**
     * The data needed to update a FacebookEngagementTop.
     */
    data: XOR<FacebookEngagementTopUpdateInput, FacebookEngagementTopUncheckedUpdateInput>
    /**
     * Choose, which FacebookEngagementTop to update.
     */
    where: FacebookEngagementTopWhereUniqueInput
  }

  /**
   * FacebookEngagementTop updateMany
   */
  export type FacebookEngagementTopUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FacebookEngagementTops.
     */
    data: XOR<FacebookEngagementTopUpdateManyMutationInput, FacebookEngagementTopUncheckedUpdateManyInput>
    /**
     * Filter which FacebookEngagementTops to update
     */
    where?: FacebookEngagementTopWhereInput
    /**
     * Limit how many FacebookEngagementTops to update.
     */
    limit?: number
  }

  /**
   * FacebookEngagementTop updateManyAndReturn
   */
  export type FacebookEngagementTopUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEngagementTop
     */
    select?: FacebookEngagementTopSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEngagementTop
     */
    omit?: FacebookEngagementTopOmit<ExtArgs> | null
    /**
     * The data used to update FacebookEngagementTops.
     */
    data: XOR<FacebookEngagementTopUpdateManyMutationInput, FacebookEngagementTopUncheckedUpdateManyInput>
    /**
     * Filter which FacebookEngagementTops to update
     */
    where?: FacebookEngagementTopWhereInput
    /**
     * Limit how many FacebookEngagementTops to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEngagementTopIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FacebookEngagementTop upsert
   */
  export type FacebookEngagementTopUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEngagementTop
     */
    select?: FacebookEngagementTopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEngagementTop
     */
    omit?: FacebookEngagementTopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEngagementTopInclude<ExtArgs> | null
    /**
     * The filter to search for the FacebookEngagementTop to update in case it exists.
     */
    where: FacebookEngagementTopWhereUniqueInput
    /**
     * In case the FacebookEngagementTop found by the `where` argument doesn't exist, create a new FacebookEngagementTop with this data.
     */
    create: XOR<FacebookEngagementTopCreateInput, FacebookEngagementTopUncheckedCreateInput>
    /**
     * In case the FacebookEngagementTop was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FacebookEngagementTopUpdateInput, FacebookEngagementTopUncheckedUpdateInput>
  }

  /**
   * FacebookEngagementTop delete
   */
  export type FacebookEngagementTopDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEngagementTop
     */
    select?: FacebookEngagementTopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEngagementTop
     */
    omit?: FacebookEngagementTopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEngagementTopInclude<ExtArgs> | null
    /**
     * Filter which FacebookEngagementTop to delete.
     */
    where: FacebookEngagementTopWhereUniqueInput
  }

  /**
   * FacebookEngagementTop deleteMany
   */
  export type FacebookEngagementTopDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacebookEngagementTops to delete
     */
    where?: FacebookEngagementTopWhereInput
    /**
     * Limit how many FacebookEngagementTops to delete.
     */
    limit?: number
  }

  /**
   * FacebookEngagementTop without action
   */
  export type FacebookEngagementTopDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEngagementTop
     */
    select?: FacebookEngagementTopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEngagementTop
     */
    omit?: FacebookEngagementTopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEngagementTopInclude<ExtArgs> | null
  }


  /**
   * Model FacebookEngagementBottom
   */

  export type AggregateFacebookEngagementBottom = {
    _count: FacebookEngagementBottomCountAggregateOutputType | null
    _avg: FacebookEngagementBottomAvgAggregateOutputType | null
    _sum: FacebookEngagementBottomSumAggregateOutputType | null
    _min: FacebookEngagementBottomMinAggregateOutputType | null
    _max: FacebookEngagementBottomMaxAggregateOutputType | null
  }

  export type FacebookEngagementBottomAvgAggregateOutputType = {
    purchaseAmount: Decimal | null
  }

  export type FacebookEngagementBottomSumAggregateOutputType = {
    purchaseAmount: Decimal | null
  }

  export type FacebookEngagementBottomMinAggregateOutputType = {
    facebookEventId: string | null
    adId: string | null
    campaignId: string | null
    clickPosition: string | null
    device: string | null
    browser: string | null
    purchaseAmount: Decimal | null
  }

  export type FacebookEngagementBottomMaxAggregateOutputType = {
    facebookEventId: string | null
    adId: string | null
    campaignId: string | null
    clickPosition: string | null
    device: string | null
    browser: string | null
    purchaseAmount: Decimal | null
  }

  export type FacebookEngagementBottomCountAggregateOutputType = {
    facebookEventId: number
    adId: number
    campaignId: number
    clickPosition: number
    device: number
    browser: number
    purchaseAmount: number
    _all: number
  }


  export type FacebookEngagementBottomAvgAggregateInputType = {
    purchaseAmount?: true
  }

  export type FacebookEngagementBottomSumAggregateInputType = {
    purchaseAmount?: true
  }

  export type FacebookEngagementBottomMinAggregateInputType = {
    facebookEventId?: true
    adId?: true
    campaignId?: true
    clickPosition?: true
    device?: true
    browser?: true
    purchaseAmount?: true
  }

  export type FacebookEngagementBottomMaxAggregateInputType = {
    facebookEventId?: true
    adId?: true
    campaignId?: true
    clickPosition?: true
    device?: true
    browser?: true
    purchaseAmount?: true
  }

  export type FacebookEngagementBottomCountAggregateInputType = {
    facebookEventId?: true
    adId?: true
    campaignId?: true
    clickPosition?: true
    device?: true
    browser?: true
    purchaseAmount?: true
    _all?: true
  }

  export type FacebookEngagementBottomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacebookEngagementBottom to aggregate.
     */
    where?: FacebookEngagementBottomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacebookEngagementBottoms to fetch.
     */
    orderBy?: FacebookEngagementBottomOrderByWithRelationInput | FacebookEngagementBottomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FacebookEngagementBottomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacebookEngagementBottoms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacebookEngagementBottoms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FacebookEngagementBottoms
    **/
    _count?: true | FacebookEngagementBottomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FacebookEngagementBottomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FacebookEngagementBottomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacebookEngagementBottomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacebookEngagementBottomMaxAggregateInputType
  }

  export type GetFacebookEngagementBottomAggregateType<T extends FacebookEngagementBottomAggregateArgs> = {
        [P in keyof T & keyof AggregateFacebookEngagementBottom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacebookEngagementBottom[P]>
      : GetScalarType<T[P], AggregateFacebookEngagementBottom[P]>
  }




  export type FacebookEngagementBottomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacebookEngagementBottomWhereInput
    orderBy?: FacebookEngagementBottomOrderByWithAggregationInput | FacebookEngagementBottomOrderByWithAggregationInput[]
    by: FacebookEngagementBottomScalarFieldEnum[] | FacebookEngagementBottomScalarFieldEnum
    having?: FacebookEngagementBottomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacebookEngagementBottomCountAggregateInputType | true
    _avg?: FacebookEngagementBottomAvgAggregateInputType
    _sum?: FacebookEngagementBottomSumAggregateInputType
    _min?: FacebookEngagementBottomMinAggregateInputType
    _max?: FacebookEngagementBottomMaxAggregateInputType
  }

  export type FacebookEngagementBottomGroupByOutputType = {
    facebookEventId: string
    adId: string
    campaignId: string
    clickPosition: string
    device: string
    browser: string
    purchaseAmount: Decimal | null
    _count: FacebookEngagementBottomCountAggregateOutputType | null
    _avg: FacebookEngagementBottomAvgAggregateOutputType | null
    _sum: FacebookEngagementBottomSumAggregateOutputType | null
    _min: FacebookEngagementBottomMinAggregateOutputType | null
    _max: FacebookEngagementBottomMaxAggregateOutputType | null
  }

  type GetFacebookEngagementBottomGroupByPayload<T extends FacebookEngagementBottomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FacebookEngagementBottomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacebookEngagementBottomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacebookEngagementBottomGroupByOutputType[P]>
            : GetScalarType<T[P], FacebookEngagementBottomGroupByOutputType[P]>
        }
      >
    >


  export type FacebookEngagementBottomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    facebookEventId?: boolean
    adId?: boolean
    campaignId?: boolean
    clickPosition?: boolean
    device?: boolean
    browser?: boolean
    purchaseAmount?: boolean
    facebookEvent?: boolean | FacebookEventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facebookEngagementBottom"]>

  export type FacebookEngagementBottomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    facebookEventId?: boolean
    adId?: boolean
    campaignId?: boolean
    clickPosition?: boolean
    device?: boolean
    browser?: boolean
    purchaseAmount?: boolean
    facebookEvent?: boolean | FacebookEventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facebookEngagementBottom"]>

  export type FacebookEngagementBottomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    facebookEventId?: boolean
    adId?: boolean
    campaignId?: boolean
    clickPosition?: boolean
    device?: boolean
    browser?: boolean
    purchaseAmount?: boolean
    facebookEvent?: boolean | FacebookEventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facebookEngagementBottom"]>

  export type FacebookEngagementBottomSelectScalar = {
    facebookEventId?: boolean
    adId?: boolean
    campaignId?: boolean
    clickPosition?: boolean
    device?: boolean
    browser?: boolean
    purchaseAmount?: boolean
  }

  export type FacebookEngagementBottomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"facebookEventId" | "adId" | "campaignId" | "clickPosition" | "device" | "browser" | "purchaseAmount", ExtArgs["result"]["facebookEngagementBottom"]>
  export type FacebookEngagementBottomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facebookEvent?: boolean | FacebookEventDefaultArgs<ExtArgs>
  }
  export type FacebookEngagementBottomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facebookEvent?: boolean | FacebookEventDefaultArgs<ExtArgs>
  }
  export type FacebookEngagementBottomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facebookEvent?: boolean | FacebookEventDefaultArgs<ExtArgs>
  }

  export type $FacebookEngagementBottomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FacebookEngagementBottom"
    objects: {
      facebookEvent: Prisma.$FacebookEventPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      facebookEventId: string
      adId: string
      campaignId: string
      clickPosition: string
      device: string
      browser: string
      purchaseAmount: Prisma.Decimal | null
    }, ExtArgs["result"]["facebookEngagementBottom"]>
    composites: {}
  }

  type FacebookEngagementBottomGetPayload<S extends boolean | null | undefined | FacebookEngagementBottomDefaultArgs> = $Result.GetResult<Prisma.$FacebookEngagementBottomPayload, S>

  type FacebookEngagementBottomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FacebookEngagementBottomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FacebookEngagementBottomCountAggregateInputType | true
    }

  export interface FacebookEngagementBottomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FacebookEngagementBottom'], meta: { name: 'FacebookEngagementBottom' } }
    /**
     * Find zero or one FacebookEngagementBottom that matches the filter.
     * @param {FacebookEngagementBottomFindUniqueArgs} args - Arguments to find a FacebookEngagementBottom
     * @example
     * // Get one FacebookEngagementBottom
     * const facebookEngagementBottom = await prisma.facebookEngagementBottom.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FacebookEngagementBottomFindUniqueArgs>(args: SelectSubset<T, FacebookEngagementBottomFindUniqueArgs<ExtArgs>>): Prisma__FacebookEngagementBottomClient<$Result.GetResult<Prisma.$FacebookEngagementBottomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FacebookEngagementBottom that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FacebookEngagementBottomFindUniqueOrThrowArgs} args - Arguments to find a FacebookEngagementBottom
     * @example
     * // Get one FacebookEngagementBottom
     * const facebookEngagementBottom = await prisma.facebookEngagementBottom.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FacebookEngagementBottomFindUniqueOrThrowArgs>(args: SelectSubset<T, FacebookEngagementBottomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FacebookEngagementBottomClient<$Result.GetResult<Prisma.$FacebookEngagementBottomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FacebookEngagementBottom that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookEngagementBottomFindFirstArgs} args - Arguments to find a FacebookEngagementBottom
     * @example
     * // Get one FacebookEngagementBottom
     * const facebookEngagementBottom = await prisma.facebookEngagementBottom.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FacebookEngagementBottomFindFirstArgs>(args?: SelectSubset<T, FacebookEngagementBottomFindFirstArgs<ExtArgs>>): Prisma__FacebookEngagementBottomClient<$Result.GetResult<Prisma.$FacebookEngagementBottomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FacebookEngagementBottom that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookEngagementBottomFindFirstOrThrowArgs} args - Arguments to find a FacebookEngagementBottom
     * @example
     * // Get one FacebookEngagementBottom
     * const facebookEngagementBottom = await prisma.facebookEngagementBottom.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FacebookEngagementBottomFindFirstOrThrowArgs>(args?: SelectSubset<T, FacebookEngagementBottomFindFirstOrThrowArgs<ExtArgs>>): Prisma__FacebookEngagementBottomClient<$Result.GetResult<Prisma.$FacebookEngagementBottomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FacebookEngagementBottoms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookEngagementBottomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FacebookEngagementBottoms
     * const facebookEngagementBottoms = await prisma.facebookEngagementBottom.findMany()
     * 
     * // Get first 10 FacebookEngagementBottoms
     * const facebookEngagementBottoms = await prisma.facebookEngagementBottom.findMany({ take: 10 })
     * 
     * // Only select the `facebookEventId`
     * const facebookEngagementBottomWithFacebookEventIdOnly = await prisma.facebookEngagementBottom.findMany({ select: { facebookEventId: true } })
     * 
     */
    findMany<T extends FacebookEngagementBottomFindManyArgs>(args?: SelectSubset<T, FacebookEngagementBottomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacebookEngagementBottomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FacebookEngagementBottom.
     * @param {FacebookEngagementBottomCreateArgs} args - Arguments to create a FacebookEngagementBottom.
     * @example
     * // Create one FacebookEngagementBottom
     * const FacebookEngagementBottom = await prisma.facebookEngagementBottom.create({
     *   data: {
     *     // ... data to create a FacebookEngagementBottom
     *   }
     * })
     * 
     */
    create<T extends FacebookEngagementBottomCreateArgs>(args: SelectSubset<T, FacebookEngagementBottomCreateArgs<ExtArgs>>): Prisma__FacebookEngagementBottomClient<$Result.GetResult<Prisma.$FacebookEngagementBottomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FacebookEngagementBottoms.
     * @param {FacebookEngagementBottomCreateManyArgs} args - Arguments to create many FacebookEngagementBottoms.
     * @example
     * // Create many FacebookEngagementBottoms
     * const facebookEngagementBottom = await prisma.facebookEngagementBottom.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FacebookEngagementBottomCreateManyArgs>(args?: SelectSubset<T, FacebookEngagementBottomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FacebookEngagementBottoms and returns the data saved in the database.
     * @param {FacebookEngagementBottomCreateManyAndReturnArgs} args - Arguments to create many FacebookEngagementBottoms.
     * @example
     * // Create many FacebookEngagementBottoms
     * const facebookEngagementBottom = await prisma.facebookEngagementBottom.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FacebookEngagementBottoms and only return the `facebookEventId`
     * const facebookEngagementBottomWithFacebookEventIdOnly = await prisma.facebookEngagementBottom.createManyAndReturn({
     *   select: { facebookEventId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FacebookEngagementBottomCreateManyAndReturnArgs>(args?: SelectSubset<T, FacebookEngagementBottomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacebookEngagementBottomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FacebookEngagementBottom.
     * @param {FacebookEngagementBottomDeleteArgs} args - Arguments to delete one FacebookEngagementBottom.
     * @example
     * // Delete one FacebookEngagementBottom
     * const FacebookEngagementBottom = await prisma.facebookEngagementBottom.delete({
     *   where: {
     *     // ... filter to delete one FacebookEngagementBottom
     *   }
     * })
     * 
     */
    delete<T extends FacebookEngagementBottomDeleteArgs>(args: SelectSubset<T, FacebookEngagementBottomDeleteArgs<ExtArgs>>): Prisma__FacebookEngagementBottomClient<$Result.GetResult<Prisma.$FacebookEngagementBottomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FacebookEngagementBottom.
     * @param {FacebookEngagementBottomUpdateArgs} args - Arguments to update one FacebookEngagementBottom.
     * @example
     * // Update one FacebookEngagementBottom
     * const facebookEngagementBottom = await prisma.facebookEngagementBottom.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FacebookEngagementBottomUpdateArgs>(args: SelectSubset<T, FacebookEngagementBottomUpdateArgs<ExtArgs>>): Prisma__FacebookEngagementBottomClient<$Result.GetResult<Prisma.$FacebookEngagementBottomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FacebookEngagementBottoms.
     * @param {FacebookEngagementBottomDeleteManyArgs} args - Arguments to filter FacebookEngagementBottoms to delete.
     * @example
     * // Delete a few FacebookEngagementBottoms
     * const { count } = await prisma.facebookEngagementBottom.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FacebookEngagementBottomDeleteManyArgs>(args?: SelectSubset<T, FacebookEngagementBottomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FacebookEngagementBottoms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookEngagementBottomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FacebookEngagementBottoms
     * const facebookEngagementBottom = await prisma.facebookEngagementBottom.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FacebookEngagementBottomUpdateManyArgs>(args: SelectSubset<T, FacebookEngagementBottomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FacebookEngagementBottoms and returns the data updated in the database.
     * @param {FacebookEngagementBottomUpdateManyAndReturnArgs} args - Arguments to update many FacebookEngagementBottoms.
     * @example
     * // Update many FacebookEngagementBottoms
     * const facebookEngagementBottom = await prisma.facebookEngagementBottom.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FacebookEngagementBottoms and only return the `facebookEventId`
     * const facebookEngagementBottomWithFacebookEventIdOnly = await prisma.facebookEngagementBottom.updateManyAndReturn({
     *   select: { facebookEventId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FacebookEngagementBottomUpdateManyAndReturnArgs>(args: SelectSubset<T, FacebookEngagementBottomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacebookEngagementBottomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FacebookEngagementBottom.
     * @param {FacebookEngagementBottomUpsertArgs} args - Arguments to update or create a FacebookEngagementBottom.
     * @example
     * // Update or create a FacebookEngagementBottom
     * const facebookEngagementBottom = await prisma.facebookEngagementBottom.upsert({
     *   create: {
     *     // ... data to create a FacebookEngagementBottom
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FacebookEngagementBottom we want to update
     *   }
     * })
     */
    upsert<T extends FacebookEngagementBottomUpsertArgs>(args: SelectSubset<T, FacebookEngagementBottomUpsertArgs<ExtArgs>>): Prisma__FacebookEngagementBottomClient<$Result.GetResult<Prisma.$FacebookEngagementBottomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FacebookEngagementBottoms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookEngagementBottomCountArgs} args - Arguments to filter FacebookEngagementBottoms to count.
     * @example
     * // Count the number of FacebookEngagementBottoms
     * const count = await prisma.facebookEngagementBottom.count({
     *   where: {
     *     // ... the filter for the FacebookEngagementBottoms we want to count
     *   }
     * })
    **/
    count<T extends FacebookEngagementBottomCountArgs>(
      args?: Subset<T, FacebookEngagementBottomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacebookEngagementBottomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FacebookEngagementBottom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookEngagementBottomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FacebookEngagementBottomAggregateArgs>(args: Subset<T, FacebookEngagementBottomAggregateArgs>): Prisma.PrismaPromise<GetFacebookEngagementBottomAggregateType<T>>

    /**
     * Group by FacebookEngagementBottom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookEngagementBottomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FacebookEngagementBottomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FacebookEngagementBottomGroupByArgs['orderBy'] }
        : { orderBy?: FacebookEngagementBottomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FacebookEngagementBottomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacebookEngagementBottomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FacebookEngagementBottom model
   */
  readonly fields: FacebookEngagementBottomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FacebookEngagementBottom.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FacebookEngagementBottomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    facebookEvent<T extends FacebookEventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FacebookEventDefaultArgs<ExtArgs>>): Prisma__FacebookEventClient<$Result.GetResult<Prisma.$FacebookEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FacebookEngagementBottom model
   */
  interface FacebookEngagementBottomFieldRefs {
    readonly facebookEventId: FieldRef<"FacebookEngagementBottom", 'String'>
    readonly adId: FieldRef<"FacebookEngagementBottom", 'String'>
    readonly campaignId: FieldRef<"FacebookEngagementBottom", 'String'>
    readonly clickPosition: FieldRef<"FacebookEngagementBottom", 'String'>
    readonly device: FieldRef<"FacebookEngagementBottom", 'String'>
    readonly browser: FieldRef<"FacebookEngagementBottom", 'String'>
    readonly purchaseAmount: FieldRef<"FacebookEngagementBottom", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * FacebookEngagementBottom findUnique
   */
  export type FacebookEngagementBottomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEngagementBottom
     */
    select?: FacebookEngagementBottomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEngagementBottom
     */
    omit?: FacebookEngagementBottomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEngagementBottomInclude<ExtArgs> | null
    /**
     * Filter, which FacebookEngagementBottom to fetch.
     */
    where: FacebookEngagementBottomWhereUniqueInput
  }

  /**
   * FacebookEngagementBottom findUniqueOrThrow
   */
  export type FacebookEngagementBottomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEngagementBottom
     */
    select?: FacebookEngagementBottomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEngagementBottom
     */
    omit?: FacebookEngagementBottomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEngagementBottomInclude<ExtArgs> | null
    /**
     * Filter, which FacebookEngagementBottom to fetch.
     */
    where: FacebookEngagementBottomWhereUniqueInput
  }

  /**
   * FacebookEngagementBottom findFirst
   */
  export type FacebookEngagementBottomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEngagementBottom
     */
    select?: FacebookEngagementBottomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEngagementBottom
     */
    omit?: FacebookEngagementBottomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEngagementBottomInclude<ExtArgs> | null
    /**
     * Filter, which FacebookEngagementBottom to fetch.
     */
    where?: FacebookEngagementBottomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacebookEngagementBottoms to fetch.
     */
    orderBy?: FacebookEngagementBottomOrderByWithRelationInput | FacebookEngagementBottomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacebookEngagementBottoms.
     */
    cursor?: FacebookEngagementBottomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacebookEngagementBottoms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacebookEngagementBottoms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacebookEngagementBottoms.
     */
    distinct?: FacebookEngagementBottomScalarFieldEnum | FacebookEngagementBottomScalarFieldEnum[]
  }

  /**
   * FacebookEngagementBottom findFirstOrThrow
   */
  export type FacebookEngagementBottomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEngagementBottom
     */
    select?: FacebookEngagementBottomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEngagementBottom
     */
    omit?: FacebookEngagementBottomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEngagementBottomInclude<ExtArgs> | null
    /**
     * Filter, which FacebookEngagementBottom to fetch.
     */
    where?: FacebookEngagementBottomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacebookEngagementBottoms to fetch.
     */
    orderBy?: FacebookEngagementBottomOrderByWithRelationInput | FacebookEngagementBottomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacebookEngagementBottoms.
     */
    cursor?: FacebookEngagementBottomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacebookEngagementBottoms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacebookEngagementBottoms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacebookEngagementBottoms.
     */
    distinct?: FacebookEngagementBottomScalarFieldEnum | FacebookEngagementBottomScalarFieldEnum[]
  }

  /**
   * FacebookEngagementBottom findMany
   */
  export type FacebookEngagementBottomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEngagementBottom
     */
    select?: FacebookEngagementBottomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEngagementBottom
     */
    omit?: FacebookEngagementBottomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEngagementBottomInclude<ExtArgs> | null
    /**
     * Filter, which FacebookEngagementBottoms to fetch.
     */
    where?: FacebookEngagementBottomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacebookEngagementBottoms to fetch.
     */
    orderBy?: FacebookEngagementBottomOrderByWithRelationInput | FacebookEngagementBottomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FacebookEngagementBottoms.
     */
    cursor?: FacebookEngagementBottomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacebookEngagementBottoms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacebookEngagementBottoms.
     */
    skip?: number
    distinct?: FacebookEngagementBottomScalarFieldEnum | FacebookEngagementBottomScalarFieldEnum[]
  }

  /**
   * FacebookEngagementBottom create
   */
  export type FacebookEngagementBottomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEngagementBottom
     */
    select?: FacebookEngagementBottomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEngagementBottom
     */
    omit?: FacebookEngagementBottomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEngagementBottomInclude<ExtArgs> | null
    /**
     * The data needed to create a FacebookEngagementBottom.
     */
    data: XOR<FacebookEngagementBottomCreateInput, FacebookEngagementBottomUncheckedCreateInput>
  }

  /**
   * FacebookEngagementBottom createMany
   */
  export type FacebookEngagementBottomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FacebookEngagementBottoms.
     */
    data: FacebookEngagementBottomCreateManyInput | FacebookEngagementBottomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FacebookEngagementBottom createManyAndReturn
   */
  export type FacebookEngagementBottomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEngagementBottom
     */
    select?: FacebookEngagementBottomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEngagementBottom
     */
    omit?: FacebookEngagementBottomOmit<ExtArgs> | null
    /**
     * The data used to create many FacebookEngagementBottoms.
     */
    data: FacebookEngagementBottomCreateManyInput | FacebookEngagementBottomCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEngagementBottomIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FacebookEngagementBottom update
   */
  export type FacebookEngagementBottomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEngagementBottom
     */
    select?: FacebookEngagementBottomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEngagementBottom
     */
    omit?: FacebookEngagementBottomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEngagementBottomInclude<ExtArgs> | null
    /**
     * The data needed to update a FacebookEngagementBottom.
     */
    data: XOR<FacebookEngagementBottomUpdateInput, FacebookEngagementBottomUncheckedUpdateInput>
    /**
     * Choose, which FacebookEngagementBottom to update.
     */
    where: FacebookEngagementBottomWhereUniqueInput
  }

  /**
   * FacebookEngagementBottom updateMany
   */
  export type FacebookEngagementBottomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FacebookEngagementBottoms.
     */
    data: XOR<FacebookEngagementBottomUpdateManyMutationInput, FacebookEngagementBottomUncheckedUpdateManyInput>
    /**
     * Filter which FacebookEngagementBottoms to update
     */
    where?: FacebookEngagementBottomWhereInput
    /**
     * Limit how many FacebookEngagementBottoms to update.
     */
    limit?: number
  }

  /**
   * FacebookEngagementBottom updateManyAndReturn
   */
  export type FacebookEngagementBottomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEngagementBottom
     */
    select?: FacebookEngagementBottomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEngagementBottom
     */
    omit?: FacebookEngagementBottomOmit<ExtArgs> | null
    /**
     * The data used to update FacebookEngagementBottoms.
     */
    data: XOR<FacebookEngagementBottomUpdateManyMutationInput, FacebookEngagementBottomUncheckedUpdateManyInput>
    /**
     * Filter which FacebookEngagementBottoms to update
     */
    where?: FacebookEngagementBottomWhereInput
    /**
     * Limit how many FacebookEngagementBottoms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEngagementBottomIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FacebookEngagementBottom upsert
   */
  export type FacebookEngagementBottomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEngagementBottom
     */
    select?: FacebookEngagementBottomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEngagementBottom
     */
    omit?: FacebookEngagementBottomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEngagementBottomInclude<ExtArgs> | null
    /**
     * The filter to search for the FacebookEngagementBottom to update in case it exists.
     */
    where: FacebookEngagementBottomWhereUniqueInput
    /**
     * In case the FacebookEngagementBottom found by the `where` argument doesn't exist, create a new FacebookEngagementBottom with this data.
     */
    create: XOR<FacebookEngagementBottomCreateInput, FacebookEngagementBottomUncheckedCreateInput>
    /**
     * In case the FacebookEngagementBottom was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FacebookEngagementBottomUpdateInput, FacebookEngagementBottomUncheckedUpdateInput>
  }

  /**
   * FacebookEngagementBottom delete
   */
  export type FacebookEngagementBottomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEngagementBottom
     */
    select?: FacebookEngagementBottomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEngagementBottom
     */
    omit?: FacebookEngagementBottomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEngagementBottomInclude<ExtArgs> | null
    /**
     * Filter which FacebookEngagementBottom to delete.
     */
    where: FacebookEngagementBottomWhereUniqueInput
  }

  /**
   * FacebookEngagementBottom deleteMany
   */
  export type FacebookEngagementBottomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacebookEngagementBottoms to delete
     */
    where?: FacebookEngagementBottomWhereInput
    /**
     * Limit how many FacebookEngagementBottoms to delete.
     */
    limit?: number
  }

  /**
   * FacebookEngagementBottom without action
   */
  export type FacebookEngagementBottomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEngagementBottom
     */
    select?: FacebookEngagementBottomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEngagementBottom
     */
    omit?: FacebookEngagementBottomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEngagementBottomInclude<ExtArgs> | null
  }


  /**
   * Model TiktokUser
   */

  export type AggregateTiktokUser = {
    _count: TiktokUserCountAggregateOutputType | null
    _avg: TiktokUserAvgAggregateOutputType | null
    _sum: TiktokUserSumAggregateOutputType | null
    _min: TiktokUserMinAggregateOutputType | null
    _max: TiktokUserMaxAggregateOutputType | null
  }

  export type TiktokUserAvgAggregateOutputType = {
    followers: number | null
  }

  export type TiktokUserSumAggregateOutputType = {
    followers: number | null
  }

  export type TiktokUserMinAggregateOutputType = {
    userId: string | null
    username: string | null
    followers: number | null
  }

  export type TiktokUserMaxAggregateOutputType = {
    userId: string | null
    username: string | null
    followers: number | null
  }

  export type TiktokUserCountAggregateOutputType = {
    userId: number
    username: number
    followers: number
    _all: number
  }


  export type TiktokUserAvgAggregateInputType = {
    followers?: true
  }

  export type TiktokUserSumAggregateInputType = {
    followers?: true
  }

  export type TiktokUserMinAggregateInputType = {
    userId?: true
    username?: true
    followers?: true
  }

  export type TiktokUserMaxAggregateInputType = {
    userId?: true
    username?: true
    followers?: true
  }

  export type TiktokUserCountAggregateInputType = {
    userId?: true
    username?: true
    followers?: true
    _all?: true
  }

  export type TiktokUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TiktokUser to aggregate.
     */
    where?: TiktokUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TiktokUsers to fetch.
     */
    orderBy?: TiktokUserOrderByWithRelationInput | TiktokUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TiktokUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TiktokUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TiktokUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TiktokUsers
    **/
    _count?: true | TiktokUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TiktokUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TiktokUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TiktokUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TiktokUserMaxAggregateInputType
  }

  export type GetTiktokUserAggregateType<T extends TiktokUserAggregateArgs> = {
        [P in keyof T & keyof AggregateTiktokUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTiktokUser[P]>
      : GetScalarType<T[P], AggregateTiktokUser[P]>
  }




  export type TiktokUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TiktokUserWhereInput
    orderBy?: TiktokUserOrderByWithAggregationInput | TiktokUserOrderByWithAggregationInput[]
    by: TiktokUserScalarFieldEnum[] | TiktokUserScalarFieldEnum
    having?: TiktokUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TiktokUserCountAggregateInputType | true
    _avg?: TiktokUserAvgAggregateInputType
    _sum?: TiktokUserSumAggregateInputType
    _min?: TiktokUserMinAggregateInputType
    _max?: TiktokUserMaxAggregateInputType
  }

  export type TiktokUserGroupByOutputType = {
    userId: string
    username: string
    followers: number
    _count: TiktokUserCountAggregateOutputType | null
    _avg: TiktokUserAvgAggregateOutputType | null
    _sum: TiktokUserSumAggregateOutputType | null
    _min: TiktokUserMinAggregateOutputType | null
    _max: TiktokUserMaxAggregateOutputType | null
  }

  type GetTiktokUserGroupByPayload<T extends TiktokUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TiktokUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TiktokUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TiktokUserGroupByOutputType[P]>
            : GetScalarType<T[P], TiktokUserGroupByOutputType[P]>
        }
      >
    >


  export type TiktokUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    username?: boolean
    followers?: boolean
    events?: boolean | TiktokUser$eventsArgs<ExtArgs>
    _count?: boolean | TiktokUserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tiktokUser"]>

  export type TiktokUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    username?: boolean
    followers?: boolean
  }, ExtArgs["result"]["tiktokUser"]>

  export type TiktokUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    username?: boolean
    followers?: boolean
  }, ExtArgs["result"]["tiktokUser"]>

  export type TiktokUserSelectScalar = {
    userId?: boolean
    username?: boolean
    followers?: boolean
  }

  export type TiktokUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "username" | "followers", ExtArgs["result"]["tiktokUser"]>
  export type TiktokUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | TiktokUser$eventsArgs<ExtArgs>
    _count?: boolean | TiktokUserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TiktokUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TiktokUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TiktokUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TiktokUser"
    objects: {
      events: Prisma.$TiktokEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      username: string
      followers: number
    }, ExtArgs["result"]["tiktokUser"]>
    composites: {}
  }

  type TiktokUserGetPayload<S extends boolean | null | undefined | TiktokUserDefaultArgs> = $Result.GetResult<Prisma.$TiktokUserPayload, S>

  type TiktokUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TiktokUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TiktokUserCountAggregateInputType | true
    }

  export interface TiktokUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TiktokUser'], meta: { name: 'TiktokUser' } }
    /**
     * Find zero or one TiktokUser that matches the filter.
     * @param {TiktokUserFindUniqueArgs} args - Arguments to find a TiktokUser
     * @example
     * // Get one TiktokUser
     * const tiktokUser = await prisma.tiktokUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TiktokUserFindUniqueArgs>(args: SelectSubset<T, TiktokUserFindUniqueArgs<ExtArgs>>): Prisma__TiktokUserClient<$Result.GetResult<Prisma.$TiktokUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TiktokUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TiktokUserFindUniqueOrThrowArgs} args - Arguments to find a TiktokUser
     * @example
     * // Get one TiktokUser
     * const tiktokUser = await prisma.tiktokUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TiktokUserFindUniqueOrThrowArgs>(args: SelectSubset<T, TiktokUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TiktokUserClient<$Result.GetResult<Prisma.$TiktokUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TiktokUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokUserFindFirstArgs} args - Arguments to find a TiktokUser
     * @example
     * // Get one TiktokUser
     * const tiktokUser = await prisma.tiktokUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TiktokUserFindFirstArgs>(args?: SelectSubset<T, TiktokUserFindFirstArgs<ExtArgs>>): Prisma__TiktokUserClient<$Result.GetResult<Prisma.$TiktokUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TiktokUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokUserFindFirstOrThrowArgs} args - Arguments to find a TiktokUser
     * @example
     * // Get one TiktokUser
     * const tiktokUser = await prisma.tiktokUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TiktokUserFindFirstOrThrowArgs>(args?: SelectSubset<T, TiktokUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__TiktokUserClient<$Result.GetResult<Prisma.$TiktokUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TiktokUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TiktokUsers
     * const tiktokUsers = await prisma.tiktokUser.findMany()
     * 
     * // Get first 10 TiktokUsers
     * const tiktokUsers = await prisma.tiktokUser.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const tiktokUserWithUserIdOnly = await prisma.tiktokUser.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends TiktokUserFindManyArgs>(args?: SelectSubset<T, TiktokUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TiktokUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TiktokUser.
     * @param {TiktokUserCreateArgs} args - Arguments to create a TiktokUser.
     * @example
     * // Create one TiktokUser
     * const TiktokUser = await prisma.tiktokUser.create({
     *   data: {
     *     // ... data to create a TiktokUser
     *   }
     * })
     * 
     */
    create<T extends TiktokUserCreateArgs>(args: SelectSubset<T, TiktokUserCreateArgs<ExtArgs>>): Prisma__TiktokUserClient<$Result.GetResult<Prisma.$TiktokUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TiktokUsers.
     * @param {TiktokUserCreateManyArgs} args - Arguments to create many TiktokUsers.
     * @example
     * // Create many TiktokUsers
     * const tiktokUser = await prisma.tiktokUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TiktokUserCreateManyArgs>(args?: SelectSubset<T, TiktokUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TiktokUsers and returns the data saved in the database.
     * @param {TiktokUserCreateManyAndReturnArgs} args - Arguments to create many TiktokUsers.
     * @example
     * // Create many TiktokUsers
     * const tiktokUser = await prisma.tiktokUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TiktokUsers and only return the `userId`
     * const tiktokUserWithUserIdOnly = await prisma.tiktokUser.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TiktokUserCreateManyAndReturnArgs>(args?: SelectSubset<T, TiktokUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TiktokUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TiktokUser.
     * @param {TiktokUserDeleteArgs} args - Arguments to delete one TiktokUser.
     * @example
     * // Delete one TiktokUser
     * const TiktokUser = await prisma.tiktokUser.delete({
     *   where: {
     *     // ... filter to delete one TiktokUser
     *   }
     * })
     * 
     */
    delete<T extends TiktokUserDeleteArgs>(args: SelectSubset<T, TiktokUserDeleteArgs<ExtArgs>>): Prisma__TiktokUserClient<$Result.GetResult<Prisma.$TiktokUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TiktokUser.
     * @param {TiktokUserUpdateArgs} args - Arguments to update one TiktokUser.
     * @example
     * // Update one TiktokUser
     * const tiktokUser = await prisma.tiktokUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TiktokUserUpdateArgs>(args: SelectSubset<T, TiktokUserUpdateArgs<ExtArgs>>): Prisma__TiktokUserClient<$Result.GetResult<Prisma.$TiktokUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TiktokUsers.
     * @param {TiktokUserDeleteManyArgs} args - Arguments to filter TiktokUsers to delete.
     * @example
     * // Delete a few TiktokUsers
     * const { count } = await prisma.tiktokUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TiktokUserDeleteManyArgs>(args?: SelectSubset<T, TiktokUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TiktokUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TiktokUsers
     * const tiktokUser = await prisma.tiktokUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TiktokUserUpdateManyArgs>(args: SelectSubset<T, TiktokUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TiktokUsers and returns the data updated in the database.
     * @param {TiktokUserUpdateManyAndReturnArgs} args - Arguments to update many TiktokUsers.
     * @example
     * // Update many TiktokUsers
     * const tiktokUser = await prisma.tiktokUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TiktokUsers and only return the `userId`
     * const tiktokUserWithUserIdOnly = await prisma.tiktokUser.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TiktokUserUpdateManyAndReturnArgs>(args: SelectSubset<T, TiktokUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TiktokUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TiktokUser.
     * @param {TiktokUserUpsertArgs} args - Arguments to update or create a TiktokUser.
     * @example
     * // Update or create a TiktokUser
     * const tiktokUser = await prisma.tiktokUser.upsert({
     *   create: {
     *     // ... data to create a TiktokUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TiktokUser we want to update
     *   }
     * })
     */
    upsert<T extends TiktokUserUpsertArgs>(args: SelectSubset<T, TiktokUserUpsertArgs<ExtArgs>>): Prisma__TiktokUserClient<$Result.GetResult<Prisma.$TiktokUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TiktokUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokUserCountArgs} args - Arguments to filter TiktokUsers to count.
     * @example
     * // Count the number of TiktokUsers
     * const count = await prisma.tiktokUser.count({
     *   where: {
     *     // ... the filter for the TiktokUsers we want to count
     *   }
     * })
    **/
    count<T extends TiktokUserCountArgs>(
      args?: Subset<T, TiktokUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TiktokUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TiktokUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TiktokUserAggregateArgs>(args: Subset<T, TiktokUserAggregateArgs>): Prisma.PrismaPromise<GetTiktokUserAggregateType<T>>

    /**
     * Group by TiktokUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TiktokUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TiktokUserGroupByArgs['orderBy'] }
        : { orderBy?: TiktokUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TiktokUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTiktokUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TiktokUser model
   */
  readonly fields: TiktokUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TiktokUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TiktokUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    events<T extends TiktokUser$eventsArgs<ExtArgs> = {}>(args?: Subset<T, TiktokUser$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TiktokEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TiktokUser model
   */
  interface TiktokUserFieldRefs {
    readonly userId: FieldRef<"TiktokUser", 'String'>
    readonly username: FieldRef<"TiktokUser", 'String'>
    readonly followers: FieldRef<"TiktokUser", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TiktokUser findUnique
   */
  export type TiktokUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokUser
     */
    select?: TiktokUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokUser
     */
    omit?: TiktokUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokUserInclude<ExtArgs> | null
    /**
     * Filter, which TiktokUser to fetch.
     */
    where: TiktokUserWhereUniqueInput
  }

  /**
   * TiktokUser findUniqueOrThrow
   */
  export type TiktokUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokUser
     */
    select?: TiktokUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokUser
     */
    omit?: TiktokUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokUserInclude<ExtArgs> | null
    /**
     * Filter, which TiktokUser to fetch.
     */
    where: TiktokUserWhereUniqueInput
  }

  /**
   * TiktokUser findFirst
   */
  export type TiktokUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokUser
     */
    select?: TiktokUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokUser
     */
    omit?: TiktokUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokUserInclude<ExtArgs> | null
    /**
     * Filter, which TiktokUser to fetch.
     */
    where?: TiktokUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TiktokUsers to fetch.
     */
    orderBy?: TiktokUserOrderByWithRelationInput | TiktokUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TiktokUsers.
     */
    cursor?: TiktokUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TiktokUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TiktokUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TiktokUsers.
     */
    distinct?: TiktokUserScalarFieldEnum | TiktokUserScalarFieldEnum[]
  }

  /**
   * TiktokUser findFirstOrThrow
   */
  export type TiktokUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokUser
     */
    select?: TiktokUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokUser
     */
    omit?: TiktokUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokUserInclude<ExtArgs> | null
    /**
     * Filter, which TiktokUser to fetch.
     */
    where?: TiktokUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TiktokUsers to fetch.
     */
    orderBy?: TiktokUserOrderByWithRelationInput | TiktokUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TiktokUsers.
     */
    cursor?: TiktokUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TiktokUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TiktokUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TiktokUsers.
     */
    distinct?: TiktokUserScalarFieldEnum | TiktokUserScalarFieldEnum[]
  }

  /**
   * TiktokUser findMany
   */
  export type TiktokUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokUser
     */
    select?: TiktokUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokUser
     */
    omit?: TiktokUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokUserInclude<ExtArgs> | null
    /**
     * Filter, which TiktokUsers to fetch.
     */
    where?: TiktokUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TiktokUsers to fetch.
     */
    orderBy?: TiktokUserOrderByWithRelationInput | TiktokUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TiktokUsers.
     */
    cursor?: TiktokUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TiktokUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TiktokUsers.
     */
    skip?: number
    distinct?: TiktokUserScalarFieldEnum | TiktokUserScalarFieldEnum[]
  }

  /**
   * TiktokUser create
   */
  export type TiktokUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokUser
     */
    select?: TiktokUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokUser
     */
    omit?: TiktokUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokUserInclude<ExtArgs> | null
    /**
     * The data needed to create a TiktokUser.
     */
    data: XOR<TiktokUserCreateInput, TiktokUserUncheckedCreateInput>
  }

  /**
   * TiktokUser createMany
   */
  export type TiktokUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TiktokUsers.
     */
    data: TiktokUserCreateManyInput | TiktokUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TiktokUser createManyAndReturn
   */
  export type TiktokUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokUser
     */
    select?: TiktokUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokUser
     */
    omit?: TiktokUserOmit<ExtArgs> | null
    /**
     * The data used to create many TiktokUsers.
     */
    data: TiktokUserCreateManyInput | TiktokUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TiktokUser update
   */
  export type TiktokUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokUser
     */
    select?: TiktokUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokUser
     */
    omit?: TiktokUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokUserInclude<ExtArgs> | null
    /**
     * The data needed to update a TiktokUser.
     */
    data: XOR<TiktokUserUpdateInput, TiktokUserUncheckedUpdateInput>
    /**
     * Choose, which TiktokUser to update.
     */
    where: TiktokUserWhereUniqueInput
  }

  /**
   * TiktokUser updateMany
   */
  export type TiktokUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TiktokUsers.
     */
    data: XOR<TiktokUserUpdateManyMutationInput, TiktokUserUncheckedUpdateManyInput>
    /**
     * Filter which TiktokUsers to update
     */
    where?: TiktokUserWhereInput
    /**
     * Limit how many TiktokUsers to update.
     */
    limit?: number
  }

  /**
   * TiktokUser updateManyAndReturn
   */
  export type TiktokUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokUser
     */
    select?: TiktokUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokUser
     */
    omit?: TiktokUserOmit<ExtArgs> | null
    /**
     * The data used to update TiktokUsers.
     */
    data: XOR<TiktokUserUpdateManyMutationInput, TiktokUserUncheckedUpdateManyInput>
    /**
     * Filter which TiktokUsers to update
     */
    where?: TiktokUserWhereInput
    /**
     * Limit how many TiktokUsers to update.
     */
    limit?: number
  }

  /**
   * TiktokUser upsert
   */
  export type TiktokUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokUser
     */
    select?: TiktokUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokUser
     */
    omit?: TiktokUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokUserInclude<ExtArgs> | null
    /**
     * The filter to search for the TiktokUser to update in case it exists.
     */
    where: TiktokUserWhereUniqueInput
    /**
     * In case the TiktokUser found by the `where` argument doesn't exist, create a new TiktokUser with this data.
     */
    create: XOR<TiktokUserCreateInput, TiktokUserUncheckedCreateInput>
    /**
     * In case the TiktokUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TiktokUserUpdateInput, TiktokUserUncheckedUpdateInput>
  }

  /**
   * TiktokUser delete
   */
  export type TiktokUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokUser
     */
    select?: TiktokUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokUser
     */
    omit?: TiktokUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokUserInclude<ExtArgs> | null
    /**
     * Filter which TiktokUser to delete.
     */
    where: TiktokUserWhereUniqueInput
  }

  /**
   * TiktokUser deleteMany
   */
  export type TiktokUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TiktokUsers to delete
     */
    where?: TiktokUserWhereInput
    /**
     * Limit how many TiktokUsers to delete.
     */
    limit?: number
  }

  /**
   * TiktokUser.events
   */
  export type TiktokUser$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokEvent
     */
    select?: TiktokEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokEvent
     */
    omit?: TiktokEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokEventInclude<ExtArgs> | null
    where?: TiktokEventWhereInput
    orderBy?: TiktokEventOrderByWithRelationInput | TiktokEventOrderByWithRelationInput[]
    cursor?: TiktokEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TiktokEventScalarFieldEnum | TiktokEventScalarFieldEnum[]
  }

  /**
   * TiktokUser without action
   */
  export type TiktokUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokUser
     */
    select?: TiktokUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokUser
     */
    omit?: TiktokUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokUserInclude<ExtArgs> | null
  }


  /**
   * Model TiktokEvent
   */

  export type AggregateTiktokEvent = {
    _count: TiktokEventCountAggregateOutputType | null
    _min: TiktokEventMinAggregateOutputType | null
    _max: TiktokEventMaxAggregateOutputType | null
  }

  export type TiktokEventMinAggregateOutputType = {
    eventId: string | null
    timestamp: Date | null
    funnelStage: string | null
    eventType: string | null
    userId: string | null
  }

  export type TiktokEventMaxAggregateOutputType = {
    eventId: string | null
    timestamp: Date | null
    funnelStage: string | null
    eventType: string | null
    userId: string | null
  }

  export type TiktokEventCountAggregateOutputType = {
    eventId: number
    timestamp: number
    funnelStage: number
    eventType: number
    userId: number
    _all: number
  }


  export type TiktokEventMinAggregateInputType = {
    eventId?: true
    timestamp?: true
    funnelStage?: true
    eventType?: true
    userId?: true
  }

  export type TiktokEventMaxAggregateInputType = {
    eventId?: true
    timestamp?: true
    funnelStage?: true
    eventType?: true
    userId?: true
  }

  export type TiktokEventCountAggregateInputType = {
    eventId?: true
    timestamp?: true
    funnelStage?: true
    eventType?: true
    userId?: true
    _all?: true
  }

  export type TiktokEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TiktokEvent to aggregate.
     */
    where?: TiktokEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TiktokEvents to fetch.
     */
    orderBy?: TiktokEventOrderByWithRelationInput | TiktokEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TiktokEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TiktokEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TiktokEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TiktokEvents
    **/
    _count?: true | TiktokEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TiktokEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TiktokEventMaxAggregateInputType
  }

  export type GetTiktokEventAggregateType<T extends TiktokEventAggregateArgs> = {
        [P in keyof T & keyof AggregateTiktokEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTiktokEvent[P]>
      : GetScalarType<T[P], AggregateTiktokEvent[P]>
  }




  export type TiktokEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TiktokEventWhereInput
    orderBy?: TiktokEventOrderByWithAggregationInput | TiktokEventOrderByWithAggregationInput[]
    by: TiktokEventScalarFieldEnum[] | TiktokEventScalarFieldEnum
    having?: TiktokEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TiktokEventCountAggregateInputType | true
    _min?: TiktokEventMinAggregateInputType
    _max?: TiktokEventMaxAggregateInputType
  }

  export type TiktokEventGroupByOutputType = {
    eventId: string
    timestamp: Date
    funnelStage: string
    eventType: string
    userId: string
    _count: TiktokEventCountAggregateOutputType | null
    _min: TiktokEventMinAggregateOutputType | null
    _max: TiktokEventMaxAggregateOutputType | null
  }

  type GetTiktokEventGroupByPayload<T extends TiktokEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TiktokEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TiktokEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TiktokEventGroupByOutputType[P]>
            : GetScalarType<T[P], TiktokEventGroupByOutputType[P]>
        }
      >
    >


  export type TiktokEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    eventId?: boolean
    timestamp?: boolean
    funnelStage?: boolean
    eventType?: boolean
    userId?: boolean
    user?: boolean | TiktokUserDefaultArgs<ExtArgs>
    engagementTop?: boolean | TiktokEvent$engagementTopArgs<ExtArgs>
    engagementBottom?: boolean | TiktokEvent$engagementBottomArgs<ExtArgs>
  }, ExtArgs["result"]["tiktokEvent"]>

  export type TiktokEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    eventId?: boolean
    timestamp?: boolean
    funnelStage?: boolean
    eventType?: boolean
    userId?: boolean
    user?: boolean | TiktokUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tiktokEvent"]>

  export type TiktokEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    eventId?: boolean
    timestamp?: boolean
    funnelStage?: boolean
    eventType?: boolean
    userId?: boolean
    user?: boolean | TiktokUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tiktokEvent"]>

  export type TiktokEventSelectScalar = {
    eventId?: boolean
    timestamp?: boolean
    funnelStage?: boolean
    eventType?: boolean
    userId?: boolean
  }

  export type TiktokEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"eventId" | "timestamp" | "funnelStage" | "eventType" | "userId", ExtArgs["result"]["tiktokEvent"]>
  export type TiktokEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | TiktokUserDefaultArgs<ExtArgs>
    engagementTop?: boolean | TiktokEvent$engagementTopArgs<ExtArgs>
    engagementBottom?: boolean | TiktokEvent$engagementBottomArgs<ExtArgs>
  }
  export type TiktokEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | TiktokUserDefaultArgs<ExtArgs>
  }
  export type TiktokEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | TiktokUserDefaultArgs<ExtArgs>
  }

  export type $TiktokEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TiktokEvent"
    objects: {
      user: Prisma.$TiktokUserPayload<ExtArgs>
      engagementTop: Prisma.$TiktokEngagementTopPayload<ExtArgs> | null
      engagementBottom: Prisma.$TiktokEngagementBottomPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      eventId: string
      timestamp: Date
      funnelStage: string
      eventType: string
      userId: string
    }, ExtArgs["result"]["tiktokEvent"]>
    composites: {}
  }

  type TiktokEventGetPayload<S extends boolean | null | undefined | TiktokEventDefaultArgs> = $Result.GetResult<Prisma.$TiktokEventPayload, S>

  type TiktokEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TiktokEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TiktokEventCountAggregateInputType | true
    }

  export interface TiktokEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TiktokEvent'], meta: { name: 'TiktokEvent' } }
    /**
     * Find zero or one TiktokEvent that matches the filter.
     * @param {TiktokEventFindUniqueArgs} args - Arguments to find a TiktokEvent
     * @example
     * // Get one TiktokEvent
     * const tiktokEvent = await prisma.tiktokEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TiktokEventFindUniqueArgs>(args: SelectSubset<T, TiktokEventFindUniqueArgs<ExtArgs>>): Prisma__TiktokEventClient<$Result.GetResult<Prisma.$TiktokEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TiktokEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TiktokEventFindUniqueOrThrowArgs} args - Arguments to find a TiktokEvent
     * @example
     * // Get one TiktokEvent
     * const tiktokEvent = await prisma.tiktokEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TiktokEventFindUniqueOrThrowArgs>(args: SelectSubset<T, TiktokEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TiktokEventClient<$Result.GetResult<Prisma.$TiktokEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TiktokEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokEventFindFirstArgs} args - Arguments to find a TiktokEvent
     * @example
     * // Get one TiktokEvent
     * const tiktokEvent = await prisma.tiktokEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TiktokEventFindFirstArgs>(args?: SelectSubset<T, TiktokEventFindFirstArgs<ExtArgs>>): Prisma__TiktokEventClient<$Result.GetResult<Prisma.$TiktokEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TiktokEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokEventFindFirstOrThrowArgs} args - Arguments to find a TiktokEvent
     * @example
     * // Get one TiktokEvent
     * const tiktokEvent = await prisma.tiktokEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TiktokEventFindFirstOrThrowArgs>(args?: SelectSubset<T, TiktokEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__TiktokEventClient<$Result.GetResult<Prisma.$TiktokEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TiktokEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TiktokEvents
     * const tiktokEvents = await prisma.tiktokEvent.findMany()
     * 
     * // Get first 10 TiktokEvents
     * const tiktokEvents = await prisma.tiktokEvent.findMany({ take: 10 })
     * 
     * // Only select the `eventId`
     * const tiktokEventWithEventIdOnly = await prisma.tiktokEvent.findMany({ select: { eventId: true } })
     * 
     */
    findMany<T extends TiktokEventFindManyArgs>(args?: SelectSubset<T, TiktokEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TiktokEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TiktokEvent.
     * @param {TiktokEventCreateArgs} args - Arguments to create a TiktokEvent.
     * @example
     * // Create one TiktokEvent
     * const TiktokEvent = await prisma.tiktokEvent.create({
     *   data: {
     *     // ... data to create a TiktokEvent
     *   }
     * })
     * 
     */
    create<T extends TiktokEventCreateArgs>(args: SelectSubset<T, TiktokEventCreateArgs<ExtArgs>>): Prisma__TiktokEventClient<$Result.GetResult<Prisma.$TiktokEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TiktokEvents.
     * @param {TiktokEventCreateManyArgs} args - Arguments to create many TiktokEvents.
     * @example
     * // Create many TiktokEvents
     * const tiktokEvent = await prisma.tiktokEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TiktokEventCreateManyArgs>(args?: SelectSubset<T, TiktokEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TiktokEvents and returns the data saved in the database.
     * @param {TiktokEventCreateManyAndReturnArgs} args - Arguments to create many TiktokEvents.
     * @example
     * // Create many TiktokEvents
     * const tiktokEvent = await prisma.tiktokEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TiktokEvents and only return the `eventId`
     * const tiktokEventWithEventIdOnly = await prisma.tiktokEvent.createManyAndReturn({
     *   select: { eventId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TiktokEventCreateManyAndReturnArgs>(args?: SelectSubset<T, TiktokEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TiktokEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TiktokEvent.
     * @param {TiktokEventDeleteArgs} args - Arguments to delete one TiktokEvent.
     * @example
     * // Delete one TiktokEvent
     * const TiktokEvent = await prisma.tiktokEvent.delete({
     *   where: {
     *     // ... filter to delete one TiktokEvent
     *   }
     * })
     * 
     */
    delete<T extends TiktokEventDeleteArgs>(args: SelectSubset<T, TiktokEventDeleteArgs<ExtArgs>>): Prisma__TiktokEventClient<$Result.GetResult<Prisma.$TiktokEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TiktokEvent.
     * @param {TiktokEventUpdateArgs} args - Arguments to update one TiktokEvent.
     * @example
     * // Update one TiktokEvent
     * const tiktokEvent = await prisma.tiktokEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TiktokEventUpdateArgs>(args: SelectSubset<T, TiktokEventUpdateArgs<ExtArgs>>): Prisma__TiktokEventClient<$Result.GetResult<Prisma.$TiktokEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TiktokEvents.
     * @param {TiktokEventDeleteManyArgs} args - Arguments to filter TiktokEvents to delete.
     * @example
     * // Delete a few TiktokEvents
     * const { count } = await prisma.tiktokEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TiktokEventDeleteManyArgs>(args?: SelectSubset<T, TiktokEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TiktokEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TiktokEvents
     * const tiktokEvent = await prisma.tiktokEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TiktokEventUpdateManyArgs>(args: SelectSubset<T, TiktokEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TiktokEvents and returns the data updated in the database.
     * @param {TiktokEventUpdateManyAndReturnArgs} args - Arguments to update many TiktokEvents.
     * @example
     * // Update many TiktokEvents
     * const tiktokEvent = await prisma.tiktokEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TiktokEvents and only return the `eventId`
     * const tiktokEventWithEventIdOnly = await prisma.tiktokEvent.updateManyAndReturn({
     *   select: { eventId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TiktokEventUpdateManyAndReturnArgs>(args: SelectSubset<T, TiktokEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TiktokEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TiktokEvent.
     * @param {TiktokEventUpsertArgs} args - Arguments to update or create a TiktokEvent.
     * @example
     * // Update or create a TiktokEvent
     * const tiktokEvent = await prisma.tiktokEvent.upsert({
     *   create: {
     *     // ... data to create a TiktokEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TiktokEvent we want to update
     *   }
     * })
     */
    upsert<T extends TiktokEventUpsertArgs>(args: SelectSubset<T, TiktokEventUpsertArgs<ExtArgs>>): Prisma__TiktokEventClient<$Result.GetResult<Prisma.$TiktokEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TiktokEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokEventCountArgs} args - Arguments to filter TiktokEvents to count.
     * @example
     * // Count the number of TiktokEvents
     * const count = await prisma.tiktokEvent.count({
     *   where: {
     *     // ... the filter for the TiktokEvents we want to count
     *   }
     * })
    **/
    count<T extends TiktokEventCountArgs>(
      args?: Subset<T, TiktokEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TiktokEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TiktokEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TiktokEventAggregateArgs>(args: Subset<T, TiktokEventAggregateArgs>): Prisma.PrismaPromise<GetTiktokEventAggregateType<T>>

    /**
     * Group by TiktokEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TiktokEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TiktokEventGroupByArgs['orderBy'] }
        : { orderBy?: TiktokEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TiktokEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTiktokEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TiktokEvent model
   */
  readonly fields: TiktokEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TiktokEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TiktokEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends TiktokUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TiktokUserDefaultArgs<ExtArgs>>): Prisma__TiktokUserClient<$Result.GetResult<Prisma.$TiktokUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    engagementTop<T extends TiktokEvent$engagementTopArgs<ExtArgs> = {}>(args?: Subset<T, TiktokEvent$engagementTopArgs<ExtArgs>>): Prisma__TiktokEngagementTopClient<$Result.GetResult<Prisma.$TiktokEngagementTopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    engagementBottom<T extends TiktokEvent$engagementBottomArgs<ExtArgs> = {}>(args?: Subset<T, TiktokEvent$engagementBottomArgs<ExtArgs>>): Prisma__TiktokEngagementBottomClient<$Result.GetResult<Prisma.$TiktokEngagementBottomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TiktokEvent model
   */
  interface TiktokEventFieldRefs {
    readonly eventId: FieldRef<"TiktokEvent", 'String'>
    readonly timestamp: FieldRef<"TiktokEvent", 'DateTime'>
    readonly funnelStage: FieldRef<"TiktokEvent", 'String'>
    readonly eventType: FieldRef<"TiktokEvent", 'String'>
    readonly userId: FieldRef<"TiktokEvent", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TiktokEvent findUnique
   */
  export type TiktokEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokEvent
     */
    select?: TiktokEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokEvent
     */
    omit?: TiktokEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokEventInclude<ExtArgs> | null
    /**
     * Filter, which TiktokEvent to fetch.
     */
    where: TiktokEventWhereUniqueInput
  }

  /**
   * TiktokEvent findUniqueOrThrow
   */
  export type TiktokEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokEvent
     */
    select?: TiktokEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokEvent
     */
    omit?: TiktokEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokEventInclude<ExtArgs> | null
    /**
     * Filter, which TiktokEvent to fetch.
     */
    where: TiktokEventWhereUniqueInput
  }

  /**
   * TiktokEvent findFirst
   */
  export type TiktokEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokEvent
     */
    select?: TiktokEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokEvent
     */
    omit?: TiktokEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokEventInclude<ExtArgs> | null
    /**
     * Filter, which TiktokEvent to fetch.
     */
    where?: TiktokEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TiktokEvents to fetch.
     */
    orderBy?: TiktokEventOrderByWithRelationInput | TiktokEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TiktokEvents.
     */
    cursor?: TiktokEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TiktokEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TiktokEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TiktokEvents.
     */
    distinct?: TiktokEventScalarFieldEnum | TiktokEventScalarFieldEnum[]
  }

  /**
   * TiktokEvent findFirstOrThrow
   */
  export type TiktokEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokEvent
     */
    select?: TiktokEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokEvent
     */
    omit?: TiktokEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokEventInclude<ExtArgs> | null
    /**
     * Filter, which TiktokEvent to fetch.
     */
    where?: TiktokEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TiktokEvents to fetch.
     */
    orderBy?: TiktokEventOrderByWithRelationInput | TiktokEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TiktokEvents.
     */
    cursor?: TiktokEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TiktokEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TiktokEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TiktokEvents.
     */
    distinct?: TiktokEventScalarFieldEnum | TiktokEventScalarFieldEnum[]
  }

  /**
   * TiktokEvent findMany
   */
  export type TiktokEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokEvent
     */
    select?: TiktokEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokEvent
     */
    omit?: TiktokEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokEventInclude<ExtArgs> | null
    /**
     * Filter, which TiktokEvents to fetch.
     */
    where?: TiktokEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TiktokEvents to fetch.
     */
    orderBy?: TiktokEventOrderByWithRelationInput | TiktokEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TiktokEvents.
     */
    cursor?: TiktokEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TiktokEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TiktokEvents.
     */
    skip?: number
    distinct?: TiktokEventScalarFieldEnum | TiktokEventScalarFieldEnum[]
  }

  /**
   * TiktokEvent create
   */
  export type TiktokEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokEvent
     */
    select?: TiktokEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokEvent
     */
    omit?: TiktokEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokEventInclude<ExtArgs> | null
    /**
     * The data needed to create a TiktokEvent.
     */
    data: XOR<TiktokEventCreateInput, TiktokEventUncheckedCreateInput>
  }

  /**
   * TiktokEvent createMany
   */
  export type TiktokEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TiktokEvents.
     */
    data: TiktokEventCreateManyInput | TiktokEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TiktokEvent createManyAndReturn
   */
  export type TiktokEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokEvent
     */
    select?: TiktokEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokEvent
     */
    omit?: TiktokEventOmit<ExtArgs> | null
    /**
     * The data used to create many TiktokEvents.
     */
    data: TiktokEventCreateManyInput | TiktokEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TiktokEvent update
   */
  export type TiktokEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokEvent
     */
    select?: TiktokEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokEvent
     */
    omit?: TiktokEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokEventInclude<ExtArgs> | null
    /**
     * The data needed to update a TiktokEvent.
     */
    data: XOR<TiktokEventUpdateInput, TiktokEventUncheckedUpdateInput>
    /**
     * Choose, which TiktokEvent to update.
     */
    where: TiktokEventWhereUniqueInput
  }

  /**
   * TiktokEvent updateMany
   */
  export type TiktokEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TiktokEvents.
     */
    data: XOR<TiktokEventUpdateManyMutationInput, TiktokEventUncheckedUpdateManyInput>
    /**
     * Filter which TiktokEvents to update
     */
    where?: TiktokEventWhereInput
    /**
     * Limit how many TiktokEvents to update.
     */
    limit?: number
  }

  /**
   * TiktokEvent updateManyAndReturn
   */
  export type TiktokEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokEvent
     */
    select?: TiktokEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokEvent
     */
    omit?: TiktokEventOmit<ExtArgs> | null
    /**
     * The data used to update TiktokEvents.
     */
    data: XOR<TiktokEventUpdateManyMutationInput, TiktokEventUncheckedUpdateManyInput>
    /**
     * Filter which TiktokEvents to update
     */
    where?: TiktokEventWhereInput
    /**
     * Limit how many TiktokEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TiktokEvent upsert
   */
  export type TiktokEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokEvent
     */
    select?: TiktokEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokEvent
     */
    omit?: TiktokEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokEventInclude<ExtArgs> | null
    /**
     * The filter to search for the TiktokEvent to update in case it exists.
     */
    where: TiktokEventWhereUniqueInput
    /**
     * In case the TiktokEvent found by the `where` argument doesn't exist, create a new TiktokEvent with this data.
     */
    create: XOR<TiktokEventCreateInput, TiktokEventUncheckedCreateInput>
    /**
     * In case the TiktokEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TiktokEventUpdateInput, TiktokEventUncheckedUpdateInput>
  }

  /**
   * TiktokEvent delete
   */
  export type TiktokEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokEvent
     */
    select?: TiktokEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokEvent
     */
    omit?: TiktokEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokEventInclude<ExtArgs> | null
    /**
     * Filter which TiktokEvent to delete.
     */
    where: TiktokEventWhereUniqueInput
  }

  /**
   * TiktokEvent deleteMany
   */
  export type TiktokEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TiktokEvents to delete
     */
    where?: TiktokEventWhereInput
    /**
     * Limit how many TiktokEvents to delete.
     */
    limit?: number
  }

  /**
   * TiktokEvent.engagementTop
   */
  export type TiktokEvent$engagementTopArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokEngagementTop
     */
    select?: TiktokEngagementTopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokEngagementTop
     */
    omit?: TiktokEngagementTopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokEngagementTopInclude<ExtArgs> | null
    where?: TiktokEngagementTopWhereInput
  }

  /**
   * TiktokEvent.engagementBottom
   */
  export type TiktokEvent$engagementBottomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokEngagementBottom
     */
    select?: TiktokEngagementBottomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokEngagementBottom
     */
    omit?: TiktokEngagementBottomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokEngagementBottomInclude<ExtArgs> | null
    where?: TiktokEngagementBottomWhereInput
  }

  /**
   * TiktokEvent without action
   */
  export type TiktokEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokEvent
     */
    select?: TiktokEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokEvent
     */
    omit?: TiktokEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokEventInclude<ExtArgs> | null
  }


  /**
   * Model TiktokEngagementTop
   */

  export type AggregateTiktokEngagementTop = {
    _count: TiktokEngagementTopCountAggregateOutputType | null
    _avg: TiktokEngagementTopAvgAggregateOutputType | null
    _sum: TiktokEngagementTopSumAggregateOutputType | null
    _min: TiktokEngagementTopMinAggregateOutputType | null
    _max: TiktokEngagementTopMaxAggregateOutputType | null
  }

  export type TiktokEngagementTopAvgAggregateOutputType = {
    watchTime: number | null
    percentageWatched: number | null
  }

  export type TiktokEngagementTopSumAggregateOutputType = {
    watchTime: number | null
    percentageWatched: number | null
  }

  export type TiktokEngagementTopMinAggregateOutputType = {
    tiktokEventId: string | null
    watchTime: number | null
    percentageWatched: number | null
    device: string | null
    country: string | null
    videoId: string | null
  }

  export type TiktokEngagementTopMaxAggregateOutputType = {
    tiktokEventId: string | null
    watchTime: number | null
    percentageWatched: number | null
    device: string | null
    country: string | null
    videoId: string | null
  }

  export type TiktokEngagementTopCountAggregateOutputType = {
    tiktokEventId: number
    watchTime: number
    percentageWatched: number
    device: number
    country: number
    videoId: number
    _all: number
  }


  export type TiktokEngagementTopAvgAggregateInputType = {
    watchTime?: true
    percentageWatched?: true
  }

  export type TiktokEngagementTopSumAggregateInputType = {
    watchTime?: true
    percentageWatched?: true
  }

  export type TiktokEngagementTopMinAggregateInputType = {
    tiktokEventId?: true
    watchTime?: true
    percentageWatched?: true
    device?: true
    country?: true
    videoId?: true
  }

  export type TiktokEngagementTopMaxAggregateInputType = {
    tiktokEventId?: true
    watchTime?: true
    percentageWatched?: true
    device?: true
    country?: true
    videoId?: true
  }

  export type TiktokEngagementTopCountAggregateInputType = {
    tiktokEventId?: true
    watchTime?: true
    percentageWatched?: true
    device?: true
    country?: true
    videoId?: true
    _all?: true
  }

  export type TiktokEngagementTopAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TiktokEngagementTop to aggregate.
     */
    where?: TiktokEngagementTopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TiktokEngagementTops to fetch.
     */
    orderBy?: TiktokEngagementTopOrderByWithRelationInput | TiktokEngagementTopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TiktokEngagementTopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TiktokEngagementTops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TiktokEngagementTops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TiktokEngagementTops
    **/
    _count?: true | TiktokEngagementTopCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TiktokEngagementTopAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TiktokEngagementTopSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TiktokEngagementTopMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TiktokEngagementTopMaxAggregateInputType
  }

  export type GetTiktokEngagementTopAggregateType<T extends TiktokEngagementTopAggregateArgs> = {
        [P in keyof T & keyof AggregateTiktokEngagementTop]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTiktokEngagementTop[P]>
      : GetScalarType<T[P], AggregateTiktokEngagementTop[P]>
  }




  export type TiktokEngagementTopGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TiktokEngagementTopWhereInput
    orderBy?: TiktokEngagementTopOrderByWithAggregationInput | TiktokEngagementTopOrderByWithAggregationInput[]
    by: TiktokEngagementTopScalarFieldEnum[] | TiktokEngagementTopScalarFieldEnum
    having?: TiktokEngagementTopScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TiktokEngagementTopCountAggregateInputType | true
    _avg?: TiktokEngagementTopAvgAggregateInputType
    _sum?: TiktokEngagementTopSumAggregateInputType
    _min?: TiktokEngagementTopMinAggregateInputType
    _max?: TiktokEngagementTopMaxAggregateInputType
  }

  export type TiktokEngagementTopGroupByOutputType = {
    tiktokEventId: string
    watchTime: number
    percentageWatched: number
    device: string
    country: string
    videoId: string
    _count: TiktokEngagementTopCountAggregateOutputType | null
    _avg: TiktokEngagementTopAvgAggregateOutputType | null
    _sum: TiktokEngagementTopSumAggregateOutputType | null
    _min: TiktokEngagementTopMinAggregateOutputType | null
    _max: TiktokEngagementTopMaxAggregateOutputType | null
  }

  type GetTiktokEngagementTopGroupByPayload<T extends TiktokEngagementTopGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TiktokEngagementTopGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TiktokEngagementTopGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TiktokEngagementTopGroupByOutputType[P]>
            : GetScalarType<T[P], TiktokEngagementTopGroupByOutputType[P]>
        }
      >
    >


  export type TiktokEngagementTopSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tiktokEventId?: boolean
    watchTime?: boolean
    percentageWatched?: boolean
    device?: boolean
    country?: boolean
    videoId?: boolean
    tiktokEvent?: boolean | TiktokEventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tiktokEngagementTop"]>

  export type TiktokEngagementTopSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tiktokEventId?: boolean
    watchTime?: boolean
    percentageWatched?: boolean
    device?: boolean
    country?: boolean
    videoId?: boolean
    tiktokEvent?: boolean | TiktokEventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tiktokEngagementTop"]>

  export type TiktokEngagementTopSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tiktokEventId?: boolean
    watchTime?: boolean
    percentageWatched?: boolean
    device?: boolean
    country?: boolean
    videoId?: boolean
    tiktokEvent?: boolean | TiktokEventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tiktokEngagementTop"]>

  export type TiktokEngagementTopSelectScalar = {
    tiktokEventId?: boolean
    watchTime?: boolean
    percentageWatched?: boolean
    device?: boolean
    country?: boolean
    videoId?: boolean
  }

  export type TiktokEngagementTopOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tiktokEventId" | "watchTime" | "percentageWatched" | "device" | "country" | "videoId", ExtArgs["result"]["tiktokEngagementTop"]>
  export type TiktokEngagementTopInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tiktokEvent?: boolean | TiktokEventDefaultArgs<ExtArgs>
  }
  export type TiktokEngagementTopIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tiktokEvent?: boolean | TiktokEventDefaultArgs<ExtArgs>
  }
  export type TiktokEngagementTopIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tiktokEvent?: boolean | TiktokEventDefaultArgs<ExtArgs>
  }

  export type $TiktokEngagementTopPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TiktokEngagementTop"
    objects: {
      tiktokEvent: Prisma.$TiktokEventPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      tiktokEventId: string
      watchTime: number
      percentageWatched: number
      device: string
      country: string
      videoId: string
    }, ExtArgs["result"]["tiktokEngagementTop"]>
    composites: {}
  }

  type TiktokEngagementTopGetPayload<S extends boolean | null | undefined | TiktokEngagementTopDefaultArgs> = $Result.GetResult<Prisma.$TiktokEngagementTopPayload, S>

  type TiktokEngagementTopCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TiktokEngagementTopFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TiktokEngagementTopCountAggregateInputType | true
    }

  export interface TiktokEngagementTopDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TiktokEngagementTop'], meta: { name: 'TiktokEngagementTop' } }
    /**
     * Find zero or one TiktokEngagementTop that matches the filter.
     * @param {TiktokEngagementTopFindUniqueArgs} args - Arguments to find a TiktokEngagementTop
     * @example
     * // Get one TiktokEngagementTop
     * const tiktokEngagementTop = await prisma.tiktokEngagementTop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TiktokEngagementTopFindUniqueArgs>(args: SelectSubset<T, TiktokEngagementTopFindUniqueArgs<ExtArgs>>): Prisma__TiktokEngagementTopClient<$Result.GetResult<Prisma.$TiktokEngagementTopPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TiktokEngagementTop that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TiktokEngagementTopFindUniqueOrThrowArgs} args - Arguments to find a TiktokEngagementTop
     * @example
     * // Get one TiktokEngagementTop
     * const tiktokEngagementTop = await prisma.tiktokEngagementTop.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TiktokEngagementTopFindUniqueOrThrowArgs>(args: SelectSubset<T, TiktokEngagementTopFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TiktokEngagementTopClient<$Result.GetResult<Prisma.$TiktokEngagementTopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TiktokEngagementTop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokEngagementTopFindFirstArgs} args - Arguments to find a TiktokEngagementTop
     * @example
     * // Get one TiktokEngagementTop
     * const tiktokEngagementTop = await prisma.tiktokEngagementTop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TiktokEngagementTopFindFirstArgs>(args?: SelectSubset<T, TiktokEngagementTopFindFirstArgs<ExtArgs>>): Prisma__TiktokEngagementTopClient<$Result.GetResult<Prisma.$TiktokEngagementTopPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TiktokEngagementTop that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokEngagementTopFindFirstOrThrowArgs} args - Arguments to find a TiktokEngagementTop
     * @example
     * // Get one TiktokEngagementTop
     * const tiktokEngagementTop = await prisma.tiktokEngagementTop.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TiktokEngagementTopFindFirstOrThrowArgs>(args?: SelectSubset<T, TiktokEngagementTopFindFirstOrThrowArgs<ExtArgs>>): Prisma__TiktokEngagementTopClient<$Result.GetResult<Prisma.$TiktokEngagementTopPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TiktokEngagementTops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokEngagementTopFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TiktokEngagementTops
     * const tiktokEngagementTops = await prisma.tiktokEngagementTop.findMany()
     * 
     * // Get first 10 TiktokEngagementTops
     * const tiktokEngagementTops = await prisma.tiktokEngagementTop.findMany({ take: 10 })
     * 
     * // Only select the `tiktokEventId`
     * const tiktokEngagementTopWithTiktokEventIdOnly = await prisma.tiktokEngagementTop.findMany({ select: { tiktokEventId: true } })
     * 
     */
    findMany<T extends TiktokEngagementTopFindManyArgs>(args?: SelectSubset<T, TiktokEngagementTopFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TiktokEngagementTopPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TiktokEngagementTop.
     * @param {TiktokEngagementTopCreateArgs} args - Arguments to create a TiktokEngagementTop.
     * @example
     * // Create one TiktokEngagementTop
     * const TiktokEngagementTop = await prisma.tiktokEngagementTop.create({
     *   data: {
     *     // ... data to create a TiktokEngagementTop
     *   }
     * })
     * 
     */
    create<T extends TiktokEngagementTopCreateArgs>(args: SelectSubset<T, TiktokEngagementTopCreateArgs<ExtArgs>>): Prisma__TiktokEngagementTopClient<$Result.GetResult<Prisma.$TiktokEngagementTopPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TiktokEngagementTops.
     * @param {TiktokEngagementTopCreateManyArgs} args - Arguments to create many TiktokEngagementTops.
     * @example
     * // Create many TiktokEngagementTops
     * const tiktokEngagementTop = await prisma.tiktokEngagementTop.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TiktokEngagementTopCreateManyArgs>(args?: SelectSubset<T, TiktokEngagementTopCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TiktokEngagementTops and returns the data saved in the database.
     * @param {TiktokEngagementTopCreateManyAndReturnArgs} args - Arguments to create many TiktokEngagementTops.
     * @example
     * // Create many TiktokEngagementTops
     * const tiktokEngagementTop = await prisma.tiktokEngagementTop.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TiktokEngagementTops and only return the `tiktokEventId`
     * const tiktokEngagementTopWithTiktokEventIdOnly = await prisma.tiktokEngagementTop.createManyAndReturn({
     *   select: { tiktokEventId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TiktokEngagementTopCreateManyAndReturnArgs>(args?: SelectSubset<T, TiktokEngagementTopCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TiktokEngagementTopPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TiktokEngagementTop.
     * @param {TiktokEngagementTopDeleteArgs} args - Arguments to delete one TiktokEngagementTop.
     * @example
     * // Delete one TiktokEngagementTop
     * const TiktokEngagementTop = await prisma.tiktokEngagementTop.delete({
     *   where: {
     *     // ... filter to delete one TiktokEngagementTop
     *   }
     * })
     * 
     */
    delete<T extends TiktokEngagementTopDeleteArgs>(args: SelectSubset<T, TiktokEngagementTopDeleteArgs<ExtArgs>>): Prisma__TiktokEngagementTopClient<$Result.GetResult<Prisma.$TiktokEngagementTopPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TiktokEngagementTop.
     * @param {TiktokEngagementTopUpdateArgs} args - Arguments to update one TiktokEngagementTop.
     * @example
     * // Update one TiktokEngagementTop
     * const tiktokEngagementTop = await prisma.tiktokEngagementTop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TiktokEngagementTopUpdateArgs>(args: SelectSubset<T, TiktokEngagementTopUpdateArgs<ExtArgs>>): Prisma__TiktokEngagementTopClient<$Result.GetResult<Prisma.$TiktokEngagementTopPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TiktokEngagementTops.
     * @param {TiktokEngagementTopDeleteManyArgs} args - Arguments to filter TiktokEngagementTops to delete.
     * @example
     * // Delete a few TiktokEngagementTops
     * const { count } = await prisma.tiktokEngagementTop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TiktokEngagementTopDeleteManyArgs>(args?: SelectSubset<T, TiktokEngagementTopDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TiktokEngagementTops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokEngagementTopUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TiktokEngagementTops
     * const tiktokEngagementTop = await prisma.tiktokEngagementTop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TiktokEngagementTopUpdateManyArgs>(args: SelectSubset<T, TiktokEngagementTopUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TiktokEngagementTops and returns the data updated in the database.
     * @param {TiktokEngagementTopUpdateManyAndReturnArgs} args - Arguments to update many TiktokEngagementTops.
     * @example
     * // Update many TiktokEngagementTops
     * const tiktokEngagementTop = await prisma.tiktokEngagementTop.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TiktokEngagementTops and only return the `tiktokEventId`
     * const tiktokEngagementTopWithTiktokEventIdOnly = await prisma.tiktokEngagementTop.updateManyAndReturn({
     *   select: { tiktokEventId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TiktokEngagementTopUpdateManyAndReturnArgs>(args: SelectSubset<T, TiktokEngagementTopUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TiktokEngagementTopPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TiktokEngagementTop.
     * @param {TiktokEngagementTopUpsertArgs} args - Arguments to update or create a TiktokEngagementTop.
     * @example
     * // Update or create a TiktokEngagementTop
     * const tiktokEngagementTop = await prisma.tiktokEngagementTop.upsert({
     *   create: {
     *     // ... data to create a TiktokEngagementTop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TiktokEngagementTop we want to update
     *   }
     * })
     */
    upsert<T extends TiktokEngagementTopUpsertArgs>(args: SelectSubset<T, TiktokEngagementTopUpsertArgs<ExtArgs>>): Prisma__TiktokEngagementTopClient<$Result.GetResult<Prisma.$TiktokEngagementTopPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TiktokEngagementTops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokEngagementTopCountArgs} args - Arguments to filter TiktokEngagementTops to count.
     * @example
     * // Count the number of TiktokEngagementTops
     * const count = await prisma.tiktokEngagementTop.count({
     *   where: {
     *     // ... the filter for the TiktokEngagementTops we want to count
     *   }
     * })
    **/
    count<T extends TiktokEngagementTopCountArgs>(
      args?: Subset<T, TiktokEngagementTopCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TiktokEngagementTopCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TiktokEngagementTop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokEngagementTopAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TiktokEngagementTopAggregateArgs>(args: Subset<T, TiktokEngagementTopAggregateArgs>): Prisma.PrismaPromise<GetTiktokEngagementTopAggregateType<T>>

    /**
     * Group by TiktokEngagementTop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokEngagementTopGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TiktokEngagementTopGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TiktokEngagementTopGroupByArgs['orderBy'] }
        : { orderBy?: TiktokEngagementTopGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TiktokEngagementTopGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTiktokEngagementTopGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TiktokEngagementTop model
   */
  readonly fields: TiktokEngagementTopFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TiktokEngagementTop.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TiktokEngagementTopClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tiktokEvent<T extends TiktokEventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TiktokEventDefaultArgs<ExtArgs>>): Prisma__TiktokEventClient<$Result.GetResult<Prisma.$TiktokEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TiktokEngagementTop model
   */
  interface TiktokEngagementTopFieldRefs {
    readonly tiktokEventId: FieldRef<"TiktokEngagementTop", 'String'>
    readonly watchTime: FieldRef<"TiktokEngagementTop", 'Int'>
    readonly percentageWatched: FieldRef<"TiktokEngagementTop", 'Int'>
    readonly device: FieldRef<"TiktokEngagementTop", 'String'>
    readonly country: FieldRef<"TiktokEngagementTop", 'String'>
    readonly videoId: FieldRef<"TiktokEngagementTop", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TiktokEngagementTop findUnique
   */
  export type TiktokEngagementTopFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokEngagementTop
     */
    select?: TiktokEngagementTopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokEngagementTop
     */
    omit?: TiktokEngagementTopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokEngagementTopInclude<ExtArgs> | null
    /**
     * Filter, which TiktokEngagementTop to fetch.
     */
    where: TiktokEngagementTopWhereUniqueInput
  }

  /**
   * TiktokEngagementTop findUniqueOrThrow
   */
  export type TiktokEngagementTopFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokEngagementTop
     */
    select?: TiktokEngagementTopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokEngagementTop
     */
    omit?: TiktokEngagementTopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokEngagementTopInclude<ExtArgs> | null
    /**
     * Filter, which TiktokEngagementTop to fetch.
     */
    where: TiktokEngagementTopWhereUniqueInput
  }

  /**
   * TiktokEngagementTop findFirst
   */
  export type TiktokEngagementTopFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokEngagementTop
     */
    select?: TiktokEngagementTopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokEngagementTop
     */
    omit?: TiktokEngagementTopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokEngagementTopInclude<ExtArgs> | null
    /**
     * Filter, which TiktokEngagementTop to fetch.
     */
    where?: TiktokEngagementTopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TiktokEngagementTops to fetch.
     */
    orderBy?: TiktokEngagementTopOrderByWithRelationInput | TiktokEngagementTopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TiktokEngagementTops.
     */
    cursor?: TiktokEngagementTopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TiktokEngagementTops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TiktokEngagementTops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TiktokEngagementTops.
     */
    distinct?: TiktokEngagementTopScalarFieldEnum | TiktokEngagementTopScalarFieldEnum[]
  }

  /**
   * TiktokEngagementTop findFirstOrThrow
   */
  export type TiktokEngagementTopFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokEngagementTop
     */
    select?: TiktokEngagementTopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokEngagementTop
     */
    omit?: TiktokEngagementTopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokEngagementTopInclude<ExtArgs> | null
    /**
     * Filter, which TiktokEngagementTop to fetch.
     */
    where?: TiktokEngagementTopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TiktokEngagementTops to fetch.
     */
    orderBy?: TiktokEngagementTopOrderByWithRelationInput | TiktokEngagementTopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TiktokEngagementTops.
     */
    cursor?: TiktokEngagementTopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TiktokEngagementTops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TiktokEngagementTops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TiktokEngagementTops.
     */
    distinct?: TiktokEngagementTopScalarFieldEnum | TiktokEngagementTopScalarFieldEnum[]
  }

  /**
   * TiktokEngagementTop findMany
   */
  export type TiktokEngagementTopFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokEngagementTop
     */
    select?: TiktokEngagementTopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokEngagementTop
     */
    omit?: TiktokEngagementTopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokEngagementTopInclude<ExtArgs> | null
    /**
     * Filter, which TiktokEngagementTops to fetch.
     */
    where?: TiktokEngagementTopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TiktokEngagementTops to fetch.
     */
    orderBy?: TiktokEngagementTopOrderByWithRelationInput | TiktokEngagementTopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TiktokEngagementTops.
     */
    cursor?: TiktokEngagementTopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TiktokEngagementTops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TiktokEngagementTops.
     */
    skip?: number
    distinct?: TiktokEngagementTopScalarFieldEnum | TiktokEngagementTopScalarFieldEnum[]
  }

  /**
   * TiktokEngagementTop create
   */
  export type TiktokEngagementTopCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokEngagementTop
     */
    select?: TiktokEngagementTopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokEngagementTop
     */
    omit?: TiktokEngagementTopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokEngagementTopInclude<ExtArgs> | null
    /**
     * The data needed to create a TiktokEngagementTop.
     */
    data: XOR<TiktokEngagementTopCreateInput, TiktokEngagementTopUncheckedCreateInput>
  }

  /**
   * TiktokEngagementTop createMany
   */
  export type TiktokEngagementTopCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TiktokEngagementTops.
     */
    data: TiktokEngagementTopCreateManyInput | TiktokEngagementTopCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TiktokEngagementTop createManyAndReturn
   */
  export type TiktokEngagementTopCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokEngagementTop
     */
    select?: TiktokEngagementTopSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokEngagementTop
     */
    omit?: TiktokEngagementTopOmit<ExtArgs> | null
    /**
     * The data used to create many TiktokEngagementTops.
     */
    data: TiktokEngagementTopCreateManyInput | TiktokEngagementTopCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokEngagementTopIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TiktokEngagementTop update
   */
  export type TiktokEngagementTopUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokEngagementTop
     */
    select?: TiktokEngagementTopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokEngagementTop
     */
    omit?: TiktokEngagementTopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokEngagementTopInclude<ExtArgs> | null
    /**
     * The data needed to update a TiktokEngagementTop.
     */
    data: XOR<TiktokEngagementTopUpdateInput, TiktokEngagementTopUncheckedUpdateInput>
    /**
     * Choose, which TiktokEngagementTop to update.
     */
    where: TiktokEngagementTopWhereUniqueInput
  }

  /**
   * TiktokEngagementTop updateMany
   */
  export type TiktokEngagementTopUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TiktokEngagementTops.
     */
    data: XOR<TiktokEngagementTopUpdateManyMutationInput, TiktokEngagementTopUncheckedUpdateManyInput>
    /**
     * Filter which TiktokEngagementTops to update
     */
    where?: TiktokEngagementTopWhereInput
    /**
     * Limit how many TiktokEngagementTops to update.
     */
    limit?: number
  }

  /**
   * TiktokEngagementTop updateManyAndReturn
   */
  export type TiktokEngagementTopUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokEngagementTop
     */
    select?: TiktokEngagementTopSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokEngagementTop
     */
    omit?: TiktokEngagementTopOmit<ExtArgs> | null
    /**
     * The data used to update TiktokEngagementTops.
     */
    data: XOR<TiktokEngagementTopUpdateManyMutationInput, TiktokEngagementTopUncheckedUpdateManyInput>
    /**
     * Filter which TiktokEngagementTops to update
     */
    where?: TiktokEngagementTopWhereInput
    /**
     * Limit how many TiktokEngagementTops to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokEngagementTopIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TiktokEngagementTop upsert
   */
  export type TiktokEngagementTopUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokEngagementTop
     */
    select?: TiktokEngagementTopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokEngagementTop
     */
    omit?: TiktokEngagementTopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokEngagementTopInclude<ExtArgs> | null
    /**
     * The filter to search for the TiktokEngagementTop to update in case it exists.
     */
    where: TiktokEngagementTopWhereUniqueInput
    /**
     * In case the TiktokEngagementTop found by the `where` argument doesn't exist, create a new TiktokEngagementTop with this data.
     */
    create: XOR<TiktokEngagementTopCreateInput, TiktokEngagementTopUncheckedCreateInput>
    /**
     * In case the TiktokEngagementTop was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TiktokEngagementTopUpdateInput, TiktokEngagementTopUncheckedUpdateInput>
  }

  /**
   * TiktokEngagementTop delete
   */
  export type TiktokEngagementTopDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokEngagementTop
     */
    select?: TiktokEngagementTopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokEngagementTop
     */
    omit?: TiktokEngagementTopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokEngagementTopInclude<ExtArgs> | null
    /**
     * Filter which TiktokEngagementTop to delete.
     */
    where: TiktokEngagementTopWhereUniqueInput
  }

  /**
   * TiktokEngagementTop deleteMany
   */
  export type TiktokEngagementTopDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TiktokEngagementTops to delete
     */
    where?: TiktokEngagementTopWhereInput
    /**
     * Limit how many TiktokEngagementTops to delete.
     */
    limit?: number
  }

  /**
   * TiktokEngagementTop without action
   */
  export type TiktokEngagementTopDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokEngagementTop
     */
    select?: TiktokEngagementTopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokEngagementTop
     */
    omit?: TiktokEngagementTopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokEngagementTopInclude<ExtArgs> | null
  }


  /**
   * Model TiktokEngagementBottom
   */

  export type AggregateTiktokEngagementBottom = {
    _count: TiktokEngagementBottomCountAggregateOutputType | null
    _avg: TiktokEngagementBottomAvgAggregateOutputType | null
    _sum: TiktokEngagementBottomSumAggregateOutputType | null
    _min: TiktokEngagementBottomMinAggregateOutputType | null
    _max: TiktokEngagementBottomMaxAggregateOutputType | null
  }

  export type TiktokEngagementBottomAvgAggregateOutputType = {
    purchaseAmount: Decimal | null
  }

  export type TiktokEngagementBottomSumAggregateOutputType = {
    purchaseAmount: Decimal | null
  }

  export type TiktokEngagementBottomMinAggregateOutputType = {
    tiktokEventId: string | null
    actionTime: Date | null
    profileId: string | null
    purchasedItem: string | null
    purchaseAmount: Decimal | null
  }

  export type TiktokEngagementBottomMaxAggregateOutputType = {
    tiktokEventId: string | null
    actionTime: Date | null
    profileId: string | null
    purchasedItem: string | null
    purchaseAmount: Decimal | null
  }

  export type TiktokEngagementBottomCountAggregateOutputType = {
    tiktokEventId: number
    actionTime: number
    profileId: number
    purchasedItem: number
    purchaseAmount: number
    _all: number
  }


  export type TiktokEngagementBottomAvgAggregateInputType = {
    purchaseAmount?: true
  }

  export type TiktokEngagementBottomSumAggregateInputType = {
    purchaseAmount?: true
  }

  export type TiktokEngagementBottomMinAggregateInputType = {
    tiktokEventId?: true
    actionTime?: true
    profileId?: true
    purchasedItem?: true
    purchaseAmount?: true
  }

  export type TiktokEngagementBottomMaxAggregateInputType = {
    tiktokEventId?: true
    actionTime?: true
    profileId?: true
    purchasedItem?: true
    purchaseAmount?: true
  }

  export type TiktokEngagementBottomCountAggregateInputType = {
    tiktokEventId?: true
    actionTime?: true
    profileId?: true
    purchasedItem?: true
    purchaseAmount?: true
    _all?: true
  }

  export type TiktokEngagementBottomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TiktokEngagementBottom to aggregate.
     */
    where?: TiktokEngagementBottomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TiktokEngagementBottoms to fetch.
     */
    orderBy?: TiktokEngagementBottomOrderByWithRelationInput | TiktokEngagementBottomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TiktokEngagementBottomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TiktokEngagementBottoms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TiktokEngagementBottoms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TiktokEngagementBottoms
    **/
    _count?: true | TiktokEngagementBottomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TiktokEngagementBottomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TiktokEngagementBottomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TiktokEngagementBottomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TiktokEngagementBottomMaxAggregateInputType
  }

  export type GetTiktokEngagementBottomAggregateType<T extends TiktokEngagementBottomAggregateArgs> = {
        [P in keyof T & keyof AggregateTiktokEngagementBottom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTiktokEngagementBottom[P]>
      : GetScalarType<T[P], AggregateTiktokEngagementBottom[P]>
  }




  export type TiktokEngagementBottomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TiktokEngagementBottomWhereInput
    orderBy?: TiktokEngagementBottomOrderByWithAggregationInput | TiktokEngagementBottomOrderByWithAggregationInput[]
    by: TiktokEngagementBottomScalarFieldEnum[] | TiktokEngagementBottomScalarFieldEnum
    having?: TiktokEngagementBottomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TiktokEngagementBottomCountAggregateInputType | true
    _avg?: TiktokEngagementBottomAvgAggregateInputType
    _sum?: TiktokEngagementBottomSumAggregateInputType
    _min?: TiktokEngagementBottomMinAggregateInputType
    _max?: TiktokEngagementBottomMaxAggregateInputType
  }

  export type TiktokEngagementBottomGroupByOutputType = {
    tiktokEventId: string
    actionTime: Date
    profileId: string | null
    purchasedItem: string | null
    purchaseAmount: Decimal | null
    _count: TiktokEngagementBottomCountAggregateOutputType | null
    _avg: TiktokEngagementBottomAvgAggregateOutputType | null
    _sum: TiktokEngagementBottomSumAggregateOutputType | null
    _min: TiktokEngagementBottomMinAggregateOutputType | null
    _max: TiktokEngagementBottomMaxAggregateOutputType | null
  }

  type GetTiktokEngagementBottomGroupByPayload<T extends TiktokEngagementBottomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TiktokEngagementBottomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TiktokEngagementBottomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TiktokEngagementBottomGroupByOutputType[P]>
            : GetScalarType<T[P], TiktokEngagementBottomGroupByOutputType[P]>
        }
      >
    >


  export type TiktokEngagementBottomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tiktokEventId?: boolean
    actionTime?: boolean
    profileId?: boolean
    purchasedItem?: boolean
    purchaseAmount?: boolean
    tiktokEvent?: boolean | TiktokEventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tiktokEngagementBottom"]>

  export type TiktokEngagementBottomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tiktokEventId?: boolean
    actionTime?: boolean
    profileId?: boolean
    purchasedItem?: boolean
    purchaseAmount?: boolean
    tiktokEvent?: boolean | TiktokEventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tiktokEngagementBottom"]>

  export type TiktokEngagementBottomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tiktokEventId?: boolean
    actionTime?: boolean
    profileId?: boolean
    purchasedItem?: boolean
    purchaseAmount?: boolean
    tiktokEvent?: boolean | TiktokEventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tiktokEngagementBottom"]>

  export type TiktokEngagementBottomSelectScalar = {
    tiktokEventId?: boolean
    actionTime?: boolean
    profileId?: boolean
    purchasedItem?: boolean
    purchaseAmount?: boolean
  }

  export type TiktokEngagementBottomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tiktokEventId" | "actionTime" | "profileId" | "purchasedItem" | "purchaseAmount", ExtArgs["result"]["tiktokEngagementBottom"]>
  export type TiktokEngagementBottomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tiktokEvent?: boolean | TiktokEventDefaultArgs<ExtArgs>
  }
  export type TiktokEngagementBottomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tiktokEvent?: boolean | TiktokEventDefaultArgs<ExtArgs>
  }
  export type TiktokEngagementBottomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tiktokEvent?: boolean | TiktokEventDefaultArgs<ExtArgs>
  }

  export type $TiktokEngagementBottomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TiktokEngagementBottom"
    objects: {
      tiktokEvent: Prisma.$TiktokEventPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      tiktokEventId: string
      actionTime: Date
      profileId: string | null
      purchasedItem: string | null
      purchaseAmount: Prisma.Decimal | null
    }, ExtArgs["result"]["tiktokEngagementBottom"]>
    composites: {}
  }

  type TiktokEngagementBottomGetPayload<S extends boolean | null | undefined | TiktokEngagementBottomDefaultArgs> = $Result.GetResult<Prisma.$TiktokEngagementBottomPayload, S>

  type TiktokEngagementBottomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TiktokEngagementBottomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TiktokEngagementBottomCountAggregateInputType | true
    }

  export interface TiktokEngagementBottomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TiktokEngagementBottom'], meta: { name: 'TiktokEngagementBottom' } }
    /**
     * Find zero or one TiktokEngagementBottom that matches the filter.
     * @param {TiktokEngagementBottomFindUniqueArgs} args - Arguments to find a TiktokEngagementBottom
     * @example
     * // Get one TiktokEngagementBottom
     * const tiktokEngagementBottom = await prisma.tiktokEngagementBottom.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TiktokEngagementBottomFindUniqueArgs>(args: SelectSubset<T, TiktokEngagementBottomFindUniqueArgs<ExtArgs>>): Prisma__TiktokEngagementBottomClient<$Result.GetResult<Prisma.$TiktokEngagementBottomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TiktokEngagementBottom that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TiktokEngagementBottomFindUniqueOrThrowArgs} args - Arguments to find a TiktokEngagementBottom
     * @example
     * // Get one TiktokEngagementBottom
     * const tiktokEngagementBottom = await prisma.tiktokEngagementBottom.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TiktokEngagementBottomFindUniqueOrThrowArgs>(args: SelectSubset<T, TiktokEngagementBottomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TiktokEngagementBottomClient<$Result.GetResult<Prisma.$TiktokEngagementBottomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TiktokEngagementBottom that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokEngagementBottomFindFirstArgs} args - Arguments to find a TiktokEngagementBottom
     * @example
     * // Get one TiktokEngagementBottom
     * const tiktokEngagementBottom = await prisma.tiktokEngagementBottom.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TiktokEngagementBottomFindFirstArgs>(args?: SelectSubset<T, TiktokEngagementBottomFindFirstArgs<ExtArgs>>): Prisma__TiktokEngagementBottomClient<$Result.GetResult<Prisma.$TiktokEngagementBottomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TiktokEngagementBottom that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokEngagementBottomFindFirstOrThrowArgs} args - Arguments to find a TiktokEngagementBottom
     * @example
     * // Get one TiktokEngagementBottom
     * const tiktokEngagementBottom = await prisma.tiktokEngagementBottom.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TiktokEngagementBottomFindFirstOrThrowArgs>(args?: SelectSubset<T, TiktokEngagementBottomFindFirstOrThrowArgs<ExtArgs>>): Prisma__TiktokEngagementBottomClient<$Result.GetResult<Prisma.$TiktokEngagementBottomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TiktokEngagementBottoms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokEngagementBottomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TiktokEngagementBottoms
     * const tiktokEngagementBottoms = await prisma.tiktokEngagementBottom.findMany()
     * 
     * // Get first 10 TiktokEngagementBottoms
     * const tiktokEngagementBottoms = await prisma.tiktokEngagementBottom.findMany({ take: 10 })
     * 
     * // Only select the `tiktokEventId`
     * const tiktokEngagementBottomWithTiktokEventIdOnly = await prisma.tiktokEngagementBottom.findMany({ select: { tiktokEventId: true } })
     * 
     */
    findMany<T extends TiktokEngagementBottomFindManyArgs>(args?: SelectSubset<T, TiktokEngagementBottomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TiktokEngagementBottomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TiktokEngagementBottom.
     * @param {TiktokEngagementBottomCreateArgs} args - Arguments to create a TiktokEngagementBottom.
     * @example
     * // Create one TiktokEngagementBottom
     * const TiktokEngagementBottom = await prisma.tiktokEngagementBottom.create({
     *   data: {
     *     // ... data to create a TiktokEngagementBottom
     *   }
     * })
     * 
     */
    create<T extends TiktokEngagementBottomCreateArgs>(args: SelectSubset<T, TiktokEngagementBottomCreateArgs<ExtArgs>>): Prisma__TiktokEngagementBottomClient<$Result.GetResult<Prisma.$TiktokEngagementBottomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TiktokEngagementBottoms.
     * @param {TiktokEngagementBottomCreateManyArgs} args - Arguments to create many TiktokEngagementBottoms.
     * @example
     * // Create many TiktokEngagementBottoms
     * const tiktokEngagementBottom = await prisma.tiktokEngagementBottom.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TiktokEngagementBottomCreateManyArgs>(args?: SelectSubset<T, TiktokEngagementBottomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TiktokEngagementBottoms and returns the data saved in the database.
     * @param {TiktokEngagementBottomCreateManyAndReturnArgs} args - Arguments to create many TiktokEngagementBottoms.
     * @example
     * // Create many TiktokEngagementBottoms
     * const tiktokEngagementBottom = await prisma.tiktokEngagementBottom.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TiktokEngagementBottoms and only return the `tiktokEventId`
     * const tiktokEngagementBottomWithTiktokEventIdOnly = await prisma.tiktokEngagementBottom.createManyAndReturn({
     *   select: { tiktokEventId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TiktokEngagementBottomCreateManyAndReturnArgs>(args?: SelectSubset<T, TiktokEngagementBottomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TiktokEngagementBottomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TiktokEngagementBottom.
     * @param {TiktokEngagementBottomDeleteArgs} args - Arguments to delete one TiktokEngagementBottom.
     * @example
     * // Delete one TiktokEngagementBottom
     * const TiktokEngagementBottom = await prisma.tiktokEngagementBottom.delete({
     *   where: {
     *     // ... filter to delete one TiktokEngagementBottom
     *   }
     * })
     * 
     */
    delete<T extends TiktokEngagementBottomDeleteArgs>(args: SelectSubset<T, TiktokEngagementBottomDeleteArgs<ExtArgs>>): Prisma__TiktokEngagementBottomClient<$Result.GetResult<Prisma.$TiktokEngagementBottomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TiktokEngagementBottom.
     * @param {TiktokEngagementBottomUpdateArgs} args - Arguments to update one TiktokEngagementBottom.
     * @example
     * // Update one TiktokEngagementBottom
     * const tiktokEngagementBottom = await prisma.tiktokEngagementBottom.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TiktokEngagementBottomUpdateArgs>(args: SelectSubset<T, TiktokEngagementBottomUpdateArgs<ExtArgs>>): Prisma__TiktokEngagementBottomClient<$Result.GetResult<Prisma.$TiktokEngagementBottomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TiktokEngagementBottoms.
     * @param {TiktokEngagementBottomDeleteManyArgs} args - Arguments to filter TiktokEngagementBottoms to delete.
     * @example
     * // Delete a few TiktokEngagementBottoms
     * const { count } = await prisma.tiktokEngagementBottom.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TiktokEngagementBottomDeleteManyArgs>(args?: SelectSubset<T, TiktokEngagementBottomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TiktokEngagementBottoms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokEngagementBottomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TiktokEngagementBottoms
     * const tiktokEngagementBottom = await prisma.tiktokEngagementBottom.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TiktokEngagementBottomUpdateManyArgs>(args: SelectSubset<T, TiktokEngagementBottomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TiktokEngagementBottoms and returns the data updated in the database.
     * @param {TiktokEngagementBottomUpdateManyAndReturnArgs} args - Arguments to update many TiktokEngagementBottoms.
     * @example
     * // Update many TiktokEngagementBottoms
     * const tiktokEngagementBottom = await prisma.tiktokEngagementBottom.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TiktokEngagementBottoms and only return the `tiktokEventId`
     * const tiktokEngagementBottomWithTiktokEventIdOnly = await prisma.tiktokEngagementBottom.updateManyAndReturn({
     *   select: { tiktokEventId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TiktokEngagementBottomUpdateManyAndReturnArgs>(args: SelectSubset<T, TiktokEngagementBottomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TiktokEngagementBottomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TiktokEngagementBottom.
     * @param {TiktokEngagementBottomUpsertArgs} args - Arguments to update or create a TiktokEngagementBottom.
     * @example
     * // Update or create a TiktokEngagementBottom
     * const tiktokEngagementBottom = await prisma.tiktokEngagementBottom.upsert({
     *   create: {
     *     // ... data to create a TiktokEngagementBottom
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TiktokEngagementBottom we want to update
     *   }
     * })
     */
    upsert<T extends TiktokEngagementBottomUpsertArgs>(args: SelectSubset<T, TiktokEngagementBottomUpsertArgs<ExtArgs>>): Prisma__TiktokEngagementBottomClient<$Result.GetResult<Prisma.$TiktokEngagementBottomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TiktokEngagementBottoms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokEngagementBottomCountArgs} args - Arguments to filter TiktokEngagementBottoms to count.
     * @example
     * // Count the number of TiktokEngagementBottoms
     * const count = await prisma.tiktokEngagementBottom.count({
     *   where: {
     *     // ... the filter for the TiktokEngagementBottoms we want to count
     *   }
     * })
    **/
    count<T extends TiktokEngagementBottomCountArgs>(
      args?: Subset<T, TiktokEngagementBottomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TiktokEngagementBottomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TiktokEngagementBottom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokEngagementBottomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TiktokEngagementBottomAggregateArgs>(args: Subset<T, TiktokEngagementBottomAggregateArgs>): Prisma.PrismaPromise<GetTiktokEngagementBottomAggregateType<T>>

    /**
     * Group by TiktokEngagementBottom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokEngagementBottomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TiktokEngagementBottomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TiktokEngagementBottomGroupByArgs['orderBy'] }
        : { orderBy?: TiktokEngagementBottomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TiktokEngagementBottomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTiktokEngagementBottomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TiktokEngagementBottom model
   */
  readonly fields: TiktokEngagementBottomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TiktokEngagementBottom.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TiktokEngagementBottomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tiktokEvent<T extends TiktokEventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TiktokEventDefaultArgs<ExtArgs>>): Prisma__TiktokEventClient<$Result.GetResult<Prisma.$TiktokEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TiktokEngagementBottom model
   */
  interface TiktokEngagementBottomFieldRefs {
    readonly tiktokEventId: FieldRef<"TiktokEngagementBottom", 'String'>
    readonly actionTime: FieldRef<"TiktokEngagementBottom", 'DateTime'>
    readonly profileId: FieldRef<"TiktokEngagementBottom", 'String'>
    readonly purchasedItem: FieldRef<"TiktokEngagementBottom", 'String'>
    readonly purchaseAmount: FieldRef<"TiktokEngagementBottom", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * TiktokEngagementBottom findUnique
   */
  export type TiktokEngagementBottomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokEngagementBottom
     */
    select?: TiktokEngagementBottomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokEngagementBottom
     */
    omit?: TiktokEngagementBottomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokEngagementBottomInclude<ExtArgs> | null
    /**
     * Filter, which TiktokEngagementBottom to fetch.
     */
    where: TiktokEngagementBottomWhereUniqueInput
  }

  /**
   * TiktokEngagementBottom findUniqueOrThrow
   */
  export type TiktokEngagementBottomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokEngagementBottom
     */
    select?: TiktokEngagementBottomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokEngagementBottom
     */
    omit?: TiktokEngagementBottomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokEngagementBottomInclude<ExtArgs> | null
    /**
     * Filter, which TiktokEngagementBottom to fetch.
     */
    where: TiktokEngagementBottomWhereUniqueInput
  }

  /**
   * TiktokEngagementBottom findFirst
   */
  export type TiktokEngagementBottomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokEngagementBottom
     */
    select?: TiktokEngagementBottomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokEngagementBottom
     */
    omit?: TiktokEngagementBottomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokEngagementBottomInclude<ExtArgs> | null
    /**
     * Filter, which TiktokEngagementBottom to fetch.
     */
    where?: TiktokEngagementBottomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TiktokEngagementBottoms to fetch.
     */
    orderBy?: TiktokEngagementBottomOrderByWithRelationInput | TiktokEngagementBottomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TiktokEngagementBottoms.
     */
    cursor?: TiktokEngagementBottomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TiktokEngagementBottoms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TiktokEngagementBottoms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TiktokEngagementBottoms.
     */
    distinct?: TiktokEngagementBottomScalarFieldEnum | TiktokEngagementBottomScalarFieldEnum[]
  }

  /**
   * TiktokEngagementBottom findFirstOrThrow
   */
  export type TiktokEngagementBottomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokEngagementBottom
     */
    select?: TiktokEngagementBottomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokEngagementBottom
     */
    omit?: TiktokEngagementBottomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokEngagementBottomInclude<ExtArgs> | null
    /**
     * Filter, which TiktokEngagementBottom to fetch.
     */
    where?: TiktokEngagementBottomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TiktokEngagementBottoms to fetch.
     */
    orderBy?: TiktokEngagementBottomOrderByWithRelationInput | TiktokEngagementBottomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TiktokEngagementBottoms.
     */
    cursor?: TiktokEngagementBottomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TiktokEngagementBottoms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TiktokEngagementBottoms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TiktokEngagementBottoms.
     */
    distinct?: TiktokEngagementBottomScalarFieldEnum | TiktokEngagementBottomScalarFieldEnum[]
  }

  /**
   * TiktokEngagementBottom findMany
   */
  export type TiktokEngagementBottomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokEngagementBottom
     */
    select?: TiktokEngagementBottomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokEngagementBottom
     */
    omit?: TiktokEngagementBottomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokEngagementBottomInclude<ExtArgs> | null
    /**
     * Filter, which TiktokEngagementBottoms to fetch.
     */
    where?: TiktokEngagementBottomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TiktokEngagementBottoms to fetch.
     */
    orderBy?: TiktokEngagementBottomOrderByWithRelationInput | TiktokEngagementBottomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TiktokEngagementBottoms.
     */
    cursor?: TiktokEngagementBottomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TiktokEngagementBottoms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TiktokEngagementBottoms.
     */
    skip?: number
    distinct?: TiktokEngagementBottomScalarFieldEnum | TiktokEngagementBottomScalarFieldEnum[]
  }

  /**
   * TiktokEngagementBottom create
   */
  export type TiktokEngagementBottomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokEngagementBottom
     */
    select?: TiktokEngagementBottomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokEngagementBottom
     */
    omit?: TiktokEngagementBottomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokEngagementBottomInclude<ExtArgs> | null
    /**
     * The data needed to create a TiktokEngagementBottom.
     */
    data: XOR<TiktokEngagementBottomCreateInput, TiktokEngagementBottomUncheckedCreateInput>
  }

  /**
   * TiktokEngagementBottom createMany
   */
  export type TiktokEngagementBottomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TiktokEngagementBottoms.
     */
    data: TiktokEngagementBottomCreateManyInput | TiktokEngagementBottomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TiktokEngagementBottom createManyAndReturn
   */
  export type TiktokEngagementBottomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokEngagementBottom
     */
    select?: TiktokEngagementBottomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokEngagementBottom
     */
    omit?: TiktokEngagementBottomOmit<ExtArgs> | null
    /**
     * The data used to create many TiktokEngagementBottoms.
     */
    data: TiktokEngagementBottomCreateManyInput | TiktokEngagementBottomCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokEngagementBottomIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TiktokEngagementBottom update
   */
  export type TiktokEngagementBottomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokEngagementBottom
     */
    select?: TiktokEngagementBottomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokEngagementBottom
     */
    omit?: TiktokEngagementBottomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokEngagementBottomInclude<ExtArgs> | null
    /**
     * The data needed to update a TiktokEngagementBottom.
     */
    data: XOR<TiktokEngagementBottomUpdateInput, TiktokEngagementBottomUncheckedUpdateInput>
    /**
     * Choose, which TiktokEngagementBottom to update.
     */
    where: TiktokEngagementBottomWhereUniqueInput
  }

  /**
   * TiktokEngagementBottom updateMany
   */
  export type TiktokEngagementBottomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TiktokEngagementBottoms.
     */
    data: XOR<TiktokEngagementBottomUpdateManyMutationInput, TiktokEngagementBottomUncheckedUpdateManyInput>
    /**
     * Filter which TiktokEngagementBottoms to update
     */
    where?: TiktokEngagementBottomWhereInput
    /**
     * Limit how many TiktokEngagementBottoms to update.
     */
    limit?: number
  }

  /**
   * TiktokEngagementBottom updateManyAndReturn
   */
  export type TiktokEngagementBottomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokEngagementBottom
     */
    select?: TiktokEngagementBottomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokEngagementBottom
     */
    omit?: TiktokEngagementBottomOmit<ExtArgs> | null
    /**
     * The data used to update TiktokEngagementBottoms.
     */
    data: XOR<TiktokEngagementBottomUpdateManyMutationInput, TiktokEngagementBottomUncheckedUpdateManyInput>
    /**
     * Filter which TiktokEngagementBottoms to update
     */
    where?: TiktokEngagementBottomWhereInput
    /**
     * Limit how many TiktokEngagementBottoms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokEngagementBottomIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TiktokEngagementBottom upsert
   */
  export type TiktokEngagementBottomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokEngagementBottom
     */
    select?: TiktokEngagementBottomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokEngagementBottom
     */
    omit?: TiktokEngagementBottomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokEngagementBottomInclude<ExtArgs> | null
    /**
     * The filter to search for the TiktokEngagementBottom to update in case it exists.
     */
    where: TiktokEngagementBottomWhereUniqueInput
    /**
     * In case the TiktokEngagementBottom found by the `where` argument doesn't exist, create a new TiktokEngagementBottom with this data.
     */
    create: XOR<TiktokEngagementBottomCreateInput, TiktokEngagementBottomUncheckedCreateInput>
    /**
     * In case the TiktokEngagementBottom was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TiktokEngagementBottomUpdateInput, TiktokEngagementBottomUncheckedUpdateInput>
  }

  /**
   * TiktokEngagementBottom delete
   */
  export type TiktokEngagementBottomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokEngagementBottom
     */
    select?: TiktokEngagementBottomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokEngagementBottom
     */
    omit?: TiktokEngagementBottomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokEngagementBottomInclude<ExtArgs> | null
    /**
     * Filter which TiktokEngagementBottom to delete.
     */
    where: TiktokEngagementBottomWhereUniqueInput
  }

  /**
   * TiktokEngagementBottom deleteMany
   */
  export type TiktokEngagementBottomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TiktokEngagementBottoms to delete
     */
    where?: TiktokEngagementBottomWhereInput
    /**
     * Limit how many TiktokEngagementBottoms to delete.
     */
    limit?: number
  }

  /**
   * TiktokEngagementBottom without action
   */
  export type TiktokEngagementBottomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokEngagementBottom
     */
    select?: TiktokEngagementBottomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokEngagementBottom
     */
    omit?: TiktokEngagementBottomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokEngagementBottomInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const FacebookUserScalarFieldEnum: {
    userId: 'userId',
    name: 'name',
    age: 'age',
    gender: 'gender',
    country: 'country',
    city: 'city'
  };

  export type FacebookUserScalarFieldEnum = (typeof FacebookUserScalarFieldEnum)[keyof typeof FacebookUserScalarFieldEnum]


  export const FacebookEventScalarFieldEnum: {
    eventId: 'eventId',
    timestamp: 'timestamp',
    funnelStage: 'funnelStage',
    eventType: 'eventType',
    userId: 'userId'
  };

  export type FacebookEventScalarFieldEnum = (typeof FacebookEventScalarFieldEnum)[keyof typeof FacebookEventScalarFieldEnum]


  export const FacebookEngagementTopScalarFieldEnum: {
    facebookEventId: 'facebookEventId',
    actionTime: 'actionTime',
    referrer: 'referrer',
    videoId: 'videoId'
  };

  export type FacebookEngagementTopScalarFieldEnum = (typeof FacebookEngagementTopScalarFieldEnum)[keyof typeof FacebookEngagementTopScalarFieldEnum]


  export const FacebookEngagementBottomScalarFieldEnum: {
    facebookEventId: 'facebookEventId',
    adId: 'adId',
    campaignId: 'campaignId',
    clickPosition: 'clickPosition',
    device: 'device',
    browser: 'browser',
    purchaseAmount: 'purchaseAmount'
  };

  export type FacebookEngagementBottomScalarFieldEnum = (typeof FacebookEngagementBottomScalarFieldEnum)[keyof typeof FacebookEngagementBottomScalarFieldEnum]


  export const TiktokUserScalarFieldEnum: {
    userId: 'userId',
    username: 'username',
    followers: 'followers'
  };

  export type TiktokUserScalarFieldEnum = (typeof TiktokUserScalarFieldEnum)[keyof typeof TiktokUserScalarFieldEnum]


  export const TiktokEventScalarFieldEnum: {
    eventId: 'eventId',
    timestamp: 'timestamp',
    funnelStage: 'funnelStage',
    eventType: 'eventType',
    userId: 'userId'
  };

  export type TiktokEventScalarFieldEnum = (typeof TiktokEventScalarFieldEnum)[keyof typeof TiktokEventScalarFieldEnum]


  export const TiktokEngagementTopScalarFieldEnum: {
    tiktokEventId: 'tiktokEventId',
    watchTime: 'watchTime',
    percentageWatched: 'percentageWatched',
    device: 'device',
    country: 'country',
    videoId: 'videoId'
  };

  export type TiktokEngagementTopScalarFieldEnum = (typeof TiktokEngagementTopScalarFieldEnum)[keyof typeof TiktokEngagementTopScalarFieldEnum]


  export const TiktokEngagementBottomScalarFieldEnum: {
    tiktokEventId: 'tiktokEventId',
    actionTime: 'actionTime',
    profileId: 'profileId',
    purchasedItem: 'purchasedItem',
    purchaseAmount: 'purchaseAmount'
  };

  export type TiktokEngagementBottomScalarFieldEnum = (typeof TiktokEngagementBottomScalarFieldEnum)[keyof typeof TiktokEngagementBottomScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type FacebookUserWhereInput = {
    AND?: FacebookUserWhereInput | FacebookUserWhereInput[]
    OR?: FacebookUserWhereInput[]
    NOT?: FacebookUserWhereInput | FacebookUserWhereInput[]
    userId?: StringFilter<"FacebookUser"> | string
    name?: StringFilter<"FacebookUser"> | string
    age?: IntFilter<"FacebookUser"> | number
    gender?: StringFilter<"FacebookUser"> | string
    country?: StringFilter<"FacebookUser"> | string
    city?: StringFilter<"FacebookUser"> | string
    events?: FacebookEventListRelationFilter
  }

  export type FacebookUserOrderByWithRelationInput = {
    userId?: SortOrder
    name?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    country?: SortOrder
    city?: SortOrder
    events?: FacebookEventOrderByRelationAggregateInput
  }

  export type FacebookUserWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    AND?: FacebookUserWhereInput | FacebookUserWhereInput[]
    OR?: FacebookUserWhereInput[]
    NOT?: FacebookUserWhereInput | FacebookUserWhereInput[]
    name?: StringFilter<"FacebookUser"> | string
    age?: IntFilter<"FacebookUser"> | number
    gender?: StringFilter<"FacebookUser"> | string
    country?: StringFilter<"FacebookUser"> | string
    city?: StringFilter<"FacebookUser"> | string
    events?: FacebookEventListRelationFilter
  }, "userId">

  export type FacebookUserOrderByWithAggregationInput = {
    userId?: SortOrder
    name?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    country?: SortOrder
    city?: SortOrder
    _count?: FacebookUserCountOrderByAggregateInput
    _avg?: FacebookUserAvgOrderByAggregateInput
    _max?: FacebookUserMaxOrderByAggregateInput
    _min?: FacebookUserMinOrderByAggregateInput
    _sum?: FacebookUserSumOrderByAggregateInput
  }

  export type FacebookUserScalarWhereWithAggregatesInput = {
    AND?: FacebookUserScalarWhereWithAggregatesInput | FacebookUserScalarWhereWithAggregatesInput[]
    OR?: FacebookUserScalarWhereWithAggregatesInput[]
    NOT?: FacebookUserScalarWhereWithAggregatesInput | FacebookUserScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"FacebookUser"> | string
    name?: StringWithAggregatesFilter<"FacebookUser"> | string
    age?: IntWithAggregatesFilter<"FacebookUser"> | number
    gender?: StringWithAggregatesFilter<"FacebookUser"> | string
    country?: StringWithAggregatesFilter<"FacebookUser"> | string
    city?: StringWithAggregatesFilter<"FacebookUser"> | string
  }

  export type FacebookEventWhereInput = {
    AND?: FacebookEventWhereInput | FacebookEventWhereInput[]
    OR?: FacebookEventWhereInput[]
    NOT?: FacebookEventWhereInput | FacebookEventWhereInput[]
    eventId?: StringFilter<"FacebookEvent"> | string
    timestamp?: DateTimeFilter<"FacebookEvent"> | Date | string
    funnelStage?: StringFilter<"FacebookEvent"> | string
    eventType?: StringFilter<"FacebookEvent"> | string
    userId?: StringFilter<"FacebookEvent"> | string
    user?: XOR<FacebookUserScalarRelationFilter, FacebookUserWhereInput>
    engagementTop?: XOR<FacebookEngagementTopNullableScalarRelationFilter, FacebookEngagementTopWhereInput> | null
    engagementBottom?: XOR<FacebookEngagementBottomNullableScalarRelationFilter, FacebookEngagementBottomWhereInput> | null
  }

  export type FacebookEventOrderByWithRelationInput = {
    eventId?: SortOrder
    timestamp?: SortOrder
    funnelStage?: SortOrder
    eventType?: SortOrder
    userId?: SortOrder
    user?: FacebookUserOrderByWithRelationInput
    engagementTop?: FacebookEngagementTopOrderByWithRelationInput
    engagementBottom?: FacebookEngagementBottomOrderByWithRelationInput
  }

  export type FacebookEventWhereUniqueInput = Prisma.AtLeast<{
    eventId?: string
    AND?: FacebookEventWhereInput | FacebookEventWhereInput[]
    OR?: FacebookEventWhereInput[]
    NOT?: FacebookEventWhereInput | FacebookEventWhereInput[]
    timestamp?: DateTimeFilter<"FacebookEvent"> | Date | string
    funnelStage?: StringFilter<"FacebookEvent"> | string
    eventType?: StringFilter<"FacebookEvent"> | string
    userId?: StringFilter<"FacebookEvent"> | string
    user?: XOR<FacebookUserScalarRelationFilter, FacebookUserWhereInput>
    engagementTop?: XOR<FacebookEngagementTopNullableScalarRelationFilter, FacebookEngagementTopWhereInput> | null
    engagementBottom?: XOR<FacebookEngagementBottomNullableScalarRelationFilter, FacebookEngagementBottomWhereInput> | null
  }, "eventId">

  export type FacebookEventOrderByWithAggregationInput = {
    eventId?: SortOrder
    timestamp?: SortOrder
    funnelStage?: SortOrder
    eventType?: SortOrder
    userId?: SortOrder
    _count?: FacebookEventCountOrderByAggregateInput
    _max?: FacebookEventMaxOrderByAggregateInput
    _min?: FacebookEventMinOrderByAggregateInput
  }

  export type FacebookEventScalarWhereWithAggregatesInput = {
    AND?: FacebookEventScalarWhereWithAggregatesInput | FacebookEventScalarWhereWithAggregatesInput[]
    OR?: FacebookEventScalarWhereWithAggregatesInput[]
    NOT?: FacebookEventScalarWhereWithAggregatesInput | FacebookEventScalarWhereWithAggregatesInput[]
    eventId?: StringWithAggregatesFilter<"FacebookEvent"> | string
    timestamp?: DateTimeWithAggregatesFilter<"FacebookEvent"> | Date | string
    funnelStage?: StringWithAggregatesFilter<"FacebookEvent"> | string
    eventType?: StringWithAggregatesFilter<"FacebookEvent"> | string
    userId?: StringWithAggregatesFilter<"FacebookEvent"> | string
  }

  export type FacebookEngagementTopWhereInput = {
    AND?: FacebookEngagementTopWhereInput | FacebookEngagementTopWhereInput[]
    OR?: FacebookEngagementTopWhereInput[]
    NOT?: FacebookEngagementTopWhereInput | FacebookEngagementTopWhereInput[]
    facebookEventId?: StringFilter<"FacebookEngagementTop"> | string
    actionTime?: DateTimeFilter<"FacebookEngagementTop"> | Date | string
    referrer?: StringFilter<"FacebookEngagementTop"> | string
    videoId?: StringNullableFilter<"FacebookEngagementTop"> | string | null
    facebookEvent?: XOR<FacebookEventScalarRelationFilter, FacebookEventWhereInput>
  }

  export type FacebookEngagementTopOrderByWithRelationInput = {
    facebookEventId?: SortOrder
    actionTime?: SortOrder
    referrer?: SortOrder
    videoId?: SortOrderInput | SortOrder
    facebookEvent?: FacebookEventOrderByWithRelationInput
  }

  export type FacebookEngagementTopWhereUniqueInput = Prisma.AtLeast<{
    facebookEventId?: string
    AND?: FacebookEngagementTopWhereInput | FacebookEngagementTopWhereInput[]
    OR?: FacebookEngagementTopWhereInput[]
    NOT?: FacebookEngagementTopWhereInput | FacebookEngagementTopWhereInput[]
    actionTime?: DateTimeFilter<"FacebookEngagementTop"> | Date | string
    referrer?: StringFilter<"FacebookEngagementTop"> | string
    videoId?: StringNullableFilter<"FacebookEngagementTop"> | string | null
    facebookEvent?: XOR<FacebookEventScalarRelationFilter, FacebookEventWhereInput>
  }, "facebookEventId">

  export type FacebookEngagementTopOrderByWithAggregationInput = {
    facebookEventId?: SortOrder
    actionTime?: SortOrder
    referrer?: SortOrder
    videoId?: SortOrderInput | SortOrder
    _count?: FacebookEngagementTopCountOrderByAggregateInput
    _max?: FacebookEngagementTopMaxOrderByAggregateInput
    _min?: FacebookEngagementTopMinOrderByAggregateInput
  }

  export type FacebookEngagementTopScalarWhereWithAggregatesInput = {
    AND?: FacebookEngagementTopScalarWhereWithAggregatesInput | FacebookEngagementTopScalarWhereWithAggregatesInput[]
    OR?: FacebookEngagementTopScalarWhereWithAggregatesInput[]
    NOT?: FacebookEngagementTopScalarWhereWithAggregatesInput | FacebookEngagementTopScalarWhereWithAggregatesInput[]
    facebookEventId?: StringWithAggregatesFilter<"FacebookEngagementTop"> | string
    actionTime?: DateTimeWithAggregatesFilter<"FacebookEngagementTop"> | Date | string
    referrer?: StringWithAggregatesFilter<"FacebookEngagementTop"> | string
    videoId?: StringNullableWithAggregatesFilter<"FacebookEngagementTop"> | string | null
  }

  export type FacebookEngagementBottomWhereInput = {
    AND?: FacebookEngagementBottomWhereInput | FacebookEngagementBottomWhereInput[]
    OR?: FacebookEngagementBottomWhereInput[]
    NOT?: FacebookEngagementBottomWhereInput | FacebookEngagementBottomWhereInput[]
    facebookEventId?: StringFilter<"FacebookEngagementBottom"> | string
    adId?: StringFilter<"FacebookEngagementBottom"> | string
    campaignId?: StringFilter<"FacebookEngagementBottom"> | string
    clickPosition?: StringFilter<"FacebookEngagementBottom"> | string
    device?: StringFilter<"FacebookEngagementBottom"> | string
    browser?: StringFilter<"FacebookEngagementBottom"> | string
    purchaseAmount?: DecimalNullableFilter<"FacebookEngagementBottom"> | Decimal | DecimalJsLike | number | string | null
    facebookEvent?: XOR<FacebookEventScalarRelationFilter, FacebookEventWhereInput>
  }

  export type FacebookEngagementBottomOrderByWithRelationInput = {
    facebookEventId?: SortOrder
    adId?: SortOrder
    campaignId?: SortOrder
    clickPosition?: SortOrder
    device?: SortOrder
    browser?: SortOrder
    purchaseAmount?: SortOrderInput | SortOrder
    facebookEvent?: FacebookEventOrderByWithRelationInput
  }

  export type FacebookEngagementBottomWhereUniqueInput = Prisma.AtLeast<{
    facebookEventId?: string
    AND?: FacebookEngagementBottomWhereInput | FacebookEngagementBottomWhereInput[]
    OR?: FacebookEngagementBottomWhereInput[]
    NOT?: FacebookEngagementBottomWhereInput | FacebookEngagementBottomWhereInput[]
    adId?: StringFilter<"FacebookEngagementBottom"> | string
    campaignId?: StringFilter<"FacebookEngagementBottom"> | string
    clickPosition?: StringFilter<"FacebookEngagementBottom"> | string
    device?: StringFilter<"FacebookEngagementBottom"> | string
    browser?: StringFilter<"FacebookEngagementBottom"> | string
    purchaseAmount?: DecimalNullableFilter<"FacebookEngagementBottom"> | Decimal | DecimalJsLike | number | string | null
    facebookEvent?: XOR<FacebookEventScalarRelationFilter, FacebookEventWhereInput>
  }, "facebookEventId">

  export type FacebookEngagementBottomOrderByWithAggregationInput = {
    facebookEventId?: SortOrder
    adId?: SortOrder
    campaignId?: SortOrder
    clickPosition?: SortOrder
    device?: SortOrder
    browser?: SortOrder
    purchaseAmount?: SortOrderInput | SortOrder
    _count?: FacebookEngagementBottomCountOrderByAggregateInput
    _avg?: FacebookEngagementBottomAvgOrderByAggregateInput
    _max?: FacebookEngagementBottomMaxOrderByAggregateInput
    _min?: FacebookEngagementBottomMinOrderByAggregateInput
    _sum?: FacebookEngagementBottomSumOrderByAggregateInput
  }

  export type FacebookEngagementBottomScalarWhereWithAggregatesInput = {
    AND?: FacebookEngagementBottomScalarWhereWithAggregatesInput | FacebookEngagementBottomScalarWhereWithAggregatesInput[]
    OR?: FacebookEngagementBottomScalarWhereWithAggregatesInput[]
    NOT?: FacebookEngagementBottomScalarWhereWithAggregatesInput | FacebookEngagementBottomScalarWhereWithAggregatesInput[]
    facebookEventId?: StringWithAggregatesFilter<"FacebookEngagementBottom"> | string
    adId?: StringWithAggregatesFilter<"FacebookEngagementBottom"> | string
    campaignId?: StringWithAggregatesFilter<"FacebookEngagementBottom"> | string
    clickPosition?: StringWithAggregatesFilter<"FacebookEngagementBottom"> | string
    device?: StringWithAggregatesFilter<"FacebookEngagementBottom"> | string
    browser?: StringWithAggregatesFilter<"FacebookEngagementBottom"> | string
    purchaseAmount?: DecimalNullableWithAggregatesFilter<"FacebookEngagementBottom"> | Decimal | DecimalJsLike | number | string | null
  }

  export type TiktokUserWhereInput = {
    AND?: TiktokUserWhereInput | TiktokUserWhereInput[]
    OR?: TiktokUserWhereInput[]
    NOT?: TiktokUserWhereInput | TiktokUserWhereInput[]
    userId?: StringFilter<"TiktokUser"> | string
    username?: StringFilter<"TiktokUser"> | string
    followers?: IntFilter<"TiktokUser"> | number
    events?: TiktokEventListRelationFilter
  }

  export type TiktokUserOrderByWithRelationInput = {
    userId?: SortOrder
    username?: SortOrder
    followers?: SortOrder
    events?: TiktokEventOrderByRelationAggregateInput
  }

  export type TiktokUserWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    AND?: TiktokUserWhereInput | TiktokUserWhereInput[]
    OR?: TiktokUserWhereInput[]
    NOT?: TiktokUserWhereInput | TiktokUserWhereInput[]
    username?: StringFilter<"TiktokUser"> | string
    followers?: IntFilter<"TiktokUser"> | number
    events?: TiktokEventListRelationFilter
  }, "userId">

  export type TiktokUserOrderByWithAggregationInput = {
    userId?: SortOrder
    username?: SortOrder
    followers?: SortOrder
    _count?: TiktokUserCountOrderByAggregateInput
    _avg?: TiktokUserAvgOrderByAggregateInput
    _max?: TiktokUserMaxOrderByAggregateInput
    _min?: TiktokUserMinOrderByAggregateInput
    _sum?: TiktokUserSumOrderByAggregateInput
  }

  export type TiktokUserScalarWhereWithAggregatesInput = {
    AND?: TiktokUserScalarWhereWithAggregatesInput | TiktokUserScalarWhereWithAggregatesInput[]
    OR?: TiktokUserScalarWhereWithAggregatesInput[]
    NOT?: TiktokUserScalarWhereWithAggregatesInput | TiktokUserScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"TiktokUser"> | string
    username?: StringWithAggregatesFilter<"TiktokUser"> | string
    followers?: IntWithAggregatesFilter<"TiktokUser"> | number
  }

  export type TiktokEventWhereInput = {
    AND?: TiktokEventWhereInput | TiktokEventWhereInput[]
    OR?: TiktokEventWhereInput[]
    NOT?: TiktokEventWhereInput | TiktokEventWhereInput[]
    eventId?: StringFilter<"TiktokEvent"> | string
    timestamp?: DateTimeFilter<"TiktokEvent"> | Date | string
    funnelStage?: StringFilter<"TiktokEvent"> | string
    eventType?: StringFilter<"TiktokEvent"> | string
    userId?: StringFilter<"TiktokEvent"> | string
    user?: XOR<TiktokUserScalarRelationFilter, TiktokUserWhereInput>
    engagementTop?: XOR<TiktokEngagementTopNullableScalarRelationFilter, TiktokEngagementTopWhereInput> | null
    engagementBottom?: XOR<TiktokEngagementBottomNullableScalarRelationFilter, TiktokEngagementBottomWhereInput> | null
  }

  export type TiktokEventOrderByWithRelationInput = {
    eventId?: SortOrder
    timestamp?: SortOrder
    funnelStage?: SortOrder
    eventType?: SortOrder
    userId?: SortOrder
    user?: TiktokUserOrderByWithRelationInput
    engagementTop?: TiktokEngagementTopOrderByWithRelationInput
    engagementBottom?: TiktokEngagementBottomOrderByWithRelationInput
  }

  export type TiktokEventWhereUniqueInput = Prisma.AtLeast<{
    eventId?: string
    AND?: TiktokEventWhereInput | TiktokEventWhereInput[]
    OR?: TiktokEventWhereInput[]
    NOT?: TiktokEventWhereInput | TiktokEventWhereInput[]
    timestamp?: DateTimeFilter<"TiktokEvent"> | Date | string
    funnelStage?: StringFilter<"TiktokEvent"> | string
    eventType?: StringFilter<"TiktokEvent"> | string
    userId?: StringFilter<"TiktokEvent"> | string
    user?: XOR<TiktokUserScalarRelationFilter, TiktokUserWhereInput>
    engagementTop?: XOR<TiktokEngagementTopNullableScalarRelationFilter, TiktokEngagementTopWhereInput> | null
    engagementBottom?: XOR<TiktokEngagementBottomNullableScalarRelationFilter, TiktokEngagementBottomWhereInput> | null
  }, "eventId">

  export type TiktokEventOrderByWithAggregationInput = {
    eventId?: SortOrder
    timestamp?: SortOrder
    funnelStage?: SortOrder
    eventType?: SortOrder
    userId?: SortOrder
    _count?: TiktokEventCountOrderByAggregateInput
    _max?: TiktokEventMaxOrderByAggregateInput
    _min?: TiktokEventMinOrderByAggregateInput
  }

  export type TiktokEventScalarWhereWithAggregatesInput = {
    AND?: TiktokEventScalarWhereWithAggregatesInput | TiktokEventScalarWhereWithAggregatesInput[]
    OR?: TiktokEventScalarWhereWithAggregatesInput[]
    NOT?: TiktokEventScalarWhereWithAggregatesInput | TiktokEventScalarWhereWithAggregatesInput[]
    eventId?: StringWithAggregatesFilter<"TiktokEvent"> | string
    timestamp?: DateTimeWithAggregatesFilter<"TiktokEvent"> | Date | string
    funnelStage?: StringWithAggregatesFilter<"TiktokEvent"> | string
    eventType?: StringWithAggregatesFilter<"TiktokEvent"> | string
    userId?: StringWithAggregatesFilter<"TiktokEvent"> | string
  }

  export type TiktokEngagementTopWhereInput = {
    AND?: TiktokEngagementTopWhereInput | TiktokEngagementTopWhereInput[]
    OR?: TiktokEngagementTopWhereInput[]
    NOT?: TiktokEngagementTopWhereInput | TiktokEngagementTopWhereInput[]
    tiktokEventId?: StringFilter<"TiktokEngagementTop"> | string
    watchTime?: IntFilter<"TiktokEngagementTop"> | number
    percentageWatched?: IntFilter<"TiktokEngagementTop"> | number
    device?: StringFilter<"TiktokEngagementTop"> | string
    country?: StringFilter<"TiktokEngagementTop"> | string
    videoId?: StringFilter<"TiktokEngagementTop"> | string
    tiktokEvent?: XOR<TiktokEventScalarRelationFilter, TiktokEventWhereInput>
  }

  export type TiktokEngagementTopOrderByWithRelationInput = {
    tiktokEventId?: SortOrder
    watchTime?: SortOrder
    percentageWatched?: SortOrder
    device?: SortOrder
    country?: SortOrder
    videoId?: SortOrder
    tiktokEvent?: TiktokEventOrderByWithRelationInput
  }

  export type TiktokEngagementTopWhereUniqueInput = Prisma.AtLeast<{
    tiktokEventId?: string
    AND?: TiktokEngagementTopWhereInput | TiktokEngagementTopWhereInput[]
    OR?: TiktokEngagementTopWhereInput[]
    NOT?: TiktokEngagementTopWhereInput | TiktokEngagementTopWhereInput[]
    watchTime?: IntFilter<"TiktokEngagementTop"> | number
    percentageWatched?: IntFilter<"TiktokEngagementTop"> | number
    device?: StringFilter<"TiktokEngagementTop"> | string
    country?: StringFilter<"TiktokEngagementTop"> | string
    videoId?: StringFilter<"TiktokEngagementTop"> | string
    tiktokEvent?: XOR<TiktokEventScalarRelationFilter, TiktokEventWhereInput>
  }, "tiktokEventId">

  export type TiktokEngagementTopOrderByWithAggregationInput = {
    tiktokEventId?: SortOrder
    watchTime?: SortOrder
    percentageWatched?: SortOrder
    device?: SortOrder
    country?: SortOrder
    videoId?: SortOrder
    _count?: TiktokEngagementTopCountOrderByAggregateInput
    _avg?: TiktokEngagementTopAvgOrderByAggregateInput
    _max?: TiktokEngagementTopMaxOrderByAggregateInput
    _min?: TiktokEngagementTopMinOrderByAggregateInput
    _sum?: TiktokEngagementTopSumOrderByAggregateInput
  }

  export type TiktokEngagementTopScalarWhereWithAggregatesInput = {
    AND?: TiktokEngagementTopScalarWhereWithAggregatesInput | TiktokEngagementTopScalarWhereWithAggregatesInput[]
    OR?: TiktokEngagementTopScalarWhereWithAggregatesInput[]
    NOT?: TiktokEngagementTopScalarWhereWithAggregatesInput | TiktokEngagementTopScalarWhereWithAggregatesInput[]
    tiktokEventId?: StringWithAggregatesFilter<"TiktokEngagementTop"> | string
    watchTime?: IntWithAggregatesFilter<"TiktokEngagementTop"> | number
    percentageWatched?: IntWithAggregatesFilter<"TiktokEngagementTop"> | number
    device?: StringWithAggregatesFilter<"TiktokEngagementTop"> | string
    country?: StringWithAggregatesFilter<"TiktokEngagementTop"> | string
    videoId?: StringWithAggregatesFilter<"TiktokEngagementTop"> | string
  }

  export type TiktokEngagementBottomWhereInput = {
    AND?: TiktokEngagementBottomWhereInput | TiktokEngagementBottomWhereInput[]
    OR?: TiktokEngagementBottomWhereInput[]
    NOT?: TiktokEngagementBottomWhereInput | TiktokEngagementBottomWhereInput[]
    tiktokEventId?: StringFilter<"TiktokEngagementBottom"> | string
    actionTime?: DateTimeFilter<"TiktokEngagementBottom"> | Date | string
    profileId?: StringNullableFilter<"TiktokEngagementBottom"> | string | null
    purchasedItem?: StringNullableFilter<"TiktokEngagementBottom"> | string | null
    purchaseAmount?: DecimalNullableFilter<"TiktokEngagementBottom"> | Decimal | DecimalJsLike | number | string | null
    tiktokEvent?: XOR<TiktokEventScalarRelationFilter, TiktokEventWhereInput>
  }

  export type TiktokEngagementBottomOrderByWithRelationInput = {
    tiktokEventId?: SortOrder
    actionTime?: SortOrder
    profileId?: SortOrderInput | SortOrder
    purchasedItem?: SortOrderInput | SortOrder
    purchaseAmount?: SortOrderInput | SortOrder
    tiktokEvent?: TiktokEventOrderByWithRelationInput
  }

  export type TiktokEngagementBottomWhereUniqueInput = Prisma.AtLeast<{
    tiktokEventId?: string
    AND?: TiktokEngagementBottomWhereInput | TiktokEngagementBottomWhereInput[]
    OR?: TiktokEngagementBottomWhereInput[]
    NOT?: TiktokEngagementBottomWhereInput | TiktokEngagementBottomWhereInput[]
    actionTime?: DateTimeFilter<"TiktokEngagementBottom"> | Date | string
    profileId?: StringNullableFilter<"TiktokEngagementBottom"> | string | null
    purchasedItem?: StringNullableFilter<"TiktokEngagementBottom"> | string | null
    purchaseAmount?: DecimalNullableFilter<"TiktokEngagementBottom"> | Decimal | DecimalJsLike | number | string | null
    tiktokEvent?: XOR<TiktokEventScalarRelationFilter, TiktokEventWhereInput>
  }, "tiktokEventId">

  export type TiktokEngagementBottomOrderByWithAggregationInput = {
    tiktokEventId?: SortOrder
    actionTime?: SortOrder
    profileId?: SortOrderInput | SortOrder
    purchasedItem?: SortOrderInput | SortOrder
    purchaseAmount?: SortOrderInput | SortOrder
    _count?: TiktokEngagementBottomCountOrderByAggregateInput
    _avg?: TiktokEngagementBottomAvgOrderByAggregateInput
    _max?: TiktokEngagementBottomMaxOrderByAggregateInput
    _min?: TiktokEngagementBottomMinOrderByAggregateInput
    _sum?: TiktokEngagementBottomSumOrderByAggregateInput
  }

  export type TiktokEngagementBottomScalarWhereWithAggregatesInput = {
    AND?: TiktokEngagementBottomScalarWhereWithAggregatesInput | TiktokEngagementBottomScalarWhereWithAggregatesInput[]
    OR?: TiktokEngagementBottomScalarWhereWithAggregatesInput[]
    NOT?: TiktokEngagementBottomScalarWhereWithAggregatesInput | TiktokEngagementBottomScalarWhereWithAggregatesInput[]
    tiktokEventId?: StringWithAggregatesFilter<"TiktokEngagementBottom"> | string
    actionTime?: DateTimeWithAggregatesFilter<"TiktokEngagementBottom"> | Date | string
    profileId?: StringNullableWithAggregatesFilter<"TiktokEngagementBottom"> | string | null
    purchasedItem?: StringNullableWithAggregatesFilter<"TiktokEngagementBottom"> | string | null
    purchaseAmount?: DecimalNullableWithAggregatesFilter<"TiktokEngagementBottom"> | Decimal | DecimalJsLike | number | string | null
  }

  export type FacebookUserCreateInput = {
    userId: string
    name: string
    age: number
    gender: string
    country: string
    city: string
    events?: FacebookEventCreateNestedManyWithoutUserInput
  }

  export type FacebookUserUncheckedCreateInput = {
    userId: string
    name: string
    age: number
    gender: string
    country: string
    city: string
    events?: FacebookEventUncheckedCreateNestedManyWithoutUserInput
  }

  export type FacebookUserUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    events?: FacebookEventUpdateManyWithoutUserNestedInput
  }

  export type FacebookUserUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    events?: FacebookEventUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FacebookUserCreateManyInput = {
    userId: string
    name: string
    age: number
    gender: string
    country: string
    city: string
  }

  export type FacebookUserUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
  }

  export type FacebookUserUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
  }

  export type FacebookEventCreateInput = {
    eventId: string
    timestamp: Date | string
    funnelStage: string
    eventType: string
    user: FacebookUserCreateNestedOneWithoutEventsInput
    engagementTop?: FacebookEngagementTopCreateNestedOneWithoutFacebookEventInput
    engagementBottom?: FacebookEngagementBottomCreateNestedOneWithoutFacebookEventInput
  }

  export type FacebookEventUncheckedCreateInput = {
    eventId: string
    timestamp: Date | string
    funnelStage: string
    eventType: string
    userId: string
    engagementTop?: FacebookEngagementTopUncheckedCreateNestedOneWithoutFacebookEventInput
    engagementBottom?: FacebookEngagementBottomUncheckedCreateNestedOneWithoutFacebookEventInput
  }

  export type FacebookEventUpdateInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    funnelStage?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    user?: FacebookUserUpdateOneRequiredWithoutEventsNestedInput
    engagementTop?: FacebookEngagementTopUpdateOneWithoutFacebookEventNestedInput
    engagementBottom?: FacebookEngagementBottomUpdateOneWithoutFacebookEventNestedInput
  }

  export type FacebookEventUncheckedUpdateInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    funnelStage?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    engagementTop?: FacebookEngagementTopUncheckedUpdateOneWithoutFacebookEventNestedInput
    engagementBottom?: FacebookEngagementBottomUncheckedUpdateOneWithoutFacebookEventNestedInput
  }

  export type FacebookEventCreateManyInput = {
    eventId: string
    timestamp: Date | string
    funnelStage: string
    eventType: string
    userId: string
  }

  export type FacebookEventUpdateManyMutationInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    funnelStage?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
  }

  export type FacebookEventUncheckedUpdateManyInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    funnelStage?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type FacebookEngagementTopCreateInput = {
    actionTime: Date | string
    referrer: string
    videoId?: string | null
    facebookEvent: FacebookEventCreateNestedOneWithoutEngagementTopInput
  }

  export type FacebookEngagementTopUncheckedCreateInput = {
    facebookEventId: string
    actionTime: Date | string
    referrer: string
    videoId?: string | null
  }

  export type FacebookEngagementTopUpdateInput = {
    actionTime?: DateTimeFieldUpdateOperationsInput | Date | string
    referrer?: StringFieldUpdateOperationsInput | string
    videoId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookEvent?: FacebookEventUpdateOneRequiredWithoutEngagementTopNestedInput
  }

  export type FacebookEngagementTopUncheckedUpdateInput = {
    facebookEventId?: StringFieldUpdateOperationsInput | string
    actionTime?: DateTimeFieldUpdateOperationsInput | Date | string
    referrer?: StringFieldUpdateOperationsInput | string
    videoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FacebookEngagementTopCreateManyInput = {
    facebookEventId: string
    actionTime: Date | string
    referrer: string
    videoId?: string | null
  }

  export type FacebookEngagementTopUpdateManyMutationInput = {
    actionTime?: DateTimeFieldUpdateOperationsInput | Date | string
    referrer?: StringFieldUpdateOperationsInput | string
    videoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FacebookEngagementTopUncheckedUpdateManyInput = {
    facebookEventId?: StringFieldUpdateOperationsInput | string
    actionTime?: DateTimeFieldUpdateOperationsInput | Date | string
    referrer?: StringFieldUpdateOperationsInput | string
    videoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FacebookEngagementBottomCreateInput = {
    adId: string
    campaignId: string
    clickPosition: string
    device: string
    browser: string
    purchaseAmount?: Decimal | DecimalJsLike | number | string | null
    facebookEvent: FacebookEventCreateNestedOneWithoutEngagementBottomInput
  }

  export type FacebookEngagementBottomUncheckedCreateInput = {
    facebookEventId: string
    adId: string
    campaignId: string
    clickPosition: string
    device: string
    browser: string
    purchaseAmount?: Decimal | DecimalJsLike | number | string | null
  }

  export type FacebookEngagementBottomUpdateInput = {
    adId?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    clickPosition?: StringFieldUpdateOperationsInput | string
    device?: StringFieldUpdateOperationsInput | string
    browser?: StringFieldUpdateOperationsInput | string
    purchaseAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    facebookEvent?: FacebookEventUpdateOneRequiredWithoutEngagementBottomNestedInput
  }

  export type FacebookEngagementBottomUncheckedUpdateInput = {
    facebookEventId?: StringFieldUpdateOperationsInput | string
    adId?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    clickPosition?: StringFieldUpdateOperationsInput | string
    device?: StringFieldUpdateOperationsInput | string
    browser?: StringFieldUpdateOperationsInput | string
    purchaseAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type FacebookEngagementBottomCreateManyInput = {
    facebookEventId: string
    adId: string
    campaignId: string
    clickPosition: string
    device: string
    browser: string
    purchaseAmount?: Decimal | DecimalJsLike | number | string | null
  }

  export type FacebookEngagementBottomUpdateManyMutationInput = {
    adId?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    clickPosition?: StringFieldUpdateOperationsInput | string
    device?: StringFieldUpdateOperationsInput | string
    browser?: StringFieldUpdateOperationsInput | string
    purchaseAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type FacebookEngagementBottomUncheckedUpdateManyInput = {
    facebookEventId?: StringFieldUpdateOperationsInput | string
    adId?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    clickPosition?: StringFieldUpdateOperationsInput | string
    device?: StringFieldUpdateOperationsInput | string
    browser?: StringFieldUpdateOperationsInput | string
    purchaseAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type TiktokUserCreateInput = {
    userId: string
    username: string
    followers: number
    events?: TiktokEventCreateNestedManyWithoutUserInput
  }

  export type TiktokUserUncheckedCreateInput = {
    userId: string
    username: string
    followers: number
    events?: TiktokEventUncheckedCreateNestedManyWithoutUserInput
  }

  export type TiktokUserUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    followers?: IntFieldUpdateOperationsInput | number
    events?: TiktokEventUpdateManyWithoutUserNestedInput
  }

  export type TiktokUserUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    followers?: IntFieldUpdateOperationsInput | number
    events?: TiktokEventUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TiktokUserCreateManyInput = {
    userId: string
    username: string
    followers: number
  }

  export type TiktokUserUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    followers?: IntFieldUpdateOperationsInput | number
  }

  export type TiktokUserUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    followers?: IntFieldUpdateOperationsInput | number
  }

  export type TiktokEventCreateInput = {
    eventId: string
    timestamp: Date | string
    funnelStage: string
    eventType: string
    user: TiktokUserCreateNestedOneWithoutEventsInput
    engagementTop?: TiktokEngagementTopCreateNestedOneWithoutTiktokEventInput
    engagementBottom?: TiktokEngagementBottomCreateNestedOneWithoutTiktokEventInput
  }

  export type TiktokEventUncheckedCreateInput = {
    eventId: string
    timestamp: Date | string
    funnelStage: string
    eventType: string
    userId: string
    engagementTop?: TiktokEngagementTopUncheckedCreateNestedOneWithoutTiktokEventInput
    engagementBottom?: TiktokEngagementBottomUncheckedCreateNestedOneWithoutTiktokEventInput
  }

  export type TiktokEventUpdateInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    funnelStage?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    user?: TiktokUserUpdateOneRequiredWithoutEventsNestedInput
    engagementTop?: TiktokEngagementTopUpdateOneWithoutTiktokEventNestedInput
    engagementBottom?: TiktokEngagementBottomUpdateOneWithoutTiktokEventNestedInput
  }

  export type TiktokEventUncheckedUpdateInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    funnelStage?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    engagementTop?: TiktokEngagementTopUncheckedUpdateOneWithoutTiktokEventNestedInput
    engagementBottom?: TiktokEngagementBottomUncheckedUpdateOneWithoutTiktokEventNestedInput
  }

  export type TiktokEventCreateManyInput = {
    eventId: string
    timestamp: Date | string
    funnelStage: string
    eventType: string
    userId: string
  }

  export type TiktokEventUpdateManyMutationInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    funnelStage?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
  }

  export type TiktokEventUncheckedUpdateManyInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    funnelStage?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TiktokEngagementTopCreateInput = {
    watchTime: number
    percentageWatched: number
    device: string
    country: string
    videoId: string
    tiktokEvent: TiktokEventCreateNestedOneWithoutEngagementTopInput
  }

  export type TiktokEngagementTopUncheckedCreateInput = {
    tiktokEventId: string
    watchTime: number
    percentageWatched: number
    device: string
    country: string
    videoId: string
  }

  export type TiktokEngagementTopUpdateInput = {
    watchTime?: IntFieldUpdateOperationsInput | number
    percentageWatched?: IntFieldUpdateOperationsInput | number
    device?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    tiktokEvent?: TiktokEventUpdateOneRequiredWithoutEngagementTopNestedInput
  }

  export type TiktokEngagementTopUncheckedUpdateInput = {
    tiktokEventId?: StringFieldUpdateOperationsInput | string
    watchTime?: IntFieldUpdateOperationsInput | number
    percentageWatched?: IntFieldUpdateOperationsInput | number
    device?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
  }

  export type TiktokEngagementTopCreateManyInput = {
    tiktokEventId: string
    watchTime: number
    percentageWatched: number
    device: string
    country: string
    videoId: string
  }

  export type TiktokEngagementTopUpdateManyMutationInput = {
    watchTime?: IntFieldUpdateOperationsInput | number
    percentageWatched?: IntFieldUpdateOperationsInput | number
    device?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
  }

  export type TiktokEngagementTopUncheckedUpdateManyInput = {
    tiktokEventId?: StringFieldUpdateOperationsInput | string
    watchTime?: IntFieldUpdateOperationsInput | number
    percentageWatched?: IntFieldUpdateOperationsInput | number
    device?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
  }

  export type TiktokEngagementBottomCreateInput = {
    actionTime: Date | string
    profileId?: string | null
    purchasedItem?: string | null
    purchaseAmount?: Decimal | DecimalJsLike | number | string | null
    tiktokEvent: TiktokEventCreateNestedOneWithoutEngagementBottomInput
  }

  export type TiktokEngagementBottomUncheckedCreateInput = {
    tiktokEventId: string
    actionTime: Date | string
    profileId?: string | null
    purchasedItem?: string | null
    purchaseAmount?: Decimal | DecimalJsLike | number | string | null
  }

  export type TiktokEngagementBottomUpdateInput = {
    actionTime?: DateTimeFieldUpdateOperationsInput | Date | string
    profileId?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedItem?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tiktokEvent?: TiktokEventUpdateOneRequiredWithoutEngagementBottomNestedInput
  }

  export type TiktokEngagementBottomUncheckedUpdateInput = {
    tiktokEventId?: StringFieldUpdateOperationsInput | string
    actionTime?: DateTimeFieldUpdateOperationsInput | Date | string
    profileId?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedItem?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type TiktokEngagementBottomCreateManyInput = {
    tiktokEventId: string
    actionTime: Date | string
    profileId?: string | null
    purchasedItem?: string | null
    purchaseAmount?: Decimal | DecimalJsLike | number | string | null
  }

  export type TiktokEngagementBottomUpdateManyMutationInput = {
    actionTime?: DateTimeFieldUpdateOperationsInput | Date | string
    profileId?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedItem?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type TiktokEngagementBottomUncheckedUpdateManyInput = {
    tiktokEventId?: StringFieldUpdateOperationsInput | string
    actionTime?: DateTimeFieldUpdateOperationsInput | Date | string
    profileId?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedItem?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FacebookEventListRelationFilter = {
    every?: FacebookEventWhereInput
    some?: FacebookEventWhereInput
    none?: FacebookEventWhereInput
  }

  export type FacebookEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FacebookUserCountOrderByAggregateInput = {
    userId?: SortOrder
    name?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    country?: SortOrder
    city?: SortOrder
  }

  export type FacebookUserAvgOrderByAggregateInput = {
    age?: SortOrder
  }

  export type FacebookUserMaxOrderByAggregateInput = {
    userId?: SortOrder
    name?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    country?: SortOrder
    city?: SortOrder
  }

  export type FacebookUserMinOrderByAggregateInput = {
    userId?: SortOrder
    name?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    country?: SortOrder
    city?: SortOrder
  }

  export type FacebookUserSumOrderByAggregateInput = {
    age?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FacebookUserScalarRelationFilter = {
    is?: FacebookUserWhereInput
    isNot?: FacebookUserWhereInput
  }

  export type FacebookEngagementTopNullableScalarRelationFilter = {
    is?: FacebookEngagementTopWhereInput | null
    isNot?: FacebookEngagementTopWhereInput | null
  }

  export type FacebookEngagementBottomNullableScalarRelationFilter = {
    is?: FacebookEngagementBottomWhereInput | null
    isNot?: FacebookEngagementBottomWhereInput | null
  }

  export type FacebookEventCountOrderByAggregateInput = {
    eventId?: SortOrder
    timestamp?: SortOrder
    funnelStage?: SortOrder
    eventType?: SortOrder
    userId?: SortOrder
  }

  export type FacebookEventMaxOrderByAggregateInput = {
    eventId?: SortOrder
    timestamp?: SortOrder
    funnelStage?: SortOrder
    eventType?: SortOrder
    userId?: SortOrder
  }

  export type FacebookEventMinOrderByAggregateInput = {
    eventId?: SortOrder
    timestamp?: SortOrder
    funnelStage?: SortOrder
    eventType?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FacebookEventScalarRelationFilter = {
    is?: FacebookEventWhereInput
    isNot?: FacebookEventWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FacebookEngagementTopCountOrderByAggregateInput = {
    facebookEventId?: SortOrder
    actionTime?: SortOrder
    referrer?: SortOrder
    videoId?: SortOrder
  }

  export type FacebookEngagementTopMaxOrderByAggregateInput = {
    facebookEventId?: SortOrder
    actionTime?: SortOrder
    referrer?: SortOrder
    videoId?: SortOrder
  }

  export type FacebookEngagementTopMinOrderByAggregateInput = {
    facebookEventId?: SortOrder
    actionTime?: SortOrder
    referrer?: SortOrder
    videoId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type FacebookEngagementBottomCountOrderByAggregateInput = {
    facebookEventId?: SortOrder
    adId?: SortOrder
    campaignId?: SortOrder
    clickPosition?: SortOrder
    device?: SortOrder
    browser?: SortOrder
    purchaseAmount?: SortOrder
  }

  export type FacebookEngagementBottomAvgOrderByAggregateInput = {
    purchaseAmount?: SortOrder
  }

  export type FacebookEngagementBottomMaxOrderByAggregateInput = {
    facebookEventId?: SortOrder
    adId?: SortOrder
    campaignId?: SortOrder
    clickPosition?: SortOrder
    device?: SortOrder
    browser?: SortOrder
    purchaseAmount?: SortOrder
  }

  export type FacebookEngagementBottomMinOrderByAggregateInput = {
    facebookEventId?: SortOrder
    adId?: SortOrder
    campaignId?: SortOrder
    clickPosition?: SortOrder
    device?: SortOrder
    browser?: SortOrder
    purchaseAmount?: SortOrder
  }

  export type FacebookEngagementBottomSumOrderByAggregateInput = {
    purchaseAmount?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type TiktokEventListRelationFilter = {
    every?: TiktokEventWhereInput
    some?: TiktokEventWhereInput
    none?: TiktokEventWhereInput
  }

  export type TiktokEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TiktokUserCountOrderByAggregateInput = {
    userId?: SortOrder
    username?: SortOrder
    followers?: SortOrder
  }

  export type TiktokUserAvgOrderByAggregateInput = {
    followers?: SortOrder
  }

  export type TiktokUserMaxOrderByAggregateInput = {
    userId?: SortOrder
    username?: SortOrder
    followers?: SortOrder
  }

  export type TiktokUserMinOrderByAggregateInput = {
    userId?: SortOrder
    username?: SortOrder
    followers?: SortOrder
  }

  export type TiktokUserSumOrderByAggregateInput = {
    followers?: SortOrder
  }

  export type TiktokUserScalarRelationFilter = {
    is?: TiktokUserWhereInput
    isNot?: TiktokUserWhereInput
  }

  export type TiktokEngagementTopNullableScalarRelationFilter = {
    is?: TiktokEngagementTopWhereInput | null
    isNot?: TiktokEngagementTopWhereInput | null
  }

  export type TiktokEngagementBottomNullableScalarRelationFilter = {
    is?: TiktokEngagementBottomWhereInput | null
    isNot?: TiktokEngagementBottomWhereInput | null
  }

  export type TiktokEventCountOrderByAggregateInput = {
    eventId?: SortOrder
    timestamp?: SortOrder
    funnelStage?: SortOrder
    eventType?: SortOrder
    userId?: SortOrder
  }

  export type TiktokEventMaxOrderByAggregateInput = {
    eventId?: SortOrder
    timestamp?: SortOrder
    funnelStage?: SortOrder
    eventType?: SortOrder
    userId?: SortOrder
  }

  export type TiktokEventMinOrderByAggregateInput = {
    eventId?: SortOrder
    timestamp?: SortOrder
    funnelStage?: SortOrder
    eventType?: SortOrder
    userId?: SortOrder
  }

  export type TiktokEventScalarRelationFilter = {
    is?: TiktokEventWhereInput
    isNot?: TiktokEventWhereInput
  }

  export type TiktokEngagementTopCountOrderByAggregateInput = {
    tiktokEventId?: SortOrder
    watchTime?: SortOrder
    percentageWatched?: SortOrder
    device?: SortOrder
    country?: SortOrder
    videoId?: SortOrder
  }

  export type TiktokEngagementTopAvgOrderByAggregateInput = {
    watchTime?: SortOrder
    percentageWatched?: SortOrder
  }

  export type TiktokEngagementTopMaxOrderByAggregateInput = {
    tiktokEventId?: SortOrder
    watchTime?: SortOrder
    percentageWatched?: SortOrder
    device?: SortOrder
    country?: SortOrder
    videoId?: SortOrder
  }

  export type TiktokEngagementTopMinOrderByAggregateInput = {
    tiktokEventId?: SortOrder
    watchTime?: SortOrder
    percentageWatched?: SortOrder
    device?: SortOrder
    country?: SortOrder
    videoId?: SortOrder
  }

  export type TiktokEngagementTopSumOrderByAggregateInput = {
    watchTime?: SortOrder
    percentageWatched?: SortOrder
  }

  export type TiktokEngagementBottomCountOrderByAggregateInput = {
    tiktokEventId?: SortOrder
    actionTime?: SortOrder
    profileId?: SortOrder
    purchasedItem?: SortOrder
    purchaseAmount?: SortOrder
  }

  export type TiktokEngagementBottomAvgOrderByAggregateInput = {
    purchaseAmount?: SortOrder
  }

  export type TiktokEngagementBottomMaxOrderByAggregateInput = {
    tiktokEventId?: SortOrder
    actionTime?: SortOrder
    profileId?: SortOrder
    purchasedItem?: SortOrder
    purchaseAmount?: SortOrder
  }

  export type TiktokEngagementBottomMinOrderByAggregateInput = {
    tiktokEventId?: SortOrder
    actionTime?: SortOrder
    profileId?: SortOrder
    purchasedItem?: SortOrder
    purchaseAmount?: SortOrder
  }

  export type TiktokEngagementBottomSumOrderByAggregateInput = {
    purchaseAmount?: SortOrder
  }

  export type FacebookEventCreateNestedManyWithoutUserInput = {
    create?: XOR<FacebookEventCreateWithoutUserInput, FacebookEventUncheckedCreateWithoutUserInput> | FacebookEventCreateWithoutUserInput[] | FacebookEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FacebookEventCreateOrConnectWithoutUserInput | FacebookEventCreateOrConnectWithoutUserInput[]
    createMany?: FacebookEventCreateManyUserInputEnvelope
    connect?: FacebookEventWhereUniqueInput | FacebookEventWhereUniqueInput[]
  }

  export type FacebookEventUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FacebookEventCreateWithoutUserInput, FacebookEventUncheckedCreateWithoutUserInput> | FacebookEventCreateWithoutUserInput[] | FacebookEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FacebookEventCreateOrConnectWithoutUserInput | FacebookEventCreateOrConnectWithoutUserInput[]
    createMany?: FacebookEventCreateManyUserInputEnvelope
    connect?: FacebookEventWhereUniqueInput | FacebookEventWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FacebookEventUpdateManyWithoutUserNestedInput = {
    create?: XOR<FacebookEventCreateWithoutUserInput, FacebookEventUncheckedCreateWithoutUserInput> | FacebookEventCreateWithoutUserInput[] | FacebookEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FacebookEventCreateOrConnectWithoutUserInput | FacebookEventCreateOrConnectWithoutUserInput[]
    upsert?: FacebookEventUpsertWithWhereUniqueWithoutUserInput | FacebookEventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FacebookEventCreateManyUserInputEnvelope
    set?: FacebookEventWhereUniqueInput | FacebookEventWhereUniqueInput[]
    disconnect?: FacebookEventWhereUniqueInput | FacebookEventWhereUniqueInput[]
    delete?: FacebookEventWhereUniqueInput | FacebookEventWhereUniqueInput[]
    connect?: FacebookEventWhereUniqueInput | FacebookEventWhereUniqueInput[]
    update?: FacebookEventUpdateWithWhereUniqueWithoutUserInput | FacebookEventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FacebookEventUpdateManyWithWhereWithoutUserInput | FacebookEventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FacebookEventScalarWhereInput | FacebookEventScalarWhereInput[]
  }

  export type FacebookEventUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FacebookEventCreateWithoutUserInput, FacebookEventUncheckedCreateWithoutUserInput> | FacebookEventCreateWithoutUserInput[] | FacebookEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FacebookEventCreateOrConnectWithoutUserInput | FacebookEventCreateOrConnectWithoutUserInput[]
    upsert?: FacebookEventUpsertWithWhereUniqueWithoutUserInput | FacebookEventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FacebookEventCreateManyUserInputEnvelope
    set?: FacebookEventWhereUniqueInput | FacebookEventWhereUniqueInput[]
    disconnect?: FacebookEventWhereUniqueInput | FacebookEventWhereUniqueInput[]
    delete?: FacebookEventWhereUniqueInput | FacebookEventWhereUniqueInput[]
    connect?: FacebookEventWhereUniqueInput | FacebookEventWhereUniqueInput[]
    update?: FacebookEventUpdateWithWhereUniqueWithoutUserInput | FacebookEventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FacebookEventUpdateManyWithWhereWithoutUserInput | FacebookEventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FacebookEventScalarWhereInput | FacebookEventScalarWhereInput[]
  }

  export type FacebookUserCreateNestedOneWithoutEventsInput = {
    create?: XOR<FacebookUserCreateWithoutEventsInput, FacebookUserUncheckedCreateWithoutEventsInput>
    connectOrCreate?: FacebookUserCreateOrConnectWithoutEventsInput
    connect?: FacebookUserWhereUniqueInput
  }

  export type FacebookEngagementTopCreateNestedOneWithoutFacebookEventInput = {
    create?: XOR<FacebookEngagementTopCreateWithoutFacebookEventInput, FacebookEngagementTopUncheckedCreateWithoutFacebookEventInput>
    connectOrCreate?: FacebookEngagementTopCreateOrConnectWithoutFacebookEventInput
    connect?: FacebookEngagementTopWhereUniqueInput
  }

  export type FacebookEngagementBottomCreateNestedOneWithoutFacebookEventInput = {
    create?: XOR<FacebookEngagementBottomCreateWithoutFacebookEventInput, FacebookEngagementBottomUncheckedCreateWithoutFacebookEventInput>
    connectOrCreate?: FacebookEngagementBottomCreateOrConnectWithoutFacebookEventInput
    connect?: FacebookEngagementBottomWhereUniqueInput
  }

  export type FacebookEngagementTopUncheckedCreateNestedOneWithoutFacebookEventInput = {
    create?: XOR<FacebookEngagementTopCreateWithoutFacebookEventInput, FacebookEngagementTopUncheckedCreateWithoutFacebookEventInput>
    connectOrCreate?: FacebookEngagementTopCreateOrConnectWithoutFacebookEventInput
    connect?: FacebookEngagementTopWhereUniqueInput
  }

  export type FacebookEngagementBottomUncheckedCreateNestedOneWithoutFacebookEventInput = {
    create?: XOR<FacebookEngagementBottomCreateWithoutFacebookEventInput, FacebookEngagementBottomUncheckedCreateWithoutFacebookEventInput>
    connectOrCreate?: FacebookEngagementBottomCreateOrConnectWithoutFacebookEventInput
    connect?: FacebookEngagementBottomWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FacebookUserUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<FacebookUserCreateWithoutEventsInput, FacebookUserUncheckedCreateWithoutEventsInput>
    connectOrCreate?: FacebookUserCreateOrConnectWithoutEventsInput
    upsert?: FacebookUserUpsertWithoutEventsInput
    connect?: FacebookUserWhereUniqueInput
    update?: XOR<XOR<FacebookUserUpdateToOneWithWhereWithoutEventsInput, FacebookUserUpdateWithoutEventsInput>, FacebookUserUncheckedUpdateWithoutEventsInput>
  }

  export type FacebookEngagementTopUpdateOneWithoutFacebookEventNestedInput = {
    create?: XOR<FacebookEngagementTopCreateWithoutFacebookEventInput, FacebookEngagementTopUncheckedCreateWithoutFacebookEventInput>
    connectOrCreate?: FacebookEngagementTopCreateOrConnectWithoutFacebookEventInput
    upsert?: FacebookEngagementTopUpsertWithoutFacebookEventInput
    disconnect?: FacebookEngagementTopWhereInput | boolean
    delete?: FacebookEngagementTopWhereInput | boolean
    connect?: FacebookEngagementTopWhereUniqueInput
    update?: XOR<XOR<FacebookEngagementTopUpdateToOneWithWhereWithoutFacebookEventInput, FacebookEngagementTopUpdateWithoutFacebookEventInput>, FacebookEngagementTopUncheckedUpdateWithoutFacebookEventInput>
  }

  export type FacebookEngagementBottomUpdateOneWithoutFacebookEventNestedInput = {
    create?: XOR<FacebookEngagementBottomCreateWithoutFacebookEventInput, FacebookEngagementBottomUncheckedCreateWithoutFacebookEventInput>
    connectOrCreate?: FacebookEngagementBottomCreateOrConnectWithoutFacebookEventInput
    upsert?: FacebookEngagementBottomUpsertWithoutFacebookEventInput
    disconnect?: FacebookEngagementBottomWhereInput | boolean
    delete?: FacebookEngagementBottomWhereInput | boolean
    connect?: FacebookEngagementBottomWhereUniqueInput
    update?: XOR<XOR<FacebookEngagementBottomUpdateToOneWithWhereWithoutFacebookEventInput, FacebookEngagementBottomUpdateWithoutFacebookEventInput>, FacebookEngagementBottomUncheckedUpdateWithoutFacebookEventInput>
  }

  export type FacebookEngagementTopUncheckedUpdateOneWithoutFacebookEventNestedInput = {
    create?: XOR<FacebookEngagementTopCreateWithoutFacebookEventInput, FacebookEngagementTopUncheckedCreateWithoutFacebookEventInput>
    connectOrCreate?: FacebookEngagementTopCreateOrConnectWithoutFacebookEventInput
    upsert?: FacebookEngagementTopUpsertWithoutFacebookEventInput
    disconnect?: FacebookEngagementTopWhereInput | boolean
    delete?: FacebookEngagementTopWhereInput | boolean
    connect?: FacebookEngagementTopWhereUniqueInput
    update?: XOR<XOR<FacebookEngagementTopUpdateToOneWithWhereWithoutFacebookEventInput, FacebookEngagementTopUpdateWithoutFacebookEventInput>, FacebookEngagementTopUncheckedUpdateWithoutFacebookEventInput>
  }

  export type FacebookEngagementBottomUncheckedUpdateOneWithoutFacebookEventNestedInput = {
    create?: XOR<FacebookEngagementBottomCreateWithoutFacebookEventInput, FacebookEngagementBottomUncheckedCreateWithoutFacebookEventInput>
    connectOrCreate?: FacebookEngagementBottomCreateOrConnectWithoutFacebookEventInput
    upsert?: FacebookEngagementBottomUpsertWithoutFacebookEventInput
    disconnect?: FacebookEngagementBottomWhereInput | boolean
    delete?: FacebookEngagementBottomWhereInput | boolean
    connect?: FacebookEngagementBottomWhereUniqueInput
    update?: XOR<XOR<FacebookEngagementBottomUpdateToOneWithWhereWithoutFacebookEventInput, FacebookEngagementBottomUpdateWithoutFacebookEventInput>, FacebookEngagementBottomUncheckedUpdateWithoutFacebookEventInput>
  }

  export type FacebookEventCreateNestedOneWithoutEngagementTopInput = {
    create?: XOR<FacebookEventCreateWithoutEngagementTopInput, FacebookEventUncheckedCreateWithoutEngagementTopInput>
    connectOrCreate?: FacebookEventCreateOrConnectWithoutEngagementTopInput
    connect?: FacebookEventWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FacebookEventUpdateOneRequiredWithoutEngagementTopNestedInput = {
    create?: XOR<FacebookEventCreateWithoutEngagementTopInput, FacebookEventUncheckedCreateWithoutEngagementTopInput>
    connectOrCreate?: FacebookEventCreateOrConnectWithoutEngagementTopInput
    upsert?: FacebookEventUpsertWithoutEngagementTopInput
    connect?: FacebookEventWhereUniqueInput
    update?: XOR<XOR<FacebookEventUpdateToOneWithWhereWithoutEngagementTopInput, FacebookEventUpdateWithoutEngagementTopInput>, FacebookEventUncheckedUpdateWithoutEngagementTopInput>
  }

  export type FacebookEventCreateNestedOneWithoutEngagementBottomInput = {
    create?: XOR<FacebookEventCreateWithoutEngagementBottomInput, FacebookEventUncheckedCreateWithoutEngagementBottomInput>
    connectOrCreate?: FacebookEventCreateOrConnectWithoutEngagementBottomInput
    connect?: FacebookEventWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type FacebookEventUpdateOneRequiredWithoutEngagementBottomNestedInput = {
    create?: XOR<FacebookEventCreateWithoutEngagementBottomInput, FacebookEventUncheckedCreateWithoutEngagementBottomInput>
    connectOrCreate?: FacebookEventCreateOrConnectWithoutEngagementBottomInput
    upsert?: FacebookEventUpsertWithoutEngagementBottomInput
    connect?: FacebookEventWhereUniqueInput
    update?: XOR<XOR<FacebookEventUpdateToOneWithWhereWithoutEngagementBottomInput, FacebookEventUpdateWithoutEngagementBottomInput>, FacebookEventUncheckedUpdateWithoutEngagementBottomInput>
  }

  export type TiktokEventCreateNestedManyWithoutUserInput = {
    create?: XOR<TiktokEventCreateWithoutUserInput, TiktokEventUncheckedCreateWithoutUserInput> | TiktokEventCreateWithoutUserInput[] | TiktokEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TiktokEventCreateOrConnectWithoutUserInput | TiktokEventCreateOrConnectWithoutUserInput[]
    createMany?: TiktokEventCreateManyUserInputEnvelope
    connect?: TiktokEventWhereUniqueInput | TiktokEventWhereUniqueInput[]
  }

  export type TiktokEventUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TiktokEventCreateWithoutUserInput, TiktokEventUncheckedCreateWithoutUserInput> | TiktokEventCreateWithoutUserInput[] | TiktokEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TiktokEventCreateOrConnectWithoutUserInput | TiktokEventCreateOrConnectWithoutUserInput[]
    createMany?: TiktokEventCreateManyUserInputEnvelope
    connect?: TiktokEventWhereUniqueInput | TiktokEventWhereUniqueInput[]
  }

  export type TiktokEventUpdateManyWithoutUserNestedInput = {
    create?: XOR<TiktokEventCreateWithoutUserInput, TiktokEventUncheckedCreateWithoutUserInput> | TiktokEventCreateWithoutUserInput[] | TiktokEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TiktokEventCreateOrConnectWithoutUserInput | TiktokEventCreateOrConnectWithoutUserInput[]
    upsert?: TiktokEventUpsertWithWhereUniqueWithoutUserInput | TiktokEventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TiktokEventCreateManyUserInputEnvelope
    set?: TiktokEventWhereUniqueInput | TiktokEventWhereUniqueInput[]
    disconnect?: TiktokEventWhereUniqueInput | TiktokEventWhereUniqueInput[]
    delete?: TiktokEventWhereUniqueInput | TiktokEventWhereUniqueInput[]
    connect?: TiktokEventWhereUniqueInput | TiktokEventWhereUniqueInput[]
    update?: TiktokEventUpdateWithWhereUniqueWithoutUserInput | TiktokEventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TiktokEventUpdateManyWithWhereWithoutUserInput | TiktokEventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TiktokEventScalarWhereInput | TiktokEventScalarWhereInput[]
  }

  export type TiktokEventUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TiktokEventCreateWithoutUserInput, TiktokEventUncheckedCreateWithoutUserInput> | TiktokEventCreateWithoutUserInput[] | TiktokEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TiktokEventCreateOrConnectWithoutUserInput | TiktokEventCreateOrConnectWithoutUserInput[]
    upsert?: TiktokEventUpsertWithWhereUniqueWithoutUserInput | TiktokEventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TiktokEventCreateManyUserInputEnvelope
    set?: TiktokEventWhereUniqueInput | TiktokEventWhereUniqueInput[]
    disconnect?: TiktokEventWhereUniqueInput | TiktokEventWhereUniqueInput[]
    delete?: TiktokEventWhereUniqueInput | TiktokEventWhereUniqueInput[]
    connect?: TiktokEventWhereUniqueInput | TiktokEventWhereUniqueInput[]
    update?: TiktokEventUpdateWithWhereUniqueWithoutUserInput | TiktokEventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TiktokEventUpdateManyWithWhereWithoutUserInput | TiktokEventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TiktokEventScalarWhereInput | TiktokEventScalarWhereInput[]
  }

  export type TiktokUserCreateNestedOneWithoutEventsInput = {
    create?: XOR<TiktokUserCreateWithoutEventsInput, TiktokUserUncheckedCreateWithoutEventsInput>
    connectOrCreate?: TiktokUserCreateOrConnectWithoutEventsInput
    connect?: TiktokUserWhereUniqueInput
  }

  export type TiktokEngagementTopCreateNestedOneWithoutTiktokEventInput = {
    create?: XOR<TiktokEngagementTopCreateWithoutTiktokEventInput, TiktokEngagementTopUncheckedCreateWithoutTiktokEventInput>
    connectOrCreate?: TiktokEngagementTopCreateOrConnectWithoutTiktokEventInput
    connect?: TiktokEngagementTopWhereUniqueInput
  }

  export type TiktokEngagementBottomCreateNestedOneWithoutTiktokEventInput = {
    create?: XOR<TiktokEngagementBottomCreateWithoutTiktokEventInput, TiktokEngagementBottomUncheckedCreateWithoutTiktokEventInput>
    connectOrCreate?: TiktokEngagementBottomCreateOrConnectWithoutTiktokEventInput
    connect?: TiktokEngagementBottomWhereUniqueInput
  }

  export type TiktokEngagementTopUncheckedCreateNestedOneWithoutTiktokEventInput = {
    create?: XOR<TiktokEngagementTopCreateWithoutTiktokEventInput, TiktokEngagementTopUncheckedCreateWithoutTiktokEventInput>
    connectOrCreate?: TiktokEngagementTopCreateOrConnectWithoutTiktokEventInput
    connect?: TiktokEngagementTopWhereUniqueInput
  }

  export type TiktokEngagementBottomUncheckedCreateNestedOneWithoutTiktokEventInput = {
    create?: XOR<TiktokEngagementBottomCreateWithoutTiktokEventInput, TiktokEngagementBottomUncheckedCreateWithoutTiktokEventInput>
    connectOrCreate?: TiktokEngagementBottomCreateOrConnectWithoutTiktokEventInput
    connect?: TiktokEngagementBottomWhereUniqueInput
  }

  export type TiktokUserUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<TiktokUserCreateWithoutEventsInput, TiktokUserUncheckedCreateWithoutEventsInput>
    connectOrCreate?: TiktokUserCreateOrConnectWithoutEventsInput
    upsert?: TiktokUserUpsertWithoutEventsInput
    connect?: TiktokUserWhereUniqueInput
    update?: XOR<XOR<TiktokUserUpdateToOneWithWhereWithoutEventsInput, TiktokUserUpdateWithoutEventsInput>, TiktokUserUncheckedUpdateWithoutEventsInput>
  }

  export type TiktokEngagementTopUpdateOneWithoutTiktokEventNestedInput = {
    create?: XOR<TiktokEngagementTopCreateWithoutTiktokEventInput, TiktokEngagementTopUncheckedCreateWithoutTiktokEventInput>
    connectOrCreate?: TiktokEngagementTopCreateOrConnectWithoutTiktokEventInput
    upsert?: TiktokEngagementTopUpsertWithoutTiktokEventInput
    disconnect?: TiktokEngagementTopWhereInput | boolean
    delete?: TiktokEngagementTopWhereInput | boolean
    connect?: TiktokEngagementTopWhereUniqueInput
    update?: XOR<XOR<TiktokEngagementTopUpdateToOneWithWhereWithoutTiktokEventInput, TiktokEngagementTopUpdateWithoutTiktokEventInput>, TiktokEngagementTopUncheckedUpdateWithoutTiktokEventInput>
  }

  export type TiktokEngagementBottomUpdateOneWithoutTiktokEventNestedInput = {
    create?: XOR<TiktokEngagementBottomCreateWithoutTiktokEventInput, TiktokEngagementBottomUncheckedCreateWithoutTiktokEventInput>
    connectOrCreate?: TiktokEngagementBottomCreateOrConnectWithoutTiktokEventInput
    upsert?: TiktokEngagementBottomUpsertWithoutTiktokEventInput
    disconnect?: TiktokEngagementBottomWhereInput | boolean
    delete?: TiktokEngagementBottomWhereInput | boolean
    connect?: TiktokEngagementBottomWhereUniqueInput
    update?: XOR<XOR<TiktokEngagementBottomUpdateToOneWithWhereWithoutTiktokEventInput, TiktokEngagementBottomUpdateWithoutTiktokEventInput>, TiktokEngagementBottomUncheckedUpdateWithoutTiktokEventInput>
  }

  export type TiktokEngagementTopUncheckedUpdateOneWithoutTiktokEventNestedInput = {
    create?: XOR<TiktokEngagementTopCreateWithoutTiktokEventInput, TiktokEngagementTopUncheckedCreateWithoutTiktokEventInput>
    connectOrCreate?: TiktokEngagementTopCreateOrConnectWithoutTiktokEventInput
    upsert?: TiktokEngagementTopUpsertWithoutTiktokEventInput
    disconnect?: TiktokEngagementTopWhereInput | boolean
    delete?: TiktokEngagementTopWhereInput | boolean
    connect?: TiktokEngagementTopWhereUniqueInput
    update?: XOR<XOR<TiktokEngagementTopUpdateToOneWithWhereWithoutTiktokEventInput, TiktokEngagementTopUpdateWithoutTiktokEventInput>, TiktokEngagementTopUncheckedUpdateWithoutTiktokEventInput>
  }

  export type TiktokEngagementBottomUncheckedUpdateOneWithoutTiktokEventNestedInput = {
    create?: XOR<TiktokEngagementBottomCreateWithoutTiktokEventInput, TiktokEngagementBottomUncheckedCreateWithoutTiktokEventInput>
    connectOrCreate?: TiktokEngagementBottomCreateOrConnectWithoutTiktokEventInput
    upsert?: TiktokEngagementBottomUpsertWithoutTiktokEventInput
    disconnect?: TiktokEngagementBottomWhereInput | boolean
    delete?: TiktokEngagementBottomWhereInput | boolean
    connect?: TiktokEngagementBottomWhereUniqueInput
    update?: XOR<XOR<TiktokEngagementBottomUpdateToOneWithWhereWithoutTiktokEventInput, TiktokEngagementBottomUpdateWithoutTiktokEventInput>, TiktokEngagementBottomUncheckedUpdateWithoutTiktokEventInput>
  }

  export type TiktokEventCreateNestedOneWithoutEngagementTopInput = {
    create?: XOR<TiktokEventCreateWithoutEngagementTopInput, TiktokEventUncheckedCreateWithoutEngagementTopInput>
    connectOrCreate?: TiktokEventCreateOrConnectWithoutEngagementTopInput
    connect?: TiktokEventWhereUniqueInput
  }

  export type TiktokEventUpdateOneRequiredWithoutEngagementTopNestedInput = {
    create?: XOR<TiktokEventCreateWithoutEngagementTopInput, TiktokEventUncheckedCreateWithoutEngagementTopInput>
    connectOrCreate?: TiktokEventCreateOrConnectWithoutEngagementTopInput
    upsert?: TiktokEventUpsertWithoutEngagementTopInput
    connect?: TiktokEventWhereUniqueInput
    update?: XOR<XOR<TiktokEventUpdateToOneWithWhereWithoutEngagementTopInput, TiktokEventUpdateWithoutEngagementTopInput>, TiktokEventUncheckedUpdateWithoutEngagementTopInput>
  }

  export type TiktokEventCreateNestedOneWithoutEngagementBottomInput = {
    create?: XOR<TiktokEventCreateWithoutEngagementBottomInput, TiktokEventUncheckedCreateWithoutEngagementBottomInput>
    connectOrCreate?: TiktokEventCreateOrConnectWithoutEngagementBottomInput
    connect?: TiktokEventWhereUniqueInput
  }

  export type TiktokEventUpdateOneRequiredWithoutEngagementBottomNestedInput = {
    create?: XOR<TiktokEventCreateWithoutEngagementBottomInput, TiktokEventUncheckedCreateWithoutEngagementBottomInput>
    connectOrCreate?: TiktokEventCreateOrConnectWithoutEngagementBottomInput
    upsert?: TiktokEventUpsertWithoutEngagementBottomInput
    connect?: TiktokEventWhereUniqueInput
    update?: XOR<XOR<TiktokEventUpdateToOneWithWhereWithoutEngagementBottomInput, TiktokEventUpdateWithoutEngagementBottomInput>, TiktokEventUncheckedUpdateWithoutEngagementBottomInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type FacebookEventCreateWithoutUserInput = {
    eventId: string
    timestamp: Date | string
    funnelStage: string
    eventType: string
    engagementTop?: FacebookEngagementTopCreateNestedOneWithoutFacebookEventInput
    engagementBottom?: FacebookEngagementBottomCreateNestedOneWithoutFacebookEventInput
  }

  export type FacebookEventUncheckedCreateWithoutUserInput = {
    eventId: string
    timestamp: Date | string
    funnelStage: string
    eventType: string
    engagementTop?: FacebookEngagementTopUncheckedCreateNestedOneWithoutFacebookEventInput
    engagementBottom?: FacebookEngagementBottomUncheckedCreateNestedOneWithoutFacebookEventInput
  }

  export type FacebookEventCreateOrConnectWithoutUserInput = {
    where: FacebookEventWhereUniqueInput
    create: XOR<FacebookEventCreateWithoutUserInput, FacebookEventUncheckedCreateWithoutUserInput>
  }

  export type FacebookEventCreateManyUserInputEnvelope = {
    data: FacebookEventCreateManyUserInput | FacebookEventCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FacebookEventUpsertWithWhereUniqueWithoutUserInput = {
    where: FacebookEventWhereUniqueInput
    update: XOR<FacebookEventUpdateWithoutUserInput, FacebookEventUncheckedUpdateWithoutUserInput>
    create: XOR<FacebookEventCreateWithoutUserInput, FacebookEventUncheckedCreateWithoutUserInput>
  }

  export type FacebookEventUpdateWithWhereUniqueWithoutUserInput = {
    where: FacebookEventWhereUniqueInput
    data: XOR<FacebookEventUpdateWithoutUserInput, FacebookEventUncheckedUpdateWithoutUserInput>
  }

  export type FacebookEventUpdateManyWithWhereWithoutUserInput = {
    where: FacebookEventScalarWhereInput
    data: XOR<FacebookEventUpdateManyMutationInput, FacebookEventUncheckedUpdateManyWithoutUserInput>
  }

  export type FacebookEventScalarWhereInput = {
    AND?: FacebookEventScalarWhereInput | FacebookEventScalarWhereInput[]
    OR?: FacebookEventScalarWhereInput[]
    NOT?: FacebookEventScalarWhereInput | FacebookEventScalarWhereInput[]
    eventId?: StringFilter<"FacebookEvent"> | string
    timestamp?: DateTimeFilter<"FacebookEvent"> | Date | string
    funnelStage?: StringFilter<"FacebookEvent"> | string
    eventType?: StringFilter<"FacebookEvent"> | string
    userId?: StringFilter<"FacebookEvent"> | string
  }

  export type FacebookUserCreateWithoutEventsInput = {
    userId: string
    name: string
    age: number
    gender: string
    country: string
    city: string
  }

  export type FacebookUserUncheckedCreateWithoutEventsInput = {
    userId: string
    name: string
    age: number
    gender: string
    country: string
    city: string
  }

  export type FacebookUserCreateOrConnectWithoutEventsInput = {
    where: FacebookUserWhereUniqueInput
    create: XOR<FacebookUserCreateWithoutEventsInput, FacebookUserUncheckedCreateWithoutEventsInput>
  }

  export type FacebookEngagementTopCreateWithoutFacebookEventInput = {
    actionTime: Date | string
    referrer: string
    videoId?: string | null
  }

  export type FacebookEngagementTopUncheckedCreateWithoutFacebookEventInput = {
    actionTime: Date | string
    referrer: string
    videoId?: string | null
  }

  export type FacebookEngagementTopCreateOrConnectWithoutFacebookEventInput = {
    where: FacebookEngagementTopWhereUniqueInput
    create: XOR<FacebookEngagementTopCreateWithoutFacebookEventInput, FacebookEngagementTopUncheckedCreateWithoutFacebookEventInput>
  }

  export type FacebookEngagementBottomCreateWithoutFacebookEventInput = {
    adId: string
    campaignId: string
    clickPosition: string
    device: string
    browser: string
    purchaseAmount?: Decimal | DecimalJsLike | number | string | null
  }

  export type FacebookEngagementBottomUncheckedCreateWithoutFacebookEventInput = {
    adId: string
    campaignId: string
    clickPosition: string
    device: string
    browser: string
    purchaseAmount?: Decimal | DecimalJsLike | number | string | null
  }

  export type FacebookEngagementBottomCreateOrConnectWithoutFacebookEventInput = {
    where: FacebookEngagementBottomWhereUniqueInput
    create: XOR<FacebookEngagementBottomCreateWithoutFacebookEventInput, FacebookEngagementBottomUncheckedCreateWithoutFacebookEventInput>
  }

  export type FacebookUserUpsertWithoutEventsInput = {
    update: XOR<FacebookUserUpdateWithoutEventsInput, FacebookUserUncheckedUpdateWithoutEventsInput>
    create: XOR<FacebookUserCreateWithoutEventsInput, FacebookUserUncheckedCreateWithoutEventsInput>
    where?: FacebookUserWhereInput
  }

  export type FacebookUserUpdateToOneWithWhereWithoutEventsInput = {
    where?: FacebookUserWhereInput
    data: XOR<FacebookUserUpdateWithoutEventsInput, FacebookUserUncheckedUpdateWithoutEventsInput>
  }

  export type FacebookUserUpdateWithoutEventsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
  }

  export type FacebookUserUncheckedUpdateWithoutEventsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
  }

  export type FacebookEngagementTopUpsertWithoutFacebookEventInput = {
    update: XOR<FacebookEngagementTopUpdateWithoutFacebookEventInput, FacebookEngagementTopUncheckedUpdateWithoutFacebookEventInput>
    create: XOR<FacebookEngagementTopCreateWithoutFacebookEventInput, FacebookEngagementTopUncheckedCreateWithoutFacebookEventInput>
    where?: FacebookEngagementTopWhereInput
  }

  export type FacebookEngagementTopUpdateToOneWithWhereWithoutFacebookEventInput = {
    where?: FacebookEngagementTopWhereInput
    data: XOR<FacebookEngagementTopUpdateWithoutFacebookEventInput, FacebookEngagementTopUncheckedUpdateWithoutFacebookEventInput>
  }

  export type FacebookEngagementTopUpdateWithoutFacebookEventInput = {
    actionTime?: DateTimeFieldUpdateOperationsInput | Date | string
    referrer?: StringFieldUpdateOperationsInput | string
    videoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FacebookEngagementTopUncheckedUpdateWithoutFacebookEventInput = {
    actionTime?: DateTimeFieldUpdateOperationsInput | Date | string
    referrer?: StringFieldUpdateOperationsInput | string
    videoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FacebookEngagementBottomUpsertWithoutFacebookEventInput = {
    update: XOR<FacebookEngagementBottomUpdateWithoutFacebookEventInput, FacebookEngagementBottomUncheckedUpdateWithoutFacebookEventInput>
    create: XOR<FacebookEngagementBottomCreateWithoutFacebookEventInput, FacebookEngagementBottomUncheckedCreateWithoutFacebookEventInput>
    where?: FacebookEngagementBottomWhereInput
  }

  export type FacebookEngagementBottomUpdateToOneWithWhereWithoutFacebookEventInput = {
    where?: FacebookEngagementBottomWhereInput
    data: XOR<FacebookEngagementBottomUpdateWithoutFacebookEventInput, FacebookEngagementBottomUncheckedUpdateWithoutFacebookEventInput>
  }

  export type FacebookEngagementBottomUpdateWithoutFacebookEventInput = {
    adId?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    clickPosition?: StringFieldUpdateOperationsInput | string
    device?: StringFieldUpdateOperationsInput | string
    browser?: StringFieldUpdateOperationsInput | string
    purchaseAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type FacebookEngagementBottomUncheckedUpdateWithoutFacebookEventInput = {
    adId?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    clickPosition?: StringFieldUpdateOperationsInput | string
    device?: StringFieldUpdateOperationsInput | string
    browser?: StringFieldUpdateOperationsInput | string
    purchaseAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type FacebookEventCreateWithoutEngagementTopInput = {
    eventId: string
    timestamp: Date | string
    funnelStage: string
    eventType: string
    user: FacebookUserCreateNestedOneWithoutEventsInput
    engagementBottom?: FacebookEngagementBottomCreateNestedOneWithoutFacebookEventInput
  }

  export type FacebookEventUncheckedCreateWithoutEngagementTopInput = {
    eventId: string
    timestamp: Date | string
    funnelStage: string
    eventType: string
    userId: string
    engagementBottom?: FacebookEngagementBottomUncheckedCreateNestedOneWithoutFacebookEventInput
  }

  export type FacebookEventCreateOrConnectWithoutEngagementTopInput = {
    where: FacebookEventWhereUniqueInput
    create: XOR<FacebookEventCreateWithoutEngagementTopInput, FacebookEventUncheckedCreateWithoutEngagementTopInput>
  }

  export type FacebookEventUpsertWithoutEngagementTopInput = {
    update: XOR<FacebookEventUpdateWithoutEngagementTopInput, FacebookEventUncheckedUpdateWithoutEngagementTopInput>
    create: XOR<FacebookEventCreateWithoutEngagementTopInput, FacebookEventUncheckedCreateWithoutEngagementTopInput>
    where?: FacebookEventWhereInput
  }

  export type FacebookEventUpdateToOneWithWhereWithoutEngagementTopInput = {
    where?: FacebookEventWhereInput
    data: XOR<FacebookEventUpdateWithoutEngagementTopInput, FacebookEventUncheckedUpdateWithoutEngagementTopInput>
  }

  export type FacebookEventUpdateWithoutEngagementTopInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    funnelStage?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    user?: FacebookUserUpdateOneRequiredWithoutEventsNestedInput
    engagementBottom?: FacebookEngagementBottomUpdateOneWithoutFacebookEventNestedInput
  }

  export type FacebookEventUncheckedUpdateWithoutEngagementTopInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    funnelStage?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    engagementBottom?: FacebookEngagementBottomUncheckedUpdateOneWithoutFacebookEventNestedInput
  }

  export type FacebookEventCreateWithoutEngagementBottomInput = {
    eventId: string
    timestamp: Date | string
    funnelStage: string
    eventType: string
    user: FacebookUserCreateNestedOneWithoutEventsInput
    engagementTop?: FacebookEngagementTopCreateNestedOneWithoutFacebookEventInput
  }

  export type FacebookEventUncheckedCreateWithoutEngagementBottomInput = {
    eventId: string
    timestamp: Date | string
    funnelStage: string
    eventType: string
    userId: string
    engagementTop?: FacebookEngagementTopUncheckedCreateNestedOneWithoutFacebookEventInput
  }

  export type FacebookEventCreateOrConnectWithoutEngagementBottomInput = {
    where: FacebookEventWhereUniqueInput
    create: XOR<FacebookEventCreateWithoutEngagementBottomInput, FacebookEventUncheckedCreateWithoutEngagementBottomInput>
  }

  export type FacebookEventUpsertWithoutEngagementBottomInput = {
    update: XOR<FacebookEventUpdateWithoutEngagementBottomInput, FacebookEventUncheckedUpdateWithoutEngagementBottomInput>
    create: XOR<FacebookEventCreateWithoutEngagementBottomInput, FacebookEventUncheckedCreateWithoutEngagementBottomInput>
    where?: FacebookEventWhereInput
  }

  export type FacebookEventUpdateToOneWithWhereWithoutEngagementBottomInput = {
    where?: FacebookEventWhereInput
    data: XOR<FacebookEventUpdateWithoutEngagementBottomInput, FacebookEventUncheckedUpdateWithoutEngagementBottomInput>
  }

  export type FacebookEventUpdateWithoutEngagementBottomInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    funnelStage?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    user?: FacebookUserUpdateOneRequiredWithoutEventsNestedInput
    engagementTop?: FacebookEngagementTopUpdateOneWithoutFacebookEventNestedInput
  }

  export type FacebookEventUncheckedUpdateWithoutEngagementBottomInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    funnelStage?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    engagementTop?: FacebookEngagementTopUncheckedUpdateOneWithoutFacebookEventNestedInput
  }

  export type TiktokEventCreateWithoutUserInput = {
    eventId: string
    timestamp: Date | string
    funnelStage: string
    eventType: string
    engagementTop?: TiktokEngagementTopCreateNestedOneWithoutTiktokEventInput
    engagementBottom?: TiktokEngagementBottomCreateNestedOneWithoutTiktokEventInput
  }

  export type TiktokEventUncheckedCreateWithoutUserInput = {
    eventId: string
    timestamp: Date | string
    funnelStage: string
    eventType: string
    engagementTop?: TiktokEngagementTopUncheckedCreateNestedOneWithoutTiktokEventInput
    engagementBottom?: TiktokEngagementBottomUncheckedCreateNestedOneWithoutTiktokEventInput
  }

  export type TiktokEventCreateOrConnectWithoutUserInput = {
    where: TiktokEventWhereUniqueInput
    create: XOR<TiktokEventCreateWithoutUserInput, TiktokEventUncheckedCreateWithoutUserInput>
  }

  export type TiktokEventCreateManyUserInputEnvelope = {
    data: TiktokEventCreateManyUserInput | TiktokEventCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TiktokEventUpsertWithWhereUniqueWithoutUserInput = {
    where: TiktokEventWhereUniqueInput
    update: XOR<TiktokEventUpdateWithoutUserInput, TiktokEventUncheckedUpdateWithoutUserInput>
    create: XOR<TiktokEventCreateWithoutUserInput, TiktokEventUncheckedCreateWithoutUserInput>
  }

  export type TiktokEventUpdateWithWhereUniqueWithoutUserInput = {
    where: TiktokEventWhereUniqueInput
    data: XOR<TiktokEventUpdateWithoutUserInput, TiktokEventUncheckedUpdateWithoutUserInput>
  }

  export type TiktokEventUpdateManyWithWhereWithoutUserInput = {
    where: TiktokEventScalarWhereInput
    data: XOR<TiktokEventUpdateManyMutationInput, TiktokEventUncheckedUpdateManyWithoutUserInput>
  }

  export type TiktokEventScalarWhereInput = {
    AND?: TiktokEventScalarWhereInput | TiktokEventScalarWhereInput[]
    OR?: TiktokEventScalarWhereInput[]
    NOT?: TiktokEventScalarWhereInput | TiktokEventScalarWhereInput[]
    eventId?: StringFilter<"TiktokEvent"> | string
    timestamp?: DateTimeFilter<"TiktokEvent"> | Date | string
    funnelStage?: StringFilter<"TiktokEvent"> | string
    eventType?: StringFilter<"TiktokEvent"> | string
    userId?: StringFilter<"TiktokEvent"> | string
  }

  export type TiktokUserCreateWithoutEventsInput = {
    userId: string
    username: string
    followers: number
  }

  export type TiktokUserUncheckedCreateWithoutEventsInput = {
    userId: string
    username: string
    followers: number
  }

  export type TiktokUserCreateOrConnectWithoutEventsInput = {
    where: TiktokUserWhereUniqueInput
    create: XOR<TiktokUserCreateWithoutEventsInput, TiktokUserUncheckedCreateWithoutEventsInput>
  }

  export type TiktokEngagementTopCreateWithoutTiktokEventInput = {
    watchTime: number
    percentageWatched: number
    device: string
    country: string
    videoId: string
  }

  export type TiktokEngagementTopUncheckedCreateWithoutTiktokEventInput = {
    watchTime: number
    percentageWatched: number
    device: string
    country: string
    videoId: string
  }

  export type TiktokEngagementTopCreateOrConnectWithoutTiktokEventInput = {
    where: TiktokEngagementTopWhereUniqueInput
    create: XOR<TiktokEngagementTopCreateWithoutTiktokEventInput, TiktokEngagementTopUncheckedCreateWithoutTiktokEventInput>
  }

  export type TiktokEngagementBottomCreateWithoutTiktokEventInput = {
    actionTime: Date | string
    profileId?: string | null
    purchasedItem?: string | null
    purchaseAmount?: Decimal | DecimalJsLike | number | string | null
  }

  export type TiktokEngagementBottomUncheckedCreateWithoutTiktokEventInput = {
    actionTime: Date | string
    profileId?: string | null
    purchasedItem?: string | null
    purchaseAmount?: Decimal | DecimalJsLike | number | string | null
  }

  export type TiktokEngagementBottomCreateOrConnectWithoutTiktokEventInput = {
    where: TiktokEngagementBottomWhereUniqueInput
    create: XOR<TiktokEngagementBottomCreateWithoutTiktokEventInput, TiktokEngagementBottomUncheckedCreateWithoutTiktokEventInput>
  }

  export type TiktokUserUpsertWithoutEventsInput = {
    update: XOR<TiktokUserUpdateWithoutEventsInput, TiktokUserUncheckedUpdateWithoutEventsInput>
    create: XOR<TiktokUserCreateWithoutEventsInput, TiktokUserUncheckedCreateWithoutEventsInput>
    where?: TiktokUserWhereInput
  }

  export type TiktokUserUpdateToOneWithWhereWithoutEventsInput = {
    where?: TiktokUserWhereInput
    data: XOR<TiktokUserUpdateWithoutEventsInput, TiktokUserUncheckedUpdateWithoutEventsInput>
  }

  export type TiktokUserUpdateWithoutEventsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    followers?: IntFieldUpdateOperationsInput | number
  }

  export type TiktokUserUncheckedUpdateWithoutEventsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    followers?: IntFieldUpdateOperationsInput | number
  }

  export type TiktokEngagementTopUpsertWithoutTiktokEventInput = {
    update: XOR<TiktokEngagementTopUpdateWithoutTiktokEventInput, TiktokEngagementTopUncheckedUpdateWithoutTiktokEventInput>
    create: XOR<TiktokEngagementTopCreateWithoutTiktokEventInput, TiktokEngagementTopUncheckedCreateWithoutTiktokEventInput>
    where?: TiktokEngagementTopWhereInput
  }

  export type TiktokEngagementTopUpdateToOneWithWhereWithoutTiktokEventInput = {
    where?: TiktokEngagementTopWhereInput
    data: XOR<TiktokEngagementTopUpdateWithoutTiktokEventInput, TiktokEngagementTopUncheckedUpdateWithoutTiktokEventInput>
  }

  export type TiktokEngagementTopUpdateWithoutTiktokEventInput = {
    watchTime?: IntFieldUpdateOperationsInput | number
    percentageWatched?: IntFieldUpdateOperationsInput | number
    device?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
  }

  export type TiktokEngagementTopUncheckedUpdateWithoutTiktokEventInput = {
    watchTime?: IntFieldUpdateOperationsInput | number
    percentageWatched?: IntFieldUpdateOperationsInput | number
    device?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
  }

  export type TiktokEngagementBottomUpsertWithoutTiktokEventInput = {
    update: XOR<TiktokEngagementBottomUpdateWithoutTiktokEventInput, TiktokEngagementBottomUncheckedUpdateWithoutTiktokEventInput>
    create: XOR<TiktokEngagementBottomCreateWithoutTiktokEventInput, TiktokEngagementBottomUncheckedCreateWithoutTiktokEventInput>
    where?: TiktokEngagementBottomWhereInput
  }

  export type TiktokEngagementBottomUpdateToOneWithWhereWithoutTiktokEventInput = {
    where?: TiktokEngagementBottomWhereInput
    data: XOR<TiktokEngagementBottomUpdateWithoutTiktokEventInput, TiktokEngagementBottomUncheckedUpdateWithoutTiktokEventInput>
  }

  export type TiktokEngagementBottomUpdateWithoutTiktokEventInput = {
    actionTime?: DateTimeFieldUpdateOperationsInput | Date | string
    profileId?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedItem?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type TiktokEngagementBottomUncheckedUpdateWithoutTiktokEventInput = {
    actionTime?: DateTimeFieldUpdateOperationsInput | Date | string
    profileId?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedItem?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type TiktokEventCreateWithoutEngagementTopInput = {
    eventId: string
    timestamp: Date | string
    funnelStage: string
    eventType: string
    user: TiktokUserCreateNestedOneWithoutEventsInput
    engagementBottom?: TiktokEngagementBottomCreateNestedOneWithoutTiktokEventInput
  }

  export type TiktokEventUncheckedCreateWithoutEngagementTopInput = {
    eventId: string
    timestamp: Date | string
    funnelStage: string
    eventType: string
    userId: string
    engagementBottom?: TiktokEngagementBottomUncheckedCreateNestedOneWithoutTiktokEventInput
  }

  export type TiktokEventCreateOrConnectWithoutEngagementTopInput = {
    where: TiktokEventWhereUniqueInput
    create: XOR<TiktokEventCreateWithoutEngagementTopInput, TiktokEventUncheckedCreateWithoutEngagementTopInput>
  }

  export type TiktokEventUpsertWithoutEngagementTopInput = {
    update: XOR<TiktokEventUpdateWithoutEngagementTopInput, TiktokEventUncheckedUpdateWithoutEngagementTopInput>
    create: XOR<TiktokEventCreateWithoutEngagementTopInput, TiktokEventUncheckedCreateWithoutEngagementTopInput>
    where?: TiktokEventWhereInput
  }

  export type TiktokEventUpdateToOneWithWhereWithoutEngagementTopInput = {
    where?: TiktokEventWhereInput
    data: XOR<TiktokEventUpdateWithoutEngagementTopInput, TiktokEventUncheckedUpdateWithoutEngagementTopInput>
  }

  export type TiktokEventUpdateWithoutEngagementTopInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    funnelStage?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    user?: TiktokUserUpdateOneRequiredWithoutEventsNestedInput
    engagementBottom?: TiktokEngagementBottomUpdateOneWithoutTiktokEventNestedInput
  }

  export type TiktokEventUncheckedUpdateWithoutEngagementTopInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    funnelStage?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    engagementBottom?: TiktokEngagementBottomUncheckedUpdateOneWithoutTiktokEventNestedInput
  }

  export type TiktokEventCreateWithoutEngagementBottomInput = {
    eventId: string
    timestamp: Date | string
    funnelStage: string
    eventType: string
    user: TiktokUserCreateNestedOneWithoutEventsInput
    engagementTop?: TiktokEngagementTopCreateNestedOneWithoutTiktokEventInput
  }

  export type TiktokEventUncheckedCreateWithoutEngagementBottomInput = {
    eventId: string
    timestamp: Date | string
    funnelStage: string
    eventType: string
    userId: string
    engagementTop?: TiktokEngagementTopUncheckedCreateNestedOneWithoutTiktokEventInput
  }

  export type TiktokEventCreateOrConnectWithoutEngagementBottomInput = {
    where: TiktokEventWhereUniqueInput
    create: XOR<TiktokEventCreateWithoutEngagementBottomInput, TiktokEventUncheckedCreateWithoutEngagementBottomInput>
  }

  export type TiktokEventUpsertWithoutEngagementBottomInput = {
    update: XOR<TiktokEventUpdateWithoutEngagementBottomInput, TiktokEventUncheckedUpdateWithoutEngagementBottomInput>
    create: XOR<TiktokEventCreateWithoutEngagementBottomInput, TiktokEventUncheckedCreateWithoutEngagementBottomInput>
    where?: TiktokEventWhereInput
  }

  export type TiktokEventUpdateToOneWithWhereWithoutEngagementBottomInput = {
    where?: TiktokEventWhereInput
    data: XOR<TiktokEventUpdateWithoutEngagementBottomInput, TiktokEventUncheckedUpdateWithoutEngagementBottomInput>
  }

  export type TiktokEventUpdateWithoutEngagementBottomInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    funnelStage?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    user?: TiktokUserUpdateOneRequiredWithoutEventsNestedInput
    engagementTop?: TiktokEngagementTopUpdateOneWithoutTiktokEventNestedInput
  }

  export type TiktokEventUncheckedUpdateWithoutEngagementBottomInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    funnelStage?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    engagementTop?: TiktokEngagementTopUncheckedUpdateOneWithoutTiktokEventNestedInput
  }

  export type FacebookEventCreateManyUserInput = {
    eventId: string
    timestamp: Date | string
    funnelStage: string
    eventType: string
  }

  export type FacebookEventUpdateWithoutUserInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    funnelStage?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    engagementTop?: FacebookEngagementTopUpdateOneWithoutFacebookEventNestedInput
    engagementBottom?: FacebookEngagementBottomUpdateOneWithoutFacebookEventNestedInput
  }

  export type FacebookEventUncheckedUpdateWithoutUserInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    funnelStage?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    engagementTop?: FacebookEngagementTopUncheckedUpdateOneWithoutFacebookEventNestedInput
    engagementBottom?: FacebookEngagementBottomUncheckedUpdateOneWithoutFacebookEventNestedInput
  }

  export type FacebookEventUncheckedUpdateManyWithoutUserInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    funnelStage?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
  }

  export type TiktokEventCreateManyUserInput = {
    eventId: string
    timestamp: Date | string
    funnelStage: string
    eventType: string
  }

  export type TiktokEventUpdateWithoutUserInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    funnelStage?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    engagementTop?: TiktokEngagementTopUpdateOneWithoutTiktokEventNestedInput
    engagementBottom?: TiktokEngagementBottomUpdateOneWithoutTiktokEventNestedInput
  }

  export type TiktokEventUncheckedUpdateWithoutUserInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    funnelStage?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    engagementTop?: TiktokEngagementTopUncheckedUpdateOneWithoutTiktokEventNestedInput
    engagementBottom?: TiktokEngagementBottomUncheckedUpdateOneWithoutTiktokEventNestedInput
  }

  export type TiktokEventUncheckedUpdateManyWithoutUserInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    funnelStage?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}