// generated by cdk8s
import { ApiObject, ApiObjectMetadata, GroupVersionKind } from 'cdk8s';
import { Construct } from 'constructs';

/**
 *
 *
 * @schema Telemetry
 */
export class Telemetry extends ApiObject {
  /**
   * Returns the apiVersion and kind for "Telemetry"
   */
  public static readonly GVK: GroupVersionKind = {
    apiVersion: 'telemetry.istio.io/v1alpha1',
    kind: 'Telemetry'
  };

  /**
   * Renders a Kubernetes manifest for "Telemetry".
   *
   * This can be used to inline resource manifests inside other objects (e.g. as templates).
   *
   * @param props initialization props
   */
  public static manifest(props: TelemetryProps = {}): any {
    return {
      ...Telemetry.GVK,
      ...toJson_TelemetryProps(props)
    };
  }

  /**
   * Defines a "Telemetry" API object
   * @param scope the scope in which to define this object
   * @param id a scope-local name for the object
   * @param props initialization props
   */
  public constructor(scope: Construct, id: string, props: TelemetryProps = {}) {
    super(scope, id, {
      ...Telemetry.GVK,
      ...props
    });
  }

  /**
   * Renders the object to Kubernetes JSON.
   */
  public toJson(): any {
    const resolved = super.toJson();

    return {
      ...Telemetry.GVK,
      ...toJson_TelemetryProps(resolved)
    };
  }
}

/**
 * @schema Telemetry
 */
export interface TelemetryProps {
  /**
   * Telemetry defines how the telemetry is generated for workloads within a mesh.
   *
   * @schema Telemetry#spec
   */
  readonly spec?: TelemetrySpec;

  /**
   * @schema Telemetry#metadata
   */
  readonly metadata?: ApiObjectMetadata;
}

/**
 * Converts an object of type 'TelemetryProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TelemetryProps(obj: TelemetryProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    spec: toJson_TelemetrySpec(obj.spec),
    metadata: obj.metadata
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Telemetry defines how the telemetry is generated for workloads within a mesh.
 *
 * @schema TelemetrySpec
 */
export interface TelemetrySpec {
  /**
   * Optional.
   *
   * @schema TelemetrySpec#accessLogging
   */
  readonly accessLogging?: TelemetrySpecAccessLogging[];

  /**
   * Optional.
   *
   * @schema TelemetrySpec#metrics
   */
  readonly metrics?: TelemetrySpecMetrics[];

  /**
   * Optional.
   *
   * @schema TelemetrySpec#selector
   */
  readonly selector?: TelemetrySpecSelector;

  /**
   * Optional.
   *
   * @schema TelemetrySpec#tracing
   */
  readonly tracing?: TelemetrySpecTracing[];
}

/**
 * Converts an object of type 'TelemetrySpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TelemetrySpec(obj: TelemetrySpec | undefined): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    accessLogging: obj.accessLogging?.map((y) => toJson_TelemetrySpecAccessLogging(y)),
    metrics: obj.metrics?.map((y) => toJson_TelemetrySpecMetrics(y)),
    selector: toJson_TelemetrySpecSelector(obj.selector),
    tracing: obj.tracing?.map((y) => toJson_TelemetrySpecTracing(y))
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TelemetrySpecAccessLogging
 */
export interface TelemetrySpecAccessLogging {
  /**
   * Controls logging.
   *
   * @schema TelemetrySpecAccessLogging#disabled
   */
  readonly disabled?: boolean;

  /**
   * Optional.
   *
   * @schema TelemetrySpecAccessLogging#providers
   */
  readonly providers?: TelemetrySpecAccessLoggingProviders[];
}

/**
 * Converts an object of type 'TelemetrySpecAccessLogging' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TelemetrySpecAccessLogging(
  obj: TelemetrySpecAccessLogging | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    disabled: obj.disabled,
    providers: obj.providers?.map((y) => toJson_TelemetrySpecAccessLoggingProviders(y))
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TelemetrySpecMetrics
 */
export interface TelemetrySpecMetrics {
  /**
   * Optional.
   *
   * @schema TelemetrySpecMetrics#overrides
   */
  readonly overrides?: TelemetrySpecMetricsOverrides[];

  /**
   * Optional.
   *
   * @schema TelemetrySpecMetrics#providers
   */
  readonly providers?: TelemetrySpecMetricsProviders[];
}

/**
 * Converts an object of type 'TelemetrySpecMetrics' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TelemetrySpecMetrics(obj: TelemetrySpecMetrics | undefined): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    overrides: obj.overrides?.map((y) => toJson_TelemetrySpecMetricsOverrides(y)),
    providers: obj.providers?.map((y) => toJson_TelemetrySpecMetricsProviders(y))
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Optional.
 *
 * @schema TelemetrySpecSelector
 */
export interface TelemetrySpecSelector {
  /**
   * @schema TelemetrySpecSelector#matchLabels
   */
  readonly matchLabels?: { [key: string]: string };
}

/**
 * Converts an object of type 'TelemetrySpecSelector' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TelemetrySpecSelector(obj: TelemetrySpecSelector | undefined): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    matchLabels:
      obj.matchLabels === undefined
        ? undefined
        : Object.entries(obj.matchLabels).reduce((r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }), {})
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TelemetrySpecTracing
 */
export interface TelemetrySpecTracing {
  /**
   * Optional.
   *
   * @schema TelemetrySpecTracing#customTags
   */
  readonly customTags?: { [key: string]: TelemetrySpecTracingCustomTags };

  /**
   * Controls span reporting.
   *
   * @schema TelemetrySpecTracing#disableSpanReporting
   */
  readonly disableSpanReporting?: boolean;

  /**
   * Optional.
   *
   * @schema TelemetrySpecTracing#providers
   */
  readonly providers?: TelemetrySpecTracingProviders[];

  /**
   * @schema TelemetrySpecTracing#randomSamplingPercentage
   */
  readonly randomSamplingPercentage?: number;
}

/**
 * Converts an object of type 'TelemetrySpecTracing' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TelemetrySpecTracing(obj: TelemetrySpecTracing | undefined): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    customTags:
      obj.customTags === undefined
        ? undefined
        : Object.entries(obj.customTags).reduce(
            (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: toJson_TelemetrySpecTracingCustomTags(i[1]) }),
            {}
          ),
    disableSpanReporting: obj.disableSpanReporting,
    providers: obj.providers?.map((y) => toJson_TelemetrySpecTracingProviders(y)),
    randomSamplingPercentage: obj.randomSamplingPercentage
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TelemetrySpecAccessLoggingProviders
 */
export interface TelemetrySpecAccessLoggingProviders {
  /**
   * Required.
   *
   * @schema TelemetrySpecAccessLoggingProviders#name
   */
  readonly name?: string;
}

/**
 * Converts an object of type 'TelemetrySpecAccessLoggingProviders' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TelemetrySpecAccessLoggingProviders(
  obj: TelemetrySpecAccessLoggingProviders | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    name: obj.name
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TelemetrySpecMetricsOverrides
 */
export interface TelemetrySpecMetricsOverrides {
  /**
   * Optional.
   *
   * @schema TelemetrySpecMetricsOverrides#disabled
   */
  readonly disabled?: boolean;

  /**
   * Match allows provides the scope of the override.
   *
   * @schema TelemetrySpecMetricsOverrides#match
   */
  readonly match?: TelemetrySpecMetricsOverridesMatch;

  /**
   * Optional.
   *
   * @schema TelemetrySpecMetricsOverrides#tagOverrides
   */
  readonly tagOverrides?: { [key: string]: TelemetrySpecMetricsOverridesTagOverrides };
}

/**
 * Converts an object of type 'TelemetrySpecMetricsOverrides' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TelemetrySpecMetricsOverrides(
  obj: TelemetrySpecMetricsOverrides | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    disabled: obj.disabled,
    match: toJson_TelemetrySpecMetricsOverridesMatch(obj.match),
    tagOverrides:
      obj.tagOverrides === undefined
        ? undefined
        : Object.entries(obj.tagOverrides).reduce(
            (r, i) =>
              i[1] === undefined ? r : { ...r, [i[0]]: toJson_TelemetrySpecMetricsOverridesTagOverrides(i[1]) },
            {}
          )
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TelemetrySpecMetricsProviders
 */
export interface TelemetrySpecMetricsProviders {
  /**
   * Required.
   *
   * @schema TelemetrySpecMetricsProviders#name
   */
  readonly name?: string;
}

/**
 * Converts an object of type 'TelemetrySpecMetricsProviders' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TelemetrySpecMetricsProviders(
  obj: TelemetrySpecMetricsProviders | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    name: obj.name
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TelemetrySpecTracingCustomTags
 */
export interface TelemetrySpecTracingCustomTags {
  /**
   * Environment adds the value of an environment variable to each span.
   *
   * @schema TelemetrySpecTracingCustomTags#environment
   */
  readonly environment?: TelemetrySpecTracingCustomTagsEnvironment;

  /**
   * RequestHeader adds the value of an header from the request to each span.
   *
   * @schema TelemetrySpecTracingCustomTags#header
   */
  readonly header?: TelemetrySpecTracingCustomTagsHeader;

  /**
   * Literal adds the same, hard-coded value to each span.
   *
   * @schema TelemetrySpecTracingCustomTags#literal
   */
  readonly literal?: TelemetrySpecTracingCustomTagsLiteral;
}

/**
 * Converts an object of type 'TelemetrySpecTracingCustomTags' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TelemetrySpecTracingCustomTags(
  obj: TelemetrySpecTracingCustomTags | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    environment: toJson_TelemetrySpecTracingCustomTagsEnvironment(obj.environment),
    header: toJson_TelemetrySpecTracingCustomTagsHeader(obj.header),
    literal: toJson_TelemetrySpecTracingCustomTagsLiteral(obj.literal)
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TelemetrySpecTracingProviders
 */
export interface TelemetrySpecTracingProviders {
  /**
   * Required.
   *
   * @schema TelemetrySpecTracingProviders#name
   */
  readonly name?: string;
}

/**
 * Converts an object of type 'TelemetrySpecTracingProviders' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TelemetrySpecTracingProviders(
  obj: TelemetrySpecTracingProviders | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    name: obj.name
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Match allows provides the scope of the override.
 *
 * @schema TelemetrySpecMetricsOverridesMatch
 */
export interface TelemetrySpecMetricsOverridesMatch {
  /**
   * Allows free-form specification of a metric.
   *
   * @schema TelemetrySpecMetricsOverridesMatch#customMetric
   */
  readonly customMetric?: string;

  /**
   * One of the well-known Istio Standard Metrics.
   *
   * @schema TelemetrySpecMetricsOverridesMatch#metric
   */
  readonly metric?: TelemetrySpecMetricsOverridesMatchMetric;

  /**
   * Controls which mode of metrics generation is selected: CLIENT and/or SERVER.
   *
   * @schema TelemetrySpecMetricsOverridesMatch#mode
   */
  readonly mode?: TelemetrySpecMetricsOverridesMatchMode;
}

/**
 * Converts an object of type 'TelemetrySpecMetricsOverridesMatch' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TelemetrySpecMetricsOverridesMatch(
  obj: TelemetrySpecMetricsOverridesMatch | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    customMetric: obj.customMetric,
    metric: obj.metric,
    mode: obj.mode
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TelemetrySpecMetricsOverridesTagOverrides
 */
export interface TelemetrySpecMetricsOverridesTagOverrides {
  /**
   * Operation controls whether or not to update/add a tag, or to remove it.
   *
   * @schema TelemetrySpecMetricsOverridesTagOverrides#operation
   */
  readonly operation?: TelemetrySpecMetricsOverridesTagOverridesOperation;

  /**
   * Value is only considered if the operation is `UPSERT`.
   *
   * @schema TelemetrySpecMetricsOverridesTagOverrides#value
   */
  readonly value?: string;
}

/**
 * Converts an object of type 'TelemetrySpecMetricsOverridesTagOverrides' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TelemetrySpecMetricsOverridesTagOverrides(
  obj: TelemetrySpecMetricsOverridesTagOverrides | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    operation: obj.operation,
    value: obj.value
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Environment adds the value of an environment variable to each span.
 *
 * @schema TelemetrySpecTracingCustomTagsEnvironment
 */
export interface TelemetrySpecTracingCustomTagsEnvironment {
  /**
   * Optional.
   *
   * @schema TelemetrySpecTracingCustomTagsEnvironment#defaultValue
   */
  readonly defaultValue?: string;

  /**
   * Name of the environment variable from which to extract the tag value.
   *
   * @schema TelemetrySpecTracingCustomTagsEnvironment#name
   */
  readonly name?: string;
}

/**
 * Converts an object of type 'TelemetrySpecTracingCustomTagsEnvironment' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TelemetrySpecTracingCustomTagsEnvironment(
  obj: TelemetrySpecTracingCustomTagsEnvironment | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    defaultValue: obj.defaultValue,
    name: obj.name
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * RequestHeader adds the value of an header from the request to each span.
 *
 * @schema TelemetrySpecTracingCustomTagsHeader
 */
export interface TelemetrySpecTracingCustomTagsHeader {
  /**
   * Optional.
   *
   * @schema TelemetrySpecTracingCustomTagsHeader#defaultValue
   */
  readonly defaultValue?: string;

  /**
   * Name of the header from which to extract the tag value.
   *
   * @schema TelemetrySpecTracingCustomTagsHeader#name
   */
  readonly name?: string;
}

/**
 * Converts an object of type 'TelemetrySpecTracingCustomTagsHeader' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TelemetrySpecTracingCustomTagsHeader(
  obj: TelemetrySpecTracingCustomTagsHeader | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    defaultValue: obj.defaultValue,
    name: obj.name
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Literal adds the same, hard-coded value to each span.
 *
 * @schema TelemetrySpecTracingCustomTagsLiteral
 */
export interface TelemetrySpecTracingCustomTagsLiteral {
  /**
   * The tag value to use.
   *
   * @schema TelemetrySpecTracingCustomTagsLiteral#value
   */
  readonly value?: string;
}

/**
 * Converts an object of type 'TelemetrySpecTracingCustomTagsLiteral' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TelemetrySpecTracingCustomTagsLiteral(
  obj: TelemetrySpecTracingCustomTagsLiteral | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    value: obj.value
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * One of the well-known Istio Standard Metrics.
 *
 * @schema TelemetrySpecMetricsOverridesMatchMetric
 */
export enum TelemetrySpecMetricsOverridesMatchMetric {
  /** ALL_METRICS */
  ALL_METRICS = 'ALL_METRICS',
  /** REQUEST_COUNT */
  REQUEST_COUNT = 'REQUEST_COUNT',
  /** REQUEST_DURATION */
  REQUEST_DURATION = 'REQUEST_DURATION',
  /** REQUEST_SIZE */
  REQUEST_SIZE = 'REQUEST_SIZE',
  /** RESPONSE_SIZE */
  RESPONSE_SIZE = 'RESPONSE_SIZE',
  /** TCP_OPENED_CONNECTIONS */
  TCP_OPENED_CONNECTIONS = 'TCP_OPENED_CONNECTIONS',
  /** TCP_CLOSED_CONNECTIONS */
  TCP_CLOSED_CONNECTIONS = 'TCP_CLOSED_CONNECTIONS',
  /** TCP_SENT_BYTES */
  TCP_SENT_BYTES = 'TCP_SENT_BYTES',
  /** TCP_RECEIVED_BYTES */
  TCP_RECEIVED_BYTES = 'TCP_RECEIVED_BYTES',
  /** GRPC_REQUEST_MESSAGES */
  GRPC_REQUEST_MESSAGES = 'GRPC_REQUEST_MESSAGES',
  /** GRPC_RESPONSE_MESSAGES */
  GRPC_RESPONSE_MESSAGES = 'GRPC_RESPONSE_MESSAGES'
}

/**
 * Controls which mode of metrics generation is selected: CLIENT and/or SERVER.
 *
 * @schema TelemetrySpecMetricsOverridesMatchMode
 */
export enum TelemetrySpecMetricsOverridesMatchMode {
  /** CLIENT_AND_SERVER */
  CLIENT_AND_SERVER = 'CLIENT_AND_SERVER',
  /** CLIENT */
  CLIENT = 'CLIENT',
  /** SERVER */
  SERVER = 'SERVER'
}

/**
 * Operation controls whether or not to update/add a tag, or to remove it.
 *
 * @schema TelemetrySpecMetricsOverridesTagOverridesOperation
 */
export enum TelemetrySpecMetricsOverridesTagOverridesOperation {
  /** UPSERT */
  UPSERT = 'UPSERT',
  /** REMOVE */
  REMOVE = 'REMOVE'
}
