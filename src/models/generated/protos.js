/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.bundle = (function() {

    /**
     * Namespace bundle.
     * @exports bundle
     * @namespace
     */
    var bundle = {};

    bundle.SealedBundle = (function() {

        /**
         * Properties of a SealedBundle.
         * @memberof bundle
         * @interface ISealedBundle
         * @property {bundle.IBundle|null} [bundle] SealedBundle bundle
         * @property {string|null} [appId] SealedBundle appId
         * @property {string|null} [credentialId] SealedBundle credentialId
         * @property {string|null} [sessionId] SealedBundle sessionId
         * @property {string|null} [userId] SealedBundle userId
         * @property {number|null} [serverTimeMillis] SealedBundle serverTimeMillis
         * @property {string|null} [installId] SealedBundle installId
         * @property {string|null} [clientUserId] SealedBundle clientUserId
         * @property {string|null} [remoteIp] SealedBundle remoteIp
         * @property {string|null} [journeyId] SealedBundle journeyId
         */

        /**
         * Constructs a new SealedBundle.
         * @memberof bundle
         * @classdesc Represents a SealedBundle.
         * @implements ISealedBundle
         * @constructor
         * @param {bundle.ISealedBundle=} [properties] Properties to set
         */
        function SealedBundle(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SealedBundle bundle.
         * @member {bundle.IBundle|null|undefined} bundle
         * @memberof bundle.SealedBundle
         * @instance
         */
        SealedBundle.prototype.bundle = null;

        /**
         * SealedBundle appId.
         * @member {string} appId
         * @memberof bundle.SealedBundle
         * @instance
         */
        SealedBundle.prototype.appId = "";

        /**
         * SealedBundle credentialId.
         * @member {string} credentialId
         * @memberof bundle.SealedBundle
         * @instance
         */
        SealedBundle.prototype.credentialId = "";

        /**
         * SealedBundle sessionId.
         * @member {string} sessionId
         * @memberof bundle.SealedBundle
         * @instance
         */
        SealedBundle.prototype.sessionId = "";

        /**
         * SealedBundle userId.
         * @member {string} userId
         * @memberof bundle.SealedBundle
         * @instance
         */
        SealedBundle.prototype.userId = "";

        /**
         * SealedBundle serverTimeMillis.
         * @member {number} serverTimeMillis
         * @memberof bundle.SealedBundle
         * @instance
         */
        SealedBundle.prototype.serverTimeMillis = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SealedBundle installId.
         * @member {string} installId
         * @memberof bundle.SealedBundle
         * @instance
         */
        SealedBundle.prototype.installId = "";

        /**
         * SealedBundle clientUserId.
         * @member {string} clientUserId
         * @memberof bundle.SealedBundle
         * @instance
         */
        SealedBundle.prototype.clientUserId = "";

        /**
         * SealedBundle remoteIp.
         * @member {string} remoteIp
         * @memberof bundle.SealedBundle
         * @instance
         */
        SealedBundle.prototype.remoteIp = "";

        /**
         * SealedBundle journeyId.
         * @member {string} journeyId
         * @memberof bundle.SealedBundle
         * @instance
         */
        SealedBundle.prototype.journeyId = "";

        /**
         * Creates a new SealedBundle instance using the specified properties.
         * @function create
         * @memberof bundle.SealedBundle
         * @static
         * @param {bundle.ISealedBundle=} [properties] Properties to set
         * @returns {bundle.SealedBundle} SealedBundle instance
         */
        SealedBundle.create = function create(properties) {
            return new SealedBundle(properties);
        };

        /**
         * Encodes the specified SealedBundle message. Does not implicitly {@link bundle.SealedBundle.verify|verify} messages.
         * @function encode
         * @memberof bundle.SealedBundle
         * @static
         * @param {bundle.ISealedBundle} message SealedBundle message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SealedBundle.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.bundle != null && Object.hasOwnProperty.call(message, "bundle"))
                $root.bundle.Bundle.encode(message.bundle, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.appId != null && Object.hasOwnProperty.call(message, "appId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.appId);
            if (message.credentialId != null && Object.hasOwnProperty.call(message, "credentialId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.credentialId);
            if (message.sessionId != null && Object.hasOwnProperty.call(message, "sessionId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.sessionId);
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.userId);
            if (message.serverTimeMillis != null && Object.hasOwnProperty.call(message, "serverTimeMillis"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.serverTimeMillis);
            if (message.installId != null && Object.hasOwnProperty.call(message, "installId"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.installId);
            if (message.clientUserId != null && Object.hasOwnProperty.call(message, "clientUserId"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.clientUserId);
            if (message.remoteIp != null && Object.hasOwnProperty.call(message, "remoteIp"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.remoteIp);
            if (message.journeyId != null && Object.hasOwnProperty.call(message, "journeyId"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.journeyId);
            return writer;
        };

        /**
         * Decodes a SealedBundle message from the specified reader or buffer.
         * @function decode
         * @memberof bundle.SealedBundle
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bundle.SealedBundle} SealedBundle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SealedBundle.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bundle.SealedBundle();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.bundle = $root.bundle.Bundle.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.appId = reader.string();
                    break;
                case 3:
                    message.credentialId = reader.string();
                    break;
                case 4:
                    message.sessionId = reader.string();
                    break;
                case 5:
                    message.userId = reader.string();
                    break;
                case 6:
                    message.serverTimeMillis = reader.int64();
                    break;
                case 7:
                    message.installId = reader.string();
                    break;
                case 8:
                    message.clientUserId = reader.string();
                    break;
                case 9:
                    message.remoteIp = reader.string();
                    break;
                case 10:
                    message.journeyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return SealedBundle;
    })();

    bundle.Bundle = (function() {

        /**
         * Properties of a Bundle.
         * @memberof bundle
         * @interface IBundle
         * @property {Array.<bundle.ILocation>|null} [locationData] Device location as a list of GPS coordinates. Granularity depends on app permissions.
         * Currently only supported through the Web SDK
         * @property {Array.<bundle.IAccelerometer>|null} [accelerometerData] Bundle accelerometerData
         * @property {Array.<bundle.IMagnetometer>|null} [magnetometerData] Magnetic field as perceived by the device.
         * @property {Array.<bundle.IGyroscope>|null} [gyroscopeData] Rate of rotation of the device around the three sensor axes.
         * @property {bundle.IClock|null} [clientTime] Bundle clientTime
         * @property {bundle.IBattery|null} [battery] Bundle battery
         * @property {Array.<bundle.IOrientation>|null} [orientationData] Device orientation reported as azimuth, pitch and roll.
         * @property {Array.<bundle.IPointer>|null} [pointerData] Bundle pointerData
         * @property {Array.<bundle.IAccelerometer>|null} [linearAccelerometerData] Bundle linearAccelerometerData
         * @property {number|null} [index] Bundle index
         * @property {Array.<bundle.ITextChange>|null} [textChangeData] Bundle textChangeData
         * @property {Array.<bundle.IKeyPress>|null} [keyPressData] Bundle keyPressData
         * @property {Array.<bundle.IFocusChange>|null} [focusChangeData] Bundle focusChangeData
         * @property {Array.<bundle.IViewportScroll>|null} [viewportScrollData] Bundle viewportScrollData
         * @property {Array.<bundle.IMouseWheel>|null} [mouseWheelData] Bundle mouseWheelData
         * @property {Array.<bundle.IPermissionEvent>|null} [permissionEvents] Bundle permissionEvents
         * @property {Array.<bundle.IViewportSizeEvent>|null} [viewportSizeEvents] Bundle viewportSizeEvents
         * @property {Array.<bundle.IAppLifeCycleEvent>|null} [appLifeCycleEvents] Bundle appLifeCycleEvents
         * @property {Array.<bundle.ICustomEvent>|null} [customEvents] Bundle customEvents
         * @property {Array.<bundle.IClick>|null} [clickData] Bundle clickData
         * @property {boolean|null} [isFinalBundle] Bundle isFinalBundle
         * @property {Object.<string,feature.IFeature>|null} [features] Bundle features
         * @property {Array.<bundle.IInputChange>|null} [inputChangeData] Bundle inputChangeData
         * @property {Array.<bundle.IFormSubmitEvent>|null} [formSubmitEvents] Bundle formSubmitEvents
         * @property {Array.<bundle.IContextMenuEvent>|null} [contextMenuEvents] Bundle contextMenuEvents
         * @property {bundle.IFrameRateEvent|null} [frameRateEvent] Bundle frameRateEvent
         */

        /**
         * Constructs a new Bundle.
         * @memberof bundle
         * @classdesc Represents a Bundle.
         * @implements IBundle
         * @constructor
         * @param {bundle.IBundle=} [properties] Properties to set
         */
        function Bundle(properties) {
            this.locationData = [];
            this.accelerometerData = [];
            this.magnetometerData = [];
            this.gyroscopeData = [];
            this.orientationData = [];
            this.pointerData = [];
            this.linearAccelerometerData = [];
            this.textChangeData = [];
            this.keyPressData = [];
            this.focusChangeData = [];
            this.viewportScrollData = [];
            this.mouseWheelData = [];
            this.permissionEvents = [];
            this.viewportSizeEvents = [];
            this.appLifeCycleEvents = [];
            this.customEvents = [];
            this.clickData = [];
            this.features = {};
            this.inputChangeData = [];
            this.formSubmitEvents = [];
            this.contextMenuEvents = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Device location as a list of GPS coordinates. Granularity depends on app permissions.
         * Currently only supported through the Web SDK
         * @member {Array.<bundle.ILocation>} locationData
         * @memberof bundle.Bundle
         * @instance
         */
        Bundle.prototype.locationData = $util.emptyArray;

        /**
         * Bundle accelerometerData.
         * @member {Array.<bundle.IAccelerometer>} accelerometerData
         * @memberof bundle.Bundle
         * @instance
         */
        Bundle.prototype.accelerometerData = $util.emptyArray;

        /**
         * Magnetic field as perceived by the device.
         * @member {Array.<bundle.IMagnetometer>} magnetometerData
         * @memberof bundle.Bundle
         * @instance
         */
        Bundle.prototype.magnetometerData = $util.emptyArray;

        /**
         * Rate of rotation of the device around the three sensor axes.
         * @member {Array.<bundle.IGyroscope>} gyroscopeData
         * @memberof bundle.Bundle
         * @instance
         */
        Bundle.prototype.gyroscopeData = $util.emptyArray;

        /**
         * Bundle clientTime.
         * @member {bundle.IClock|null|undefined} clientTime
         * @memberof bundle.Bundle
         * @instance
         */
        Bundle.prototype.clientTime = null;

        /**
         * Bundle battery.
         * @member {bundle.IBattery|null|undefined} battery
         * @memberof bundle.Bundle
         * @instance
         */
        Bundle.prototype.battery = null;

        /**
         * Device orientation reported as azimuth, pitch and roll.
         * @member {Array.<bundle.IOrientation>} orientationData
         * @memberof bundle.Bundle
         * @instance
         */
        Bundle.prototype.orientationData = $util.emptyArray;

        /**
         * Bundle pointerData.
         * @member {Array.<bundle.IPointer>} pointerData
         * @memberof bundle.Bundle
         * @instance
         */
        Bundle.prototype.pointerData = $util.emptyArray;

        /**
         * Bundle linearAccelerometerData.
         * @member {Array.<bundle.IAccelerometer>} linearAccelerometerData
         * @memberof bundle.Bundle
         * @instance
         */
        Bundle.prototype.linearAccelerometerData = $util.emptyArray;

        /**
         * Bundle index.
         * @member {number} index
         * @memberof bundle.Bundle
         * @instance
         */
        Bundle.prototype.index = 0;

        /**
         * Bundle textChangeData.
         * @member {Array.<bundle.ITextChange>} textChangeData
         * @memberof bundle.Bundle
         * @instance
         */
        Bundle.prototype.textChangeData = $util.emptyArray;

        /**
         * Bundle keyPressData.
         * @member {Array.<bundle.IKeyPress>} keyPressData
         * @memberof bundle.Bundle
         * @instance
         */
        Bundle.prototype.keyPressData = $util.emptyArray;

        /**
         * Bundle focusChangeData.
         * @member {Array.<bundle.IFocusChange>} focusChangeData
         * @memberof bundle.Bundle
         * @instance
         */
        Bundle.prototype.focusChangeData = $util.emptyArray;

        /**
         * Bundle viewportScrollData.
         * @member {Array.<bundle.IViewportScroll>} viewportScrollData
         * @memberof bundle.Bundle
         * @instance
         */
        Bundle.prototype.viewportScrollData = $util.emptyArray;

        /**
         * Bundle mouseWheelData.
         * @member {Array.<bundle.IMouseWheel>} mouseWheelData
         * @memberof bundle.Bundle
         * @instance
         */
        Bundle.prototype.mouseWheelData = $util.emptyArray;

        /**
         * Bundle permissionEvents.
         * @member {Array.<bundle.IPermissionEvent>} permissionEvents
         * @memberof bundle.Bundle
         * @instance
         */
        Bundle.prototype.permissionEvents = $util.emptyArray;

        /**
         * Bundle viewportSizeEvents.
         * @member {Array.<bundle.IViewportSizeEvent>} viewportSizeEvents
         * @memberof bundle.Bundle
         * @instance
         */
        Bundle.prototype.viewportSizeEvents = $util.emptyArray;

        /**
         * Bundle appLifeCycleEvents.
         * @member {Array.<bundle.IAppLifeCycleEvent>} appLifeCycleEvents
         * @memberof bundle.Bundle
         * @instance
         */
        Bundle.prototype.appLifeCycleEvents = $util.emptyArray;

        /**
         * Bundle customEvents.
         * @member {Array.<bundle.ICustomEvent>} customEvents
         * @memberof bundle.Bundle
         * @instance
         */
        Bundle.prototype.customEvents = $util.emptyArray;

        /**
         * Bundle clickData.
         * @member {Array.<bundle.IClick>} clickData
         * @memberof bundle.Bundle
         * @instance
         */
        Bundle.prototype.clickData = $util.emptyArray;

        /**
         * Bundle isFinalBundle.
         * @member {boolean} isFinalBundle
         * @memberof bundle.Bundle
         * @instance
         */
        Bundle.prototype.isFinalBundle = false;

        /**
         * Bundle features.
         * @member {Object.<string,feature.IFeature>} features
         * @memberof bundle.Bundle
         * @instance
         */
        Bundle.prototype.features = $util.emptyObject;

        /**
         * Bundle inputChangeData.
         * @member {Array.<bundle.IInputChange>} inputChangeData
         * @memberof bundle.Bundle
         * @instance
         */
        Bundle.prototype.inputChangeData = $util.emptyArray;

        /**
         * Bundle formSubmitEvents.
         * @member {Array.<bundle.IFormSubmitEvent>} formSubmitEvents
         * @memberof bundle.Bundle
         * @instance
         */
        Bundle.prototype.formSubmitEvents = $util.emptyArray;

        /**
         * Bundle contextMenuEvents.
         * @member {Array.<bundle.IContextMenuEvent>} contextMenuEvents
         * @memberof bundle.Bundle
         * @instance
         */
        Bundle.prototype.contextMenuEvents = $util.emptyArray;

        /**
         * Bundle frameRateEvent.
         * @member {bundle.IFrameRateEvent|null|undefined} frameRateEvent
         * @memberof bundle.Bundle
         * @instance
         */
        Bundle.prototype.frameRateEvent = null;

        /**
         * Creates a new Bundle instance using the specified properties.
         * @function create
         * @memberof bundle.Bundle
         * @static
         * @param {bundle.IBundle=} [properties] Properties to set
         * @returns {bundle.Bundle} Bundle instance
         */
        Bundle.create = function create(properties) {
            return new Bundle(properties);
        };

        /**
         * Encodes the specified Bundle message. Does not implicitly {@link bundle.Bundle.verify|verify} messages.
         * @function encode
         * @memberof bundle.Bundle
         * @static
         * @param {bundle.IBundle} message Bundle message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Bundle.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.locationData != null && message.locationData.length)
                for (var i = 0; i < message.locationData.length; ++i)
                    $root.bundle.Location.encode(message.locationData[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.accelerometerData != null && message.accelerometerData.length)
                for (var i = 0; i < message.accelerometerData.length; ++i)
                    $root.bundle.Accelerometer.encode(message.accelerometerData[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.magnetometerData != null && message.magnetometerData.length)
                for (var i = 0; i < message.magnetometerData.length; ++i)
                    $root.bundle.Magnetometer.encode(message.magnetometerData[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.gyroscopeData != null && message.gyroscopeData.length)
                for (var i = 0; i < message.gyroscopeData.length; ++i)
                    $root.bundle.Gyroscope.encode(message.gyroscopeData[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.clientTime != null && Object.hasOwnProperty.call(message, "clientTime"))
                $root.bundle.Clock.encode(message.clientTime, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.battery != null && Object.hasOwnProperty.call(message, "battery"))
                $root.bundle.Battery.encode(message.battery, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.orientationData != null && message.orientationData.length)
                for (var i = 0; i < message.orientationData.length; ++i)
                    $root.bundle.Orientation.encode(message.orientationData[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.pointerData != null && message.pointerData.length)
                for (var i = 0; i < message.pointerData.length; ++i)
                    $root.bundle.Pointer.encode(message.pointerData[i], writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            if (message.linearAccelerometerData != null && message.linearAccelerometerData.length)
                for (var i = 0; i < message.linearAccelerometerData.length; ++i)
                    $root.bundle.Accelerometer.encode(message.linearAccelerometerData[i], writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
            if (message.index != null && Object.hasOwnProperty.call(message, "index"))
                writer.uint32(/* id 18, wireType 0 =*/144).int32(message.index);
            if (message.textChangeData != null && message.textChangeData.length)
                for (var i = 0; i < message.textChangeData.length; ++i)
                    $root.bundle.TextChange.encode(message.textChangeData[i], writer.uint32(/* id 19, wireType 2 =*/154).fork()).ldelim();
            if (message.keyPressData != null && message.keyPressData.length)
                for (var i = 0; i < message.keyPressData.length; ++i)
                    $root.bundle.KeyPress.encode(message.keyPressData[i], writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
            if (message.focusChangeData != null && message.focusChangeData.length)
                for (var i = 0; i < message.focusChangeData.length; ++i)
                    $root.bundle.FocusChange.encode(message.focusChangeData[i], writer.uint32(/* id 21, wireType 2 =*/170).fork()).ldelim();
            if (message.viewportScrollData != null && message.viewportScrollData.length)
                for (var i = 0; i < message.viewportScrollData.length; ++i)
                    $root.bundle.ViewportScroll.encode(message.viewportScrollData[i], writer.uint32(/* id 22, wireType 2 =*/178).fork()).ldelim();
            if (message.mouseWheelData != null && message.mouseWheelData.length)
                for (var i = 0; i < message.mouseWheelData.length; ++i)
                    $root.bundle.MouseWheel.encode(message.mouseWheelData[i], writer.uint32(/* id 23, wireType 2 =*/186).fork()).ldelim();
            if (message.permissionEvents != null && message.permissionEvents.length)
                for (var i = 0; i < message.permissionEvents.length; ++i)
                    $root.bundle.PermissionEvent.encode(message.permissionEvents[i], writer.uint32(/* id 24, wireType 2 =*/194).fork()).ldelim();
            if (message.viewportSizeEvents != null && message.viewportSizeEvents.length)
                for (var i = 0; i < message.viewportSizeEvents.length; ++i)
                    $root.bundle.ViewportSizeEvent.encode(message.viewportSizeEvents[i], writer.uint32(/* id 25, wireType 2 =*/202).fork()).ldelim();
            if (message.appLifeCycleEvents != null && message.appLifeCycleEvents.length)
                for (var i = 0; i < message.appLifeCycleEvents.length; ++i)
                    $root.bundle.AppLifeCycleEvent.encode(message.appLifeCycleEvents[i], writer.uint32(/* id 26, wireType 2 =*/210).fork()).ldelim();
            if (message.customEvents != null && message.customEvents.length)
                for (var i = 0; i < message.customEvents.length; ++i)
                    $root.bundle.CustomEvent.encode(message.customEvents[i], writer.uint32(/* id 27, wireType 2 =*/218).fork()).ldelim();
            if (message.clickData != null && message.clickData.length)
                for (var i = 0; i < message.clickData.length; ++i)
                    $root.bundle.Click.encode(message.clickData[i], writer.uint32(/* id 28, wireType 2 =*/226).fork()).ldelim();
            if (message.isFinalBundle != null && Object.hasOwnProperty.call(message, "isFinalBundle"))
                writer.uint32(/* id 29, wireType 0 =*/232).bool(message.isFinalBundle);
            if (message.features != null && Object.hasOwnProperty.call(message, "features"))
                for (var keys = Object.keys(message.features), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 30, wireType 2 =*/242).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                    $root.feature.Feature.encode(message.features[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            if (message.inputChangeData != null && message.inputChangeData.length)
                for (var i = 0; i < message.inputChangeData.length; ++i)
                    $root.bundle.InputChange.encode(message.inputChangeData[i], writer.uint32(/* id 31, wireType 2 =*/250).fork()).ldelim();
            if (message.formSubmitEvents != null && message.formSubmitEvents.length)
                for (var i = 0; i < message.formSubmitEvents.length; ++i)
                    $root.bundle.FormSubmitEvent.encode(message.formSubmitEvents[i], writer.uint32(/* id 32, wireType 2 =*/258).fork()).ldelim();
            if (message.contextMenuEvents != null && message.contextMenuEvents.length)
                for (var i = 0; i < message.contextMenuEvents.length; ++i)
                    $root.bundle.ContextMenuEvent.encode(message.contextMenuEvents[i], writer.uint32(/* id 33, wireType 2 =*/266).fork()).ldelim();
            if (message.frameRateEvent != null && Object.hasOwnProperty.call(message, "frameRateEvent"))
                $root.bundle.FrameRateEvent.encode(message.frameRateEvent, writer.uint32(/* id 34, wireType 2 =*/274).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a Bundle message from the specified reader or buffer.
         * @function decode
         * @memberof bundle.Bundle
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bundle.Bundle} Bundle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Bundle.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bundle.Bundle(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.locationData && message.locationData.length))
                        message.locationData = [];
                    message.locationData.push($root.bundle.Location.decode(reader, reader.uint32()));
                    break;
                case 2:
                    if (!(message.accelerometerData && message.accelerometerData.length))
                        message.accelerometerData = [];
                    message.accelerometerData.push($root.bundle.Accelerometer.decode(reader, reader.uint32()));
                    break;
                case 3:
                    if (!(message.magnetometerData && message.magnetometerData.length))
                        message.magnetometerData = [];
                    message.magnetometerData.push($root.bundle.Magnetometer.decode(reader, reader.uint32()));
                    break;
                case 4:
                    if (!(message.gyroscopeData && message.gyroscopeData.length))
                        message.gyroscopeData = [];
                    message.gyroscopeData.push($root.bundle.Gyroscope.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.clientTime = $root.bundle.Clock.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.battery = $root.bundle.Battery.decode(reader, reader.uint32());
                    break;
                case 8:
                    if (!(message.orientationData && message.orientationData.length))
                        message.orientationData = [];
                    message.orientationData.push($root.bundle.Orientation.decode(reader, reader.uint32()));
                    break;
                case 15:
                    if (!(message.pointerData && message.pointerData.length))
                        message.pointerData = [];
                    message.pointerData.push($root.bundle.Pointer.decode(reader, reader.uint32()));
                    break;
                case 16:
                    if (!(message.linearAccelerometerData && message.linearAccelerometerData.length))
                        message.linearAccelerometerData = [];
                    message.linearAccelerometerData.push($root.bundle.Accelerometer.decode(reader, reader.uint32()));
                    break;
                case 18:
                    message.index = reader.int32();
                    break;
                case 19:
                    if (!(message.textChangeData && message.textChangeData.length))
                        message.textChangeData = [];
                    message.textChangeData.push($root.bundle.TextChange.decode(reader, reader.uint32()));
                    break;
                case 20:
                    if (!(message.keyPressData && message.keyPressData.length))
                        message.keyPressData = [];
                    message.keyPressData.push($root.bundle.KeyPress.decode(reader, reader.uint32()));
                    break;
                case 21:
                    if (!(message.focusChangeData && message.focusChangeData.length))
                        message.focusChangeData = [];
                    message.focusChangeData.push($root.bundle.FocusChange.decode(reader, reader.uint32()));
                    break;
                case 22:
                    if (!(message.viewportScrollData && message.viewportScrollData.length))
                        message.viewportScrollData = [];
                    message.viewportScrollData.push($root.bundle.ViewportScroll.decode(reader, reader.uint32()));
                    break;
                case 23:
                    if (!(message.mouseWheelData && message.mouseWheelData.length))
                        message.mouseWheelData = [];
                    message.mouseWheelData.push($root.bundle.MouseWheel.decode(reader, reader.uint32()));
                    break;
                case 24:
                    if (!(message.permissionEvents && message.permissionEvents.length))
                        message.permissionEvents = [];
                    message.permissionEvents.push($root.bundle.PermissionEvent.decode(reader, reader.uint32()));
                    break;
                case 25:
                    if (!(message.viewportSizeEvents && message.viewportSizeEvents.length))
                        message.viewportSizeEvents = [];
                    message.viewportSizeEvents.push($root.bundle.ViewportSizeEvent.decode(reader, reader.uint32()));
                    break;
                case 26:
                    if (!(message.appLifeCycleEvents && message.appLifeCycleEvents.length))
                        message.appLifeCycleEvents = [];
                    message.appLifeCycleEvents.push($root.bundle.AppLifeCycleEvent.decode(reader, reader.uint32()));
                    break;
                case 27:
                    if (!(message.customEvents && message.customEvents.length))
                        message.customEvents = [];
                    message.customEvents.push($root.bundle.CustomEvent.decode(reader, reader.uint32()));
                    break;
                case 28:
                    if (!(message.clickData && message.clickData.length))
                        message.clickData = [];
                    message.clickData.push($root.bundle.Click.decode(reader, reader.uint32()));
                    break;
                case 29:
                    message.isFinalBundle = reader.bool();
                    break;
                case 30:
                    if (message.features === $util.emptyObject)
                        message.features = {};
                    var end2 = reader.uint32() + reader.pos;
                    key = "";
                    value = null;
                    while (reader.pos < end2) {
                        var tag2 = reader.uint32();
                        switch (tag2 >>> 3) {
                        case 1:
                            key = reader.string();
                            break;
                        case 2:
                            value = $root.feature.Feature.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag2 & 7);
                            break;
                        }
                    }
                    message.features[key] = value;
                    break;
                case 31:
                    if (!(message.inputChangeData && message.inputChangeData.length))
                        message.inputChangeData = [];
                    message.inputChangeData.push($root.bundle.InputChange.decode(reader, reader.uint32()));
                    break;
                case 32:
                    if (!(message.formSubmitEvents && message.formSubmitEvents.length))
                        message.formSubmitEvents = [];
                    message.formSubmitEvents.push($root.bundle.FormSubmitEvent.decode(reader, reader.uint32()));
                    break;
                case 33:
                    if (!(message.contextMenuEvents && message.contextMenuEvents.length))
                        message.contextMenuEvents = [];
                    message.contextMenuEvents.push($root.bundle.ContextMenuEvent.decode(reader, reader.uint32()));
                    break;
                case 34:
                    message.frameRateEvent = $root.bundle.FrameRateEvent.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return Bundle;
    })();

    bundle.Offset2D = (function() {

        /**
         * Properties of an Offset2D.
         * @memberof bundle
         * @interface IOffset2D
         * @property {number|null} [dx] Offset2D dx
         * @property {number|null} [dy] Offset2D dy
         */

        /**
         * Constructs a new Offset2D.
         * @memberof bundle
         * @classdesc Represents an Offset2D.
         * @implements IOffset2D
         * @constructor
         * @param {bundle.IOffset2D=} [properties] Properties to set
         */
        function Offset2D(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Offset2D dx.
         * @member {number} dx
         * @memberof bundle.Offset2D
         * @instance
         */
        Offset2D.prototype.dx = 0;

        /**
         * Offset2D dy.
         * @member {number} dy
         * @memberof bundle.Offset2D
         * @instance
         */
        Offset2D.prototype.dy = 0;

        /**
         * Creates a new Offset2D instance using the specified properties.
         * @function create
         * @memberof bundle.Offset2D
         * @static
         * @param {bundle.IOffset2D=} [properties] Properties to set
         * @returns {bundle.Offset2D} Offset2D instance
         */
        Offset2D.create = function create(properties) {
            return new Offset2D(properties);
        };

        /**
         * Encodes the specified Offset2D message. Does not implicitly {@link bundle.Offset2D.verify|verify} messages.
         * @function encode
         * @memberof bundle.Offset2D
         * @static
         * @param {bundle.IOffset2D} message Offset2D message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Offset2D.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.dx != null && Object.hasOwnProperty.call(message, "dx"))
                writer.uint32(/* id 1, wireType 1 =*/9).double(message.dx);
            if (message.dy != null && Object.hasOwnProperty.call(message, "dy"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.dy);
            return writer;
        };

        /**
         * Decodes an Offset2D message from the specified reader or buffer.
         * @function decode
         * @memberof bundle.Offset2D
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bundle.Offset2D} Offset2D
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Offset2D.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bundle.Offset2D();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.dx = reader.double();
                    break;
                case 2:
                    message.dy = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return Offset2D;
    })();

    bundle.ClosedRange = (function() {

        /**
         * Properties of a ClosedRange.
         * @memberof bundle
         * @interface IClosedRange
         * @property {number|null} [lowerBound] ClosedRange lowerBound
         * @property {number|null} [upperBound] ClosedRange upperBound
         */

        /**
         * Constructs a new ClosedRange.
         * @memberof bundle
         * @classdesc Represents a ClosedRange.
         * @implements IClosedRange
         * @constructor
         * @param {bundle.IClosedRange=} [properties] Properties to set
         */
        function ClosedRange(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ClosedRange lowerBound.
         * @member {number} lowerBound
         * @memberof bundle.ClosedRange
         * @instance
         */
        ClosedRange.prototype.lowerBound = 0;

        /**
         * ClosedRange upperBound.
         * @member {number} upperBound
         * @memberof bundle.ClosedRange
         * @instance
         */
        ClosedRange.prototype.upperBound = 0;

        /**
         * Creates a new ClosedRange instance using the specified properties.
         * @function create
         * @memberof bundle.ClosedRange
         * @static
         * @param {bundle.IClosedRange=} [properties] Properties to set
         * @returns {bundle.ClosedRange} ClosedRange instance
         */
        ClosedRange.create = function create(properties) {
            return new ClosedRange(properties);
        };

        /**
         * Encodes the specified ClosedRange message. Does not implicitly {@link bundle.ClosedRange.verify|verify} messages.
         * @function encode
         * @memberof bundle.ClosedRange
         * @static
         * @param {bundle.IClosedRange} message ClosedRange message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClosedRange.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.lowerBound != null && Object.hasOwnProperty.call(message, "lowerBound"))
                writer.uint32(/* id 1, wireType 1 =*/9).double(message.lowerBound);
            if (message.upperBound != null && Object.hasOwnProperty.call(message, "upperBound"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.upperBound);
            return writer;
        };

        /**
         * Decodes a ClosedRange message from the specified reader or buffer.
         * @function decode
         * @memberof bundle.ClosedRange
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bundle.ClosedRange} ClosedRange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClosedRange.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bundle.ClosedRange();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.lowerBound = reader.double();
                    break;
                case 2:
                    message.upperBound = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ClosedRange;
    })();

    bundle.Battery = (function() {

        /**
         * Properties of a Battery.
         * @memberof bundle
         * @interface IBattery
         * @property {number|null} [capacity] Battery capacity
         * @property {bundle.Battery.State|null} [state] Battery state
         */

        /**
         * Constructs a new Battery.
         * @memberof bundle
         * @classdesc Represents a Battery.
         * @implements IBattery
         * @constructor
         * @param {bundle.IBattery=} [properties] Properties to set
         */
        function Battery(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Battery capacity.
         * @member {number} capacity
         * @memberof bundle.Battery
         * @instance
         */
        Battery.prototype.capacity = 0;

        /**
         * Battery state.
         * @member {bundle.Battery.State} state
         * @memberof bundle.Battery
         * @instance
         */
        Battery.prototype.state = 0;

        /**
         * Creates a new Battery instance using the specified properties.
         * @function create
         * @memberof bundle.Battery
         * @static
         * @param {bundle.IBattery=} [properties] Properties to set
         * @returns {bundle.Battery} Battery instance
         */
        Battery.create = function create(properties) {
            return new Battery(properties);
        };

        /**
         * Encodes the specified Battery message. Does not implicitly {@link bundle.Battery.verify|verify} messages.
         * @function encode
         * @memberof bundle.Battery
         * @static
         * @param {bundle.IBattery} message Battery message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Battery.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.capacity != null && Object.hasOwnProperty.call(message, "capacity"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.capacity);
            if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.state);
            return writer;
        };

        /**
         * Decodes a Battery message from the specified reader or buffer.
         * @function decode
         * @memberof bundle.Battery
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bundle.Battery} Battery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Battery.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bundle.Battery();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.capacity = reader.int32();
                    break;
                case 2:
                    message.state = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * State enum.
         * @name bundle.Battery.State
         * @enum {number}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} CHARGING=1 CHARGING value
         * @property {number} DISCHARGING=2 DISCHARGING value
         * @property {number} FULL=3 FULL value
         */
        Battery.State = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "CHARGING"] = 1;
            values[valuesById[2] = "DISCHARGING"] = 2;
            values[valuesById[3] = "FULL"] = 3;
            return values;
        })();

        return Battery;
    })();

    bundle.Orientation = (function() {

        /**
         * Properties of an Orientation.
         * @memberof bundle
         * @interface IOrientation
         * @property {number|null} [determinedAt] Orientation determinedAt
         * @property {number|null} [azimuth] Orientation azimuth
         * @property {number|null} [pitch] Orientation pitch
         * @property {number|null} [roll] Orientation roll
         */

        /**
         * Constructs a new Orientation.
         * @memberof bundle
         * @classdesc Device orientation reported as azimuth, pitch and roll.
         * @implements IOrientation
         * @constructor
         * @param {bundle.IOrientation=} [properties] Properties to set
         */
        function Orientation(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Orientation determinedAt.
         * @member {number} determinedAt
         * @memberof bundle.Orientation
         * @instance
         */
        Orientation.prototype.determinedAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Orientation azimuth.
         * @member {number} azimuth
         * @memberof bundle.Orientation
         * @instance
         */
        Orientation.prototype.azimuth = 0;

        /**
         * Orientation pitch.
         * @member {number} pitch
         * @memberof bundle.Orientation
         * @instance
         */
        Orientation.prototype.pitch = 0;

        /**
         * Orientation roll.
         * @member {number} roll
         * @memberof bundle.Orientation
         * @instance
         */
        Orientation.prototype.roll = 0;

        /**
         * Creates a new Orientation instance using the specified properties.
         * @function create
         * @memberof bundle.Orientation
         * @static
         * @param {bundle.IOrientation=} [properties] Properties to set
         * @returns {bundle.Orientation} Orientation instance
         */
        Orientation.create = function create(properties) {
            return new Orientation(properties);
        };

        /**
         * Encodes the specified Orientation message. Does not implicitly {@link bundle.Orientation.verify|verify} messages.
         * @function encode
         * @memberof bundle.Orientation
         * @static
         * @param {bundle.IOrientation} message Orientation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Orientation.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.determinedAt != null && Object.hasOwnProperty.call(message, "determinedAt"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.determinedAt);
            if (message.azimuth != null && Object.hasOwnProperty.call(message, "azimuth"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.azimuth);
            if (message.pitch != null && Object.hasOwnProperty.call(message, "pitch"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.pitch);
            if (message.roll != null && Object.hasOwnProperty.call(message, "roll"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.roll);
            return writer;
        };

        /**
         * Decodes an Orientation message from the specified reader or buffer.
         * @function decode
         * @memberof bundle.Orientation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bundle.Orientation} Orientation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Orientation.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bundle.Orientation();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.determinedAt = reader.int64();
                    break;
                case 2:
                    message.azimuth = reader.float();
                    break;
                case 3:
                    message.pitch = reader.float();
                    break;
                case 4:
                    message.roll = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return Orientation;
    })();

    bundle.Clock = (function() {

        /**
         * Properties of a Clock.
         * @memberof bundle
         * @interface IClock
         * @property {number|null} [wallTimeMillis] Clock wallTimeMillis
         * @property {number|null} [timerMillis] Clock timerMillis
         * @property {number|null} [timerRealtimeMillis] Clock timerRealtimeMillis
         */

        /**
         * Constructs a new Clock.
         * @memberof bundle
         * @classdesc Represents a Clock.
         * @implements IClock
         * @constructor
         * @param {bundle.IClock=} [properties] Properties to set
         */
        function Clock(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Clock wallTimeMillis.
         * @member {number} wallTimeMillis
         * @memberof bundle.Clock
         * @instance
         */
        Clock.prototype.wallTimeMillis = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Clock timerMillis.
         * @member {number} timerMillis
         * @memberof bundle.Clock
         * @instance
         */
        Clock.prototype.timerMillis = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Clock timerRealtimeMillis.
         * @member {number} timerRealtimeMillis
         * @memberof bundle.Clock
         * @instance
         */
        Clock.prototype.timerRealtimeMillis = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Clock instance using the specified properties.
         * @function create
         * @memberof bundle.Clock
         * @static
         * @param {bundle.IClock=} [properties] Properties to set
         * @returns {bundle.Clock} Clock instance
         */
        Clock.create = function create(properties) {
            return new Clock(properties);
        };

        /**
         * Encodes the specified Clock message. Does not implicitly {@link bundle.Clock.verify|verify} messages.
         * @function encode
         * @memberof bundle.Clock
         * @static
         * @param {bundle.IClock} message Clock message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Clock.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.wallTimeMillis != null && Object.hasOwnProperty.call(message, "wallTimeMillis"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.wallTimeMillis);
            if (message.timerMillis != null && Object.hasOwnProperty.call(message, "timerMillis"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.timerMillis);
            if (message.timerRealtimeMillis != null && Object.hasOwnProperty.call(message, "timerRealtimeMillis"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.timerRealtimeMillis);
            return writer;
        };

        /**
         * Decodes a Clock message from the specified reader or buffer.
         * @function decode
         * @memberof bundle.Clock
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bundle.Clock} Clock
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Clock.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bundle.Clock();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.wallTimeMillis = reader.int64();
                    break;
                case 2:
                    message.timerMillis = reader.int64();
                    break;
                case 3:
                    message.timerRealtimeMillis = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return Clock;
    })();

    bundle.Location = (function() {

        /**
         * Properties of a Location.
         * @memberof bundle
         * @interface ILocation
         * @property {number|null} [determinedAt] Location determinedAt
         * @property {number|null} [horizontalAccuracy] Location horizontalAccuracy
         * @property {number|null} [verticalAccurracy] Location verticalAccurracy
         * @property {number|null} [altitude] Location altitude
         * @property {number|null} [bearing] Location bearing
         * @property {number|null} [bearingAccuracyDegrees] Location bearingAccuracyDegrees
         * @property {number|null} [latitude] Location latitude
         * @property {number|null} [longitude] Location longitude
         * @property {string|null} [provider] Location provider
         * @property {number|null} [speed] Location speed
         * @property {number|null} [speedAccurracy] Location speedAccurracy
         */

        /**
         * Constructs a new Location.
         * @memberof bundle
         * @classdesc Android: https://developer.android.com/reference/android/location/Location.html
         * IOS(Core Location): https://developer.apple.com/documentation/corelocation/cllocation
         * This object is currently unused by the SDK.
         * @implements ILocation
         * @constructor
         * @param {bundle.ILocation=} [properties] Properties to set
         */
        function Location(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Location determinedAt.
         * @member {number} determinedAt
         * @memberof bundle.Location
         * @instance
         */
        Location.prototype.determinedAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Location horizontalAccuracy.
         * @member {number} horizontalAccuracy
         * @memberof bundle.Location
         * @instance
         */
        Location.prototype.horizontalAccuracy = 0;

        /**
         * Location verticalAccurracy.
         * @member {number} verticalAccurracy
         * @memberof bundle.Location
         * @instance
         */
        Location.prototype.verticalAccurracy = 0;

        /**
         * Location altitude.
         * @member {number} altitude
         * @memberof bundle.Location
         * @instance
         */
        Location.prototype.altitude = 0;

        /**
         * Location bearing.
         * @member {number} bearing
         * @memberof bundle.Location
         * @instance
         */
        Location.prototype.bearing = 0;

        /**
         * Location bearingAccuracyDegrees.
         * @member {number} bearingAccuracyDegrees
         * @memberof bundle.Location
         * @instance
         */
        Location.prototype.bearingAccuracyDegrees = 0;

        /**
         * Location latitude.
         * @member {number} latitude
         * @memberof bundle.Location
         * @instance
         */
        Location.prototype.latitude = 0;

        /**
         * Location longitude.
         * @member {number} longitude
         * @memberof bundle.Location
         * @instance
         */
        Location.prototype.longitude = 0;

        /**
         * Location provider.
         * @member {string} provider
         * @memberof bundle.Location
         * @instance
         */
        Location.prototype.provider = "";

        /**
         * Location speed.
         * @member {number} speed
         * @memberof bundle.Location
         * @instance
         */
        Location.prototype.speed = 0;

        /**
         * Location speedAccurracy.
         * @member {number} speedAccurracy
         * @memberof bundle.Location
         * @instance
         */
        Location.prototype.speedAccurracy = 0;

        /**
         * Creates a new Location instance using the specified properties.
         * @function create
         * @memberof bundle.Location
         * @static
         * @param {bundle.ILocation=} [properties] Properties to set
         * @returns {bundle.Location} Location instance
         */
        Location.create = function create(properties) {
            return new Location(properties);
        };

        /**
         * Encodes the specified Location message. Does not implicitly {@link bundle.Location.verify|verify} messages.
         * @function encode
         * @memberof bundle.Location
         * @static
         * @param {bundle.ILocation} message Location message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Location.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.determinedAt != null && Object.hasOwnProperty.call(message, "determinedAt"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.determinedAt);
            if (message.horizontalAccuracy != null && Object.hasOwnProperty.call(message, "horizontalAccuracy"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.horizontalAccuracy);
            if (message.verticalAccurracy != null && Object.hasOwnProperty.call(message, "verticalAccurracy"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.verticalAccurracy);
            if (message.altitude != null && Object.hasOwnProperty.call(message, "altitude"))
                writer.uint32(/* id 4, wireType 1 =*/33).double(message.altitude);
            if (message.bearing != null && Object.hasOwnProperty.call(message, "bearing"))
                writer.uint32(/* id 5, wireType 5 =*/45).float(message.bearing);
            if (message.bearingAccuracyDegrees != null && Object.hasOwnProperty.call(message, "bearingAccuracyDegrees"))
                writer.uint32(/* id 6, wireType 5 =*/53).float(message.bearingAccuracyDegrees);
            if (message.latitude != null && Object.hasOwnProperty.call(message, "latitude"))
                writer.uint32(/* id 7, wireType 1 =*/57).double(message.latitude);
            if (message.longitude != null && Object.hasOwnProperty.call(message, "longitude"))
                writer.uint32(/* id 8, wireType 1 =*/65).double(message.longitude);
            if (message.provider != null && Object.hasOwnProperty.call(message, "provider"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.provider);
            if (message.speed != null && Object.hasOwnProperty.call(message, "speed"))
                writer.uint32(/* id 10, wireType 5 =*/85).float(message.speed);
            if (message.speedAccurracy != null && Object.hasOwnProperty.call(message, "speedAccurracy"))
                writer.uint32(/* id 11, wireType 5 =*/93).float(message.speedAccurracy);
            return writer;
        };

        /**
         * Decodes a Location message from the specified reader or buffer.
         * @function decode
         * @memberof bundle.Location
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bundle.Location} Location
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Location.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bundle.Location();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.determinedAt = reader.int64();
                    break;
                case 2:
                    message.horizontalAccuracy = reader.float();
                    break;
                case 3:
                    message.verticalAccurracy = reader.float();
                    break;
                case 4:
                    message.altitude = reader.double();
                    break;
                case 5:
                    message.bearing = reader.float();
                    break;
                case 6:
                    message.bearingAccuracyDegrees = reader.float();
                    break;
                case 7:
                    message.latitude = reader.double();
                    break;
                case 8:
                    message.longitude = reader.double();
                    break;
                case 9:
                    message.provider = reader.string();
                    break;
                case 10:
                    message.speed = reader.float();
                    break;
                case 11:
                    message.speedAccurracy = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return Location;
    })();

    bundle.Accelerometer = (function() {

        /**
         * Properties of an Accelerometer.
         * @memberof bundle
         * @interface IAccelerometer
         * @property {number|null} [determinedAt] Accelerometer determinedAt
         * @property {number|null} [x] Accelerometer x
         * @property {number|null} [y] Accelerometer y
         * @property {number|null} [z] Accelerometer z
         */

        /**
         * Constructs a new Accelerometer.
         * @memberof bundle
         * @classdesc Represents an Accelerometer.
         * @implements IAccelerometer
         * @constructor
         * @param {bundle.IAccelerometer=} [properties] Properties to set
         */
        function Accelerometer(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Accelerometer determinedAt.
         * @member {number} determinedAt
         * @memberof bundle.Accelerometer
         * @instance
         */
        Accelerometer.prototype.determinedAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Accelerometer x.
         * @member {number} x
         * @memberof bundle.Accelerometer
         * @instance
         */
        Accelerometer.prototype.x = 0;

        /**
         * Accelerometer y.
         * @member {number} y
         * @memberof bundle.Accelerometer
         * @instance
         */
        Accelerometer.prototype.y = 0;

        /**
         * Accelerometer z.
         * @member {number} z
         * @memberof bundle.Accelerometer
         * @instance
         */
        Accelerometer.prototype.z = 0;

        /**
         * Creates a new Accelerometer instance using the specified properties.
         * @function create
         * @memberof bundle.Accelerometer
         * @static
         * @param {bundle.IAccelerometer=} [properties] Properties to set
         * @returns {bundle.Accelerometer} Accelerometer instance
         */
        Accelerometer.create = function create(properties) {
            return new Accelerometer(properties);
        };

        /**
         * Encodes the specified Accelerometer message. Does not implicitly {@link bundle.Accelerometer.verify|verify} messages.
         * @function encode
         * @memberof bundle.Accelerometer
         * @static
         * @param {bundle.IAccelerometer} message Accelerometer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Accelerometer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.determinedAt != null && Object.hasOwnProperty.call(message, "determinedAt"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.determinedAt);
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.y);
            if (message.z != null && Object.hasOwnProperty.call(message, "z"))
                writer.uint32(/* id 4, wireType 1 =*/33).double(message.z);
            return writer;
        };

        /**
         * Decodes an Accelerometer message from the specified reader or buffer.
         * @function decode
         * @memberof bundle.Accelerometer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bundle.Accelerometer} Accelerometer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Accelerometer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bundle.Accelerometer();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.determinedAt = reader.int64();
                    break;
                case 2:
                    message.x = reader.double();
                    break;
                case 3:
                    message.y = reader.double();
                    break;
                case 4:
                    message.z = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return Accelerometer;
    })();

    bundle.Magnetometer = (function() {

        /**
         * Properties of a Magnetometer.
         * @memberof bundle
         * @interface IMagnetometer
         * @property {number|null} [determinedAt] Magnetometer determinedAt
         * @property {number|null} [x] Magnetometer x
         * @property {number|null} [y] Magnetometer y
         * @property {number|null} [z] Magnetometer z
         */

        /**
         * Constructs a new Magnetometer.
         * @memberof bundle
         * @classdesc Magnetic field as perceived by the device.
         * @implements IMagnetometer
         * @constructor
         * @param {bundle.IMagnetometer=} [properties] Properties to set
         */
        function Magnetometer(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Magnetometer determinedAt.
         * @member {number} determinedAt
         * @memberof bundle.Magnetometer
         * @instance
         */
        Magnetometer.prototype.determinedAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Magnetometer x.
         * @member {number} x
         * @memberof bundle.Magnetometer
         * @instance
         */
        Magnetometer.prototype.x = 0;

        /**
         * Magnetometer y.
         * @member {number} y
         * @memberof bundle.Magnetometer
         * @instance
         */
        Magnetometer.prototype.y = 0;

        /**
         * Magnetometer z.
         * @member {number} z
         * @memberof bundle.Magnetometer
         * @instance
         */
        Magnetometer.prototype.z = 0;

        /**
         * Creates a new Magnetometer instance using the specified properties.
         * @function create
         * @memberof bundle.Magnetometer
         * @static
         * @param {bundle.IMagnetometer=} [properties] Properties to set
         * @returns {bundle.Magnetometer} Magnetometer instance
         */
        Magnetometer.create = function create(properties) {
            return new Magnetometer(properties);
        };

        /**
         * Encodes the specified Magnetometer message. Does not implicitly {@link bundle.Magnetometer.verify|verify} messages.
         * @function encode
         * @memberof bundle.Magnetometer
         * @static
         * @param {bundle.IMagnetometer} message Magnetometer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Magnetometer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.determinedAt != null && Object.hasOwnProperty.call(message, "determinedAt"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.determinedAt);
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.y);
            if (message.z != null && Object.hasOwnProperty.call(message, "z"))
                writer.uint32(/* id 4, wireType 1 =*/33).double(message.z);
            return writer;
        };

        /**
         * Decodes a Magnetometer message from the specified reader or buffer.
         * @function decode
         * @memberof bundle.Magnetometer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bundle.Magnetometer} Magnetometer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Magnetometer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bundle.Magnetometer();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.determinedAt = reader.int64();
                    break;
                case 2:
                    message.x = reader.double();
                    break;
                case 3:
                    message.y = reader.double();
                    break;
                case 4:
                    message.z = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return Magnetometer;
    })();

    bundle.Gyroscope = (function() {

        /**
         * Properties of a Gyroscope.
         * @memberof bundle
         * @interface IGyroscope
         * @property {number|null} [determinedAt] Gyroscope determinedAt
         * @property {number|null} [x] Gyroscope x
         * @property {number|null} [y] Gyroscope y
         * @property {number|null} [z] Gyroscope z
         */

        /**
         * Constructs a new Gyroscope.
         * @memberof bundle
         * @classdesc Captures the rate of rotation of the device in radians around the x, y and z axis.
         * @implements IGyroscope
         * @constructor
         * @param {bundle.IGyroscope=} [properties] Properties to set
         */
        function Gyroscope(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Gyroscope determinedAt.
         * @member {number} determinedAt
         * @memberof bundle.Gyroscope
         * @instance
         */
        Gyroscope.prototype.determinedAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Gyroscope x.
         * @member {number} x
         * @memberof bundle.Gyroscope
         * @instance
         */
        Gyroscope.prototype.x = 0;

        /**
         * Gyroscope y.
         * @member {number} y
         * @memberof bundle.Gyroscope
         * @instance
         */
        Gyroscope.prototype.y = 0;

        /**
         * Gyroscope z.
         * @member {number} z
         * @memberof bundle.Gyroscope
         * @instance
         */
        Gyroscope.prototype.z = 0;

        /**
         * Creates a new Gyroscope instance using the specified properties.
         * @function create
         * @memberof bundle.Gyroscope
         * @static
         * @param {bundle.IGyroscope=} [properties] Properties to set
         * @returns {bundle.Gyroscope} Gyroscope instance
         */
        Gyroscope.create = function create(properties) {
            return new Gyroscope(properties);
        };

        /**
         * Encodes the specified Gyroscope message. Does not implicitly {@link bundle.Gyroscope.verify|verify} messages.
         * @function encode
         * @memberof bundle.Gyroscope
         * @static
         * @param {bundle.IGyroscope} message Gyroscope message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Gyroscope.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.determinedAt != null && Object.hasOwnProperty.call(message, "determinedAt"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.determinedAt);
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.y);
            if (message.z != null && Object.hasOwnProperty.call(message, "z"))
                writer.uint32(/* id 4, wireType 1 =*/33).double(message.z);
            return writer;
        };

        /**
         * Decodes a Gyroscope message from the specified reader or buffer.
         * @function decode
         * @memberof bundle.Gyroscope
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bundle.Gyroscope} Gyroscope
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Gyroscope.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bundle.Gyroscope();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.determinedAt = reader.int64();
                    break;
                case 2:
                    message.x = reader.double();
                    break;
                case 3:
                    message.y = reader.double();
                    break;
                case 4:
                    message.z = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return Gyroscope;
    })();

    bundle.Pointer = (function() {

        /**
         * Properties of a Pointer.
         * @memberof bundle
         * @interface IPointer
         * @property {number|null} [determinedAt] Pointer determinedAt
         * @property {bundle.Pointer.Type|null} [type] Pointer type
         * @property {number|null} [buttons] Pointer buttons
         * @property {bundle.IOffset2D|null} [delta] Pointer delta
         * @property {number|null} [device] Pointer device
         * @property {number|null} [distance] Pointer distance
         * @property {bundle.IClosedRange|null} [distanceRange] Pointer distanceRange
         * @property {boolean|null} [obscured] Pointer obscured
         * @property {number|null} [orientation] Pointer orientation
         * @property {bundle.IOffset2D|null} [position] Pointer position
         * @property {number|null} [pressure] Pointer pressure
         * @property {bundle.IClosedRange|null} [pressureRange] Pointer pressureRange
         * @property {number|null} [radiusMajor] Pointer radiusMajor
         * @property {number|null} [radiusMinor] Pointer radiusMinor
         * @property {bundle.IClosedRange|null} [radiusRange] Pointer radiusRange
         * @property {number|null} [size] Pointer size
         * @property {boolean|null} [synthesized] Pointer synthesized
         * @property {number|null} [tilt] Pointer tilt
         * @property {boolean|null} [isSoftwareKeyboard] Pointer isSoftwareKeyboard
         * @property {bundle.Pointer.ViewportBoundaryStatus|null} [viewportBoundaryStatus] Pointer viewportBoundaryStatus
         * @property {bundle.ITargetElement|null} [target] Pointer target
         */

        /**
         * Constructs a new Pointer.
         * @memberof bundle
         * @classdesc Represents a Pointer.
         * @implements IPointer
         * @constructor
         * @param {bundle.IPointer=} [properties] Properties to set
         */
        function Pointer(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Pointer determinedAt.
         * @member {number} determinedAt
         * @memberof bundle.Pointer
         * @instance
         */
        Pointer.prototype.determinedAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Pointer type.
         * @member {bundle.Pointer.Type} type
         * @memberof bundle.Pointer
         * @instance
         */
        Pointer.prototype.type = 0;

        /**
         * Pointer buttons.
         * @member {number} buttons
         * @memberof bundle.Pointer
         * @instance
         */
        Pointer.prototype.buttons = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Pointer delta.
         * @member {bundle.IOffset2D|null|undefined} delta
         * @memberof bundle.Pointer
         * @instance
         */
        Pointer.prototype.delta = null;

        /**
         * Pointer device.
         * @member {number} device
         * @memberof bundle.Pointer
         * @instance
         */
        Pointer.prototype.device = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Pointer distance.
         * @member {number} distance
         * @memberof bundle.Pointer
         * @instance
         */
        Pointer.prototype.distance = 0;

        /**
         * Pointer distanceRange.
         * @member {bundle.IClosedRange|null|undefined} distanceRange
         * @memberof bundle.Pointer
         * @instance
         */
        Pointer.prototype.distanceRange = null;

        /**
         * Pointer obscured.
         * @member {boolean} obscured
         * @memberof bundle.Pointer
         * @instance
         */
        Pointer.prototype.obscured = false;

        /**
         * Pointer orientation.
         * @member {number} orientation
         * @memberof bundle.Pointer
         * @instance
         */
        Pointer.prototype.orientation = 0;

        /**
         * Pointer position.
         * @member {bundle.IOffset2D|null|undefined} position
         * @memberof bundle.Pointer
         * @instance
         */
        Pointer.prototype.position = null;

        /**
         * Pointer pressure.
         * @member {number} pressure
         * @memberof bundle.Pointer
         * @instance
         */
        Pointer.prototype.pressure = 0;

        /**
         * Pointer pressureRange.
         * @member {bundle.IClosedRange|null|undefined} pressureRange
         * @memberof bundle.Pointer
         * @instance
         */
        Pointer.prototype.pressureRange = null;

        /**
         * Pointer radiusMajor.
         * @member {number} radiusMajor
         * @memberof bundle.Pointer
         * @instance
         */
        Pointer.prototype.radiusMajor = 0;

        /**
         * Pointer radiusMinor.
         * @member {number} radiusMinor
         * @memberof bundle.Pointer
         * @instance
         */
        Pointer.prototype.radiusMinor = 0;

        /**
         * Pointer radiusRange.
         * @member {bundle.IClosedRange|null|undefined} radiusRange
         * @memberof bundle.Pointer
         * @instance
         */
        Pointer.prototype.radiusRange = null;

        /**
         * Pointer size.
         * @member {number} size
         * @memberof bundle.Pointer
         * @instance
         */
        Pointer.prototype.size = 0;

        /**
         * Pointer synthesized.
         * @member {boolean} synthesized
         * @memberof bundle.Pointer
         * @instance
         */
        Pointer.prototype.synthesized = false;

        /**
         * Pointer tilt.
         * @member {number} tilt
         * @memberof bundle.Pointer
         * @instance
         */
        Pointer.prototype.tilt = 0;

        /**
         * Pointer isSoftwareKeyboard.
         * @member {boolean} isSoftwareKeyboard
         * @memberof bundle.Pointer
         * @instance
         */
        Pointer.prototype.isSoftwareKeyboard = false;

        /**
         * Pointer viewportBoundaryStatus.
         * @member {bundle.Pointer.ViewportBoundaryStatus} viewportBoundaryStatus
         * @memberof bundle.Pointer
         * @instance
         */
        Pointer.prototype.viewportBoundaryStatus = 0;

        /**
         * Pointer target.
         * @member {bundle.ITargetElement|null|undefined} target
         * @memberof bundle.Pointer
         * @instance
         */
        Pointer.prototype.target = null;

        /**
         * Creates a new Pointer instance using the specified properties.
         * @function create
         * @memberof bundle.Pointer
         * @static
         * @param {bundle.IPointer=} [properties] Properties to set
         * @returns {bundle.Pointer} Pointer instance
         */
        Pointer.create = function create(properties) {
            return new Pointer(properties);
        };

        /**
         * Encodes the specified Pointer message. Does not implicitly {@link bundle.Pointer.verify|verify} messages.
         * @function encode
         * @memberof bundle.Pointer
         * @static
         * @param {bundle.IPointer} message Pointer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Pointer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.determinedAt != null && Object.hasOwnProperty.call(message, "determinedAt"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.determinedAt);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
            if (message.buttons != null && Object.hasOwnProperty.call(message, "buttons"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.buttons);
            if (message.delta != null && Object.hasOwnProperty.call(message, "delta"))
                $root.bundle.Offset2D.encode(message.delta, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.device != null && Object.hasOwnProperty.call(message, "device"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.device);
            if (message.distance != null && Object.hasOwnProperty.call(message, "distance"))
                writer.uint32(/* id 6, wireType 1 =*/49).double(message.distance);
            if (message.distanceRange != null && Object.hasOwnProperty.call(message, "distanceRange"))
                $root.bundle.ClosedRange.encode(message.distanceRange, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.obscured != null && Object.hasOwnProperty.call(message, "obscured"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.obscured);
            if (message.orientation != null && Object.hasOwnProperty.call(message, "orientation"))
                writer.uint32(/* id 9, wireType 1 =*/73).double(message.orientation);
            if (message.position != null && Object.hasOwnProperty.call(message, "position"))
                $root.bundle.Offset2D.encode(message.position, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.pressure != null && Object.hasOwnProperty.call(message, "pressure"))
                writer.uint32(/* id 11, wireType 1 =*/89).double(message.pressure);
            if (message.pressureRange != null && Object.hasOwnProperty.call(message, "pressureRange"))
                $root.bundle.ClosedRange.encode(message.pressureRange, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.radiusMajor != null && Object.hasOwnProperty.call(message, "radiusMajor"))
                writer.uint32(/* id 13, wireType 1 =*/105).double(message.radiusMajor);
            if (message.radiusMinor != null && Object.hasOwnProperty.call(message, "radiusMinor"))
                writer.uint32(/* id 14, wireType 1 =*/113).double(message.radiusMinor);
            if (message.radiusRange != null && Object.hasOwnProperty.call(message, "radiusRange"))
                $root.bundle.ClosedRange.encode(message.radiusRange, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            if (message.size != null && Object.hasOwnProperty.call(message, "size"))
                writer.uint32(/* id 16, wireType 1 =*/129).double(message.size);
            if (message.synthesized != null && Object.hasOwnProperty.call(message, "synthesized"))
                writer.uint32(/* id 17, wireType 0 =*/136).bool(message.synthesized);
            if (message.tilt != null && Object.hasOwnProperty.call(message, "tilt"))
                writer.uint32(/* id 18, wireType 1 =*/145).double(message.tilt);
            if (message.isSoftwareKeyboard != null && Object.hasOwnProperty.call(message, "isSoftwareKeyboard"))
                writer.uint32(/* id 19, wireType 0 =*/152).bool(message.isSoftwareKeyboard);
            if (message.viewportBoundaryStatus != null && Object.hasOwnProperty.call(message, "viewportBoundaryStatus"))
                writer.uint32(/* id 20, wireType 0 =*/160).int32(message.viewportBoundaryStatus);
            if (message.target != null && Object.hasOwnProperty.call(message, "target"))
                $root.bundle.TargetElement.encode(message.target, writer.uint32(/* id 21, wireType 2 =*/170).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a Pointer message from the specified reader or buffer.
         * @function decode
         * @memberof bundle.Pointer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bundle.Pointer} Pointer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Pointer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bundle.Pointer();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.determinedAt = reader.int64();
                    break;
                case 2:
                    message.type = reader.int32();
                    break;
                case 3:
                    message.buttons = reader.int64();
                    break;
                case 4:
                    message.delta = $root.bundle.Offset2D.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.device = reader.int64();
                    break;
                case 6:
                    message.distance = reader.double();
                    break;
                case 7:
                    message.distanceRange = $root.bundle.ClosedRange.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.obscured = reader.bool();
                    break;
                case 9:
                    message.orientation = reader.double();
                    break;
                case 10:
                    message.position = $root.bundle.Offset2D.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.pressure = reader.double();
                    break;
                case 12:
                    message.pressureRange = $root.bundle.ClosedRange.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.radiusMajor = reader.double();
                    break;
                case 14:
                    message.radiusMinor = reader.double();
                    break;
                case 15:
                    message.radiusRange = $root.bundle.ClosedRange.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.size = reader.double();
                    break;
                case 17:
                    message.synthesized = reader.bool();
                    break;
                case 18:
                    message.tilt = reader.double();
                    break;
                case 19:
                    message.isSoftwareKeyboard = reader.bool();
                    break;
                case 20:
                    message.viewportBoundaryStatus = reader.int32();
                    break;
                case 21:
                    message.target = $root.bundle.TargetElement.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Type enum.
         * @name bundle.Pointer.Type
         * @enum {number}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} STYLUS=1 STYLUS value
         * @property {number} INVERTED_STYLUS=2 INVERTED_STYLUS value
         * @property {number} TOUCH=3 TOUCH value
         * @property {number} MOUSE=4 MOUSE value
         */
        Pointer.Type = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "STYLUS"] = 1;
            values[valuesById[2] = "INVERTED_STYLUS"] = 2;
            values[valuesById[3] = "TOUCH"] = 3;
            values[valuesById[4] = "MOUSE"] = 4;
            return values;
        })();

        /**
         * ViewportBoundaryStatus enum.
         * @name bundle.Pointer.ViewportBoundaryStatus
         * @enum {number}
         * @property {number} UNKNOWN_VIEWPORT_BOUNDARY_STATUS=0 UNKNOWN_VIEWPORT_BOUNDARY_STATUS value
         * @property {number} ENTER_VIEWPORT=1 ENTER_VIEWPORT value
         * @property {number} IN_VIEWPORT=2 IN_VIEWPORT value
         * @property {number} LEAVE_VIEWPORT=3 LEAVE_VIEWPORT value
         */
        Pointer.ViewportBoundaryStatus = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN_VIEWPORT_BOUNDARY_STATUS"] = 0;
            values[valuesById[1] = "ENTER_VIEWPORT"] = 1;
            values[valuesById[2] = "IN_VIEWPORT"] = 2;
            values[valuesById[3] = "LEAVE_VIEWPORT"] = 3;
            return values;
        })();

        return Pointer;
    })();

    bundle.Click = (function() {

        /**
         * Properties of a Click.
         * @memberof bundle
         * @interface IClick
         * @property {number|null} [determinedAt] Click determinedAt
         * @property {bundle.IOffset2D|null} [position] Click position
         * @property {bundle.ITargetElement|null} [target] Click target
         */

        /**
         * Constructs a new Click.
         * @memberof bundle
         * @classdesc Represents a Click.
         * @implements IClick
         * @constructor
         * @param {bundle.IClick=} [properties] Properties to set
         */
        function Click(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Click determinedAt.
         * @member {number} determinedAt
         * @memberof bundle.Click
         * @instance
         */
        Click.prototype.determinedAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Click position.
         * @member {bundle.IOffset2D|null|undefined} position
         * @memberof bundle.Click
         * @instance
         */
        Click.prototype.position = null;

        /**
         * Click target.
         * @member {bundle.ITargetElement|null|undefined} target
         * @memberof bundle.Click
         * @instance
         */
        Click.prototype.target = null;

        /**
         * Creates a new Click instance using the specified properties.
         * @function create
         * @memberof bundle.Click
         * @static
         * @param {bundle.IClick=} [properties] Properties to set
         * @returns {bundle.Click} Click instance
         */
        Click.create = function create(properties) {
            return new Click(properties);
        };

        /**
         * Encodes the specified Click message. Does not implicitly {@link bundle.Click.verify|verify} messages.
         * @function encode
         * @memberof bundle.Click
         * @static
         * @param {bundle.IClick} message Click message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Click.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.determinedAt != null && Object.hasOwnProperty.call(message, "determinedAt"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.determinedAt);
            if (message.position != null && Object.hasOwnProperty.call(message, "position"))
                $root.bundle.Offset2D.encode(message.position, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.target != null && Object.hasOwnProperty.call(message, "target"))
                $root.bundle.TargetElement.encode(message.target, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a Click message from the specified reader or buffer.
         * @function decode
         * @memberof bundle.Click
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bundle.Click} Click
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Click.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bundle.Click();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.determinedAt = reader.int64();
                    break;
                case 2:
                    message.position = $root.bundle.Offset2D.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.target = $root.bundle.TargetElement.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return Click;
    })();

    bundle.TargetElement = (function() {

        /**
         * Properties of a TargetElement.
         * @memberof bundle
         * @interface ITargetElement
         * @property {string|null} [targetId] TargetElement targetId
         * @property {string|null} [targetType] TargetElement targetType
         */

        /**
         * Constructs a new TargetElement.
         * @memberof bundle
         * @classdesc Represents a TargetElement.
         * @implements ITargetElement
         * @constructor
         * @param {bundle.ITargetElement=} [properties] Properties to set
         */
        function TargetElement(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TargetElement targetId.
         * @member {string} targetId
         * @memberof bundle.TargetElement
         * @instance
         */
        TargetElement.prototype.targetId = "";

        /**
         * TargetElement targetType.
         * @member {string} targetType
         * @memberof bundle.TargetElement
         * @instance
         */
        TargetElement.prototype.targetType = "";

        /**
         * Creates a new TargetElement instance using the specified properties.
         * @function create
         * @memberof bundle.TargetElement
         * @static
         * @param {bundle.ITargetElement=} [properties] Properties to set
         * @returns {bundle.TargetElement} TargetElement instance
         */
        TargetElement.create = function create(properties) {
            return new TargetElement(properties);
        };

        /**
         * Encodes the specified TargetElement message. Does not implicitly {@link bundle.TargetElement.verify|verify} messages.
         * @function encode
         * @memberof bundle.TargetElement
         * @static
         * @param {bundle.ITargetElement} message TargetElement message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TargetElement.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.targetId != null && Object.hasOwnProperty.call(message, "targetId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.targetId);
            if (message.targetType != null && Object.hasOwnProperty.call(message, "targetType"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.targetType);
            return writer;
        };

        /**
         * Decodes a TargetElement message from the specified reader or buffer.
         * @function decode
         * @memberof bundle.TargetElement
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bundle.TargetElement} TargetElement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TargetElement.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bundle.TargetElement();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.targetId = reader.string();
                    break;
                case 2:
                    message.targetType = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return TargetElement;
    })();

    bundle.TextChange = (function() {

        /**
         * Properties of a TextChange.
         * @memberof bundle
         * @interface ITextChange
         * @property {number|null} [determinedAt] TextChange determinedAt
         * @property {bundle.ITargetElement|null} [target] TextChange target
         * @property {boolean|null} [focus] TextChange focus
         * @property {string|null} [maskedText] TextChange maskedText
         * @property {boolean|null} [truncatedText] TextChange truncatedText
         * @property {bundle.TextChange.Action|null} [action] TextChange action
         */

        /**
         * Constructs a new TextChange.
         * @memberof bundle
         * @classdesc Represents a TextChange.
         * @implements ITextChange
         * @constructor
         * @param {bundle.ITextChange=} [properties] Properties to set
         */
        function TextChange(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TextChange determinedAt.
         * @member {number} determinedAt
         * @memberof bundle.TextChange
         * @instance
         */
        TextChange.prototype.determinedAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * TextChange target.
         * @member {bundle.ITargetElement|null|undefined} target
         * @memberof bundle.TextChange
         * @instance
         */
        TextChange.prototype.target = null;

        /**
         * TextChange focus.
         * @member {boolean} focus
         * @memberof bundle.TextChange
         * @instance
         */
        TextChange.prototype.focus = false;

        /**
         * TextChange maskedText.
         * @member {string} maskedText
         * @memberof bundle.TextChange
         * @instance
         */
        TextChange.prototype.maskedText = "";

        /**
         * TextChange truncatedText.
         * @member {boolean} truncatedText
         * @memberof bundle.TextChange
         * @instance
         */
        TextChange.prototype.truncatedText = false;

        /**
         * TextChange action.
         * @member {bundle.TextChange.Action} action
         * @memberof bundle.TextChange
         * @instance
         */
        TextChange.prototype.action = 0;

        /**
         * Creates a new TextChange instance using the specified properties.
         * @function create
         * @memberof bundle.TextChange
         * @static
         * @param {bundle.ITextChange=} [properties] Properties to set
         * @returns {bundle.TextChange} TextChange instance
         */
        TextChange.create = function create(properties) {
            return new TextChange(properties);
        };

        /**
         * Encodes the specified TextChange message. Does not implicitly {@link bundle.TextChange.verify|verify} messages.
         * @function encode
         * @memberof bundle.TextChange
         * @static
         * @param {bundle.ITextChange} message TextChange message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TextChange.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.determinedAt != null && Object.hasOwnProperty.call(message, "determinedAt"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.determinedAt);
            if (message.target != null && Object.hasOwnProperty.call(message, "target"))
                $root.bundle.TargetElement.encode(message.target, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.focus != null && Object.hasOwnProperty.call(message, "focus"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.focus);
            if (message.maskedText != null && Object.hasOwnProperty.call(message, "maskedText"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.maskedText);
            if (message.truncatedText != null && Object.hasOwnProperty.call(message, "truncatedText"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.truncatedText);
            if (message.action != null && Object.hasOwnProperty.call(message, "action"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.action);
            return writer;
        };

        /**
         * Decodes a TextChange message from the specified reader or buffer.
         * @function decode
         * @memberof bundle.TextChange
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bundle.TextChange} TextChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TextChange.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bundle.TextChange();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.determinedAt = reader.int64();
                    break;
                case 2:
                    message.target = $root.bundle.TargetElement.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.focus = reader.bool();
                    break;
                case 4:
                    message.maskedText = reader.string();
                    break;
                case 5:
                    message.truncatedText = reader.bool();
                    break;
                case 6:
                    message.action = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Action enum.
         * @name bundle.TextChange.Action
         * @enum {number}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} CUT=1 CUT value
         * @property {number} PASTE=2 PASTE value
         */
        TextChange.Action = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "CUT"] = 1;
            values[valuesById[2] = "PASTE"] = 2;
            return values;
        })();

        return TextChange;
    })();

    bundle.InputChange = (function() {

        /**
         * Properties of an InputChange.
         * @memberof bundle
         * @interface IInputChange
         * @property {number|null} [determinedAt] InputChange determinedAt
         * @property {bundle.ITargetElement|null} [target] InputChange target
         * @property {boolean|null} [focus] InputChange focus
         * @property {string|null} [maskedText] InputChange maskedText
         * @property {boolean|null} [truncatedText] InputChange truncatedText
         * @property {bundle.InputChange.Action|null} [action] InputChange action
         */

        /**
         * Constructs a new InputChange.
         * @memberof bundle
         * @classdesc Represents an InputChange.
         * @implements IInputChange
         * @constructor
         * @param {bundle.IInputChange=} [properties] Properties to set
         */
        function InputChange(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * InputChange determinedAt.
         * @member {number} determinedAt
         * @memberof bundle.InputChange
         * @instance
         */
        InputChange.prototype.determinedAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * InputChange target.
         * @member {bundle.ITargetElement|null|undefined} target
         * @memberof bundle.InputChange
         * @instance
         */
        InputChange.prototype.target = null;

        /**
         * InputChange focus.
         * @member {boolean} focus
         * @memberof bundle.InputChange
         * @instance
         */
        InputChange.prototype.focus = false;

        /**
         * InputChange maskedText.
         * @member {string} maskedText
         * @memberof bundle.InputChange
         * @instance
         */
        InputChange.prototype.maskedText = "";

        /**
         * InputChange truncatedText.
         * @member {boolean} truncatedText
         * @memberof bundle.InputChange
         * @instance
         */
        InputChange.prototype.truncatedText = false;

        /**
         * InputChange action.
         * @member {bundle.InputChange.Action} action
         * @memberof bundle.InputChange
         * @instance
         */
        InputChange.prototype.action = 0;

        /**
         * Creates a new InputChange instance using the specified properties.
         * @function create
         * @memberof bundle.InputChange
         * @static
         * @param {bundle.IInputChange=} [properties] Properties to set
         * @returns {bundle.InputChange} InputChange instance
         */
        InputChange.create = function create(properties) {
            return new InputChange(properties);
        };

        /**
         * Encodes the specified InputChange message. Does not implicitly {@link bundle.InputChange.verify|verify} messages.
         * @function encode
         * @memberof bundle.InputChange
         * @static
         * @param {bundle.IInputChange} message InputChange message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InputChange.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.determinedAt != null && Object.hasOwnProperty.call(message, "determinedAt"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.determinedAt);
            if (message.target != null && Object.hasOwnProperty.call(message, "target"))
                $root.bundle.TargetElement.encode(message.target, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.focus != null && Object.hasOwnProperty.call(message, "focus"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.focus);
            if (message.maskedText != null && Object.hasOwnProperty.call(message, "maskedText"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.maskedText);
            if (message.truncatedText != null && Object.hasOwnProperty.call(message, "truncatedText"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.truncatedText);
            if (message.action != null && Object.hasOwnProperty.call(message, "action"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.action);
            return writer;
        };

        /**
         * Decodes an InputChange message from the specified reader or buffer.
         * @function decode
         * @memberof bundle.InputChange
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bundle.InputChange} InputChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InputChange.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bundle.InputChange();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.determinedAt = reader.int64();
                    break;
                case 2:
                    message.target = $root.bundle.TargetElement.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.focus = reader.bool();
                    break;
                case 4:
                    message.maskedText = reader.string();
                    break;
                case 5:
                    message.truncatedText = reader.bool();
                    break;
                case 6:
                    message.action = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Action enum.
         * @name bundle.InputChange.Action
         * @enum {number}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} CUT=1 CUT value
         * @property {number} PASTE=2 PASTE value
         * @property {number} AUTOFILL=3 AUTOFILL value
         * @property {number} REPLACEMENT=4 REPLACEMENT value
         */
        InputChange.Action = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "CUT"] = 1;
            values[valuesById[2] = "PASTE"] = 2;
            values[valuesById[3] = "AUTOFILL"] = 3;
            values[valuesById[4] = "REPLACEMENT"] = 4;
            return values;
        })();

        return InputChange;
    })();

    bundle.KeyPress = (function() {

        /**
         * Properties of a KeyPress.
         * @memberof bundle
         * @interface IKeyPress
         * @property {number|null} [determinedAt] KeyPress determinedAt
         * @property {bundle.KeyPress.Type|null} [type] KeyPress type
         * @property {string|null} [specialKey] KeyPress specialKey
         * @property {number|null} [maskedKey] KeyPress maskedKey
         * @property {bundle.ITargetElement|null} [target] KeyPress target
         * @property {boolean|null} [altKey] KeyPress altKey
         * @property {boolean|null} [controlKey] KeyPress controlKey
         * @property {boolean|null} [metaKey] KeyPress metaKey
         * @property {boolean|null} [shiftKey] KeyPress shiftKey
         */

        /**
         * Constructs a new KeyPress.
         * @memberof bundle
         * @classdesc Represents a KeyPress.
         * @implements IKeyPress
         * @constructor
         * @param {bundle.IKeyPress=} [properties] Properties to set
         */
        function KeyPress(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * KeyPress determinedAt.
         * @member {number} determinedAt
         * @memberof bundle.KeyPress
         * @instance
         */
        KeyPress.prototype.determinedAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * KeyPress type.
         * @member {bundle.KeyPress.Type} type
         * @memberof bundle.KeyPress
         * @instance
         */
        KeyPress.prototype.type = 0;

        /**
         * KeyPress specialKey.
         * @member {string} specialKey
         * @memberof bundle.KeyPress
         * @instance
         */
        KeyPress.prototype.specialKey = "";

        /**
         * KeyPress maskedKey.
         * @member {number} maskedKey
         * @memberof bundle.KeyPress
         * @instance
         */
        KeyPress.prototype.maskedKey = 0;

        /**
         * KeyPress target.
         * @member {bundle.ITargetElement|null|undefined} target
         * @memberof bundle.KeyPress
         * @instance
         */
        KeyPress.prototype.target = null;

        /**
         * KeyPress altKey.
         * @member {boolean} altKey
         * @memberof bundle.KeyPress
         * @instance
         */
        KeyPress.prototype.altKey = false;

        /**
         * KeyPress controlKey.
         * @member {boolean} controlKey
         * @memberof bundle.KeyPress
         * @instance
         */
        KeyPress.prototype.controlKey = false;

        /**
         * KeyPress metaKey.
         * @member {boolean} metaKey
         * @memberof bundle.KeyPress
         * @instance
         */
        KeyPress.prototype.metaKey = false;

        /**
         * KeyPress shiftKey.
         * @member {boolean} shiftKey
         * @memberof bundle.KeyPress
         * @instance
         */
        KeyPress.prototype.shiftKey = false;

        /**
         * Creates a new KeyPress instance using the specified properties.
         * @function create
         * @memberof bundle.KeyPress
         * @static
         * @param {bundle.IKeyPress=} [properties] Properties to set
         * @returns {bundle.KeyPress} KeyPress instance
         */
        KeyPress.create = function create(properties) {
            return new KeyPress(properties);
        };

        /**
         * Encodes the specified KeyPress message. Does not implicitly {@link bundle.KeyPress.verify|verify} messages.
         * @function encode
         * @memberof bundle.KeyPress
         * @static
         * @param {bundle.IKeyPress} message KeyPress message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KeyPress.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.determinedAt != null && Object.hasOwnProperty.call(message, "determinedAt"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.determinedAt);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
            if (message.specialKey != null && Object.hasOwnProperty.call(message, "specialKey"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.specialKey);
            if (message.maskedKey != null && Object.hasOwnProperty.call(message, "maskedKey"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.maskedKey);
            if (message.target != null && Object.hasOwnProperty.call(message, "target"))
                $root.bundle.TargetElement.encode(message.target, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.altKey != null && Object.hasOwnProperty.call(message, "altKey"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.altKey);
            if (message.controlKey != null && Object.hasOwnProperty.call(message, "controlKey"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.controlKey);
            if (message.metaKey != null && Object.hasOwnProperty.call(message, "metaKey"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.metaKey);
            if (message.shiftKey != null && Object.hasOwnProperty.call(message, "shiftKey"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.shiftKey);
            return writer;
        };

        /**
         * Decodes a KeyPress message from the specified reader or buffer.
         * @function decode
         * @memberof bundle.KeyPress
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bundle.KeyPress} KeyPress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KeyPress.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bundle.KeyPress();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.determinedAt = reader.int64();
                    break;
                case 2:
                    message.type = reader.int32();
                    break;
                case 3:
                    message.specialKey = reader.string();
                    break;
                case 4:
                    message.maskedKey = reader.int32();
                    break;
                case 5:
                    message.target = $root.bundle.TargetElement.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.altKey = reader.bool();
                    break;
                case 7:
                    message.controlKey = reader.bool();
                    break;
                case 8:
                    message.metaKey = reader.bool();
                    break;
                case 9:
                    message.shiftKey = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Type enum.
         * @name bundle.KeyPress.Type
         * @enum {number}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} KEY_UP=1 KEY_UP value
         * @property {number} KEY_DOWN=2 KEY_DOWN value
         */
        KeyPress.Type = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "KEY_UP"] = 1;
            values[valuesById[2] = "KEY_DOWN"] = 2;
            return values;
        })();

        return KeyPress;
    })();

    bundle.FocusChange = (function() {

        /**
         * Properties of a FocusChange.
         * @memberof bundle
         * @interface IFocusChange
         * @property {number|null} [determinedAt] FocusChange determinedAt
         * @property {bundle.FocusChange.Type|null} [type] FocusChange type
         * @property {bundle.ITargetElement|null} [target] FocusChange target
         */

        /**
         * Constructs a new FocusChange.
         * @memberof bundle
         * @classdesc Represents a FocusChange.
         * @implements IFocusChange
         * @constructor
         * @param {bundle.IFocusChange=} [properties] Properties to set
         */
        function FocusChange(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FocusChange determinedAt.
         * @member {number} determinedAt
         * @memberof bundle.FocusChange
         * @instance
         */
        FocusChange.prototype.determinedAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * FocusChange type.
         * @member {bundle.FocusChange.Type} type
         * @memberof bundle.FocusChange
         * @instance
         */
        FocusChange.prototype.type = 0;

        /**
         * FocusChange target.
         * @member {bundle.ITargetElement|null|undefined} target
         * @memberof bundle.FocusChange
         * @instance
         */
        FocusChange.prototype.target = null;

        /**
         * Creates a new FocusChange instance using the specified properties.
         * @function create
         * @memberof bundle.FocusChange
         * @static
         * @param {bundle.IFocusChange=} [properties] Properties to set
         * @returns {bundle.FocusChange} FocusChange instance
         */
        FocusChange.create = function create(properties) {
            return new FocusChange(properties);
        };

        /**
         * Encodes the specified FocusChange message. Does not implicitly {@link bundle.FocusChange.verify|verify} messages.
         * @function encode
         * @memberof bundle.FocusChange
         * @static
         * @param {bundle.IFocusChange} message FocusChange message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FocusChange.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.determinedAt != null && Object.hasOwnProperty.call(message, "determinedAt"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.determinedAt);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
            if (message.target != null && Object.hasOwnProperty.call(message, "target"))
                $root.bundle.TargetElement.encode(message.target, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a FocusChange message from the specified reader or buffer.
         * @function decode
         * @memberof bundle.FocusChange
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bundle.FocusChange} FocusChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FocusChange.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bundle.FocusChange();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.determinedAt = reader.int64();
                    break;
                case 2:
                    message.type = reader.int32();
                    break;
                case 3:
                    message.target = $root.bundle.TargetElement.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Type enum.
         * @name bundle.FocusChange.Type
         * @enum {number}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} FOCUS_GAINED=1 FOCUS_GAINED value
         * @property {number} FOCUS_LOST=2 FOCUS_LOST value
         */
        FocusChange.Type = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "FOCUS_GAINED"] = 1;
            values[valuesById[2] = "FOCUS_LOST"] = 2;
            return values;
        })();

        return FocusChange;
    })();

    bundle.ViewportScroll = (function() {

        /**
         * Properties of a ViewportScroll.
         * @memberof bundle
         * @interface IViewportScroll
         * @property {number|null} [determinedAt] ViewportScroll determinedAt
         * @property {number|null} [xPosition] ViewportScroll xPosition
         * @property {number|null} [yPosition] ViewportScroll yPosition
         */

        /**
         * Constructs a new ViewportScroll.
         * @memberof bundle
         * @classdesc Represents a ViewportScroll.
         * @implements IViewportScroll
         * @constructor
         * @param {bundle.IViewportScroll=} [properties] Properties to set
         */
        function ViewportScroll(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ViewportScroll determinedAt.
         * @member {number} determinedAt
         * @memberof bundle.ViewportScroll
         * @instance
         */
        ViewportScroll.prototype.determinedAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ViewportScroll xPosition.
         * @member {number} xPosition
         * @memberof bundle.ViewportScroll
         * @instance
         */
        ViewportScroll.prototype.xPosition = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ViewportScroll yPosition.
         * @member {number} yPosition
         * @memberof bundle.ViewportScroll
         * @instance
         */
        ViewportScroll.prototype.yPosition = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new ViewportScroll instance using the specified properties.
         * @function create
         * @memberof bundle.ViewportScroll
         * @static
         * @param {bundle.IViewportScroll=} [properties] Properties to set
         * @returns {bundle.ViewportScroll} ViewportScroll instance
         */
        ViewportScroll.create = function create(properties) {
            return new ViewportScroll(properties);
        };

        /**
         * Encodes the specified ViewportScroll message. Does not implicitly {@link bundle.ViewportScroll.verify|verify} messages.
         * @function encode
         * @memberof bundle.ViewportScroll
         * @static
         * @param {bundle.IViewportScroll} message ViewportScroll message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ViewportScroll.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.determinedAt != null && Object.hasOwnProperty.call(message, "determinedAt"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.determinedAt);
            if (message.xPosition != null && Object.hasOwnProperty.call(message, "xPosition"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.xPosition);
            if (message.yPosition != null && Object.hasOwnProperty.call(message, "yPosition"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.yPosition);
            return writer;
        };

        /**
         * Decodes a ViewportScroll message from the specified reader or buffer.
         * @function decode
         * @memberof bundle.ViewportScroll
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bundle.ViewportScroll} ViewportScroll
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ViewportScroll.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bundle.ViewportScroll();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.determinedAt = reader.int64();
                    break;
                case 2:
                    message.xPosition = reader.int64();
                    break;
                case 3:
                    message.yPosition = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ViewportScroll;
    })();

    bundle.MouseWheel = (function() {

        /**
         * Properties of a MouseWheel.
         * @memberof bundle
         * @interface IMouseWheel
         * @property {number|null} [determinedAt] MouseWheel determinedAt
         * @property {number|null} [wheelDeltaX] MouseWheel wheelDeltaX
         * @property {number|null} [wheelDeltaY] MouseWheel wheelDeltaY
         * @property {bundle.MouseWheel.WheelMode|null} [wheelMode] MouseWheel wheelMode
         * @property {number|null} [wheelDeltaXLine] MouseWheel wheelDeltaXLine
         * @property {number|null} [wheelDeltaYLine] MouseWheel wheelDeltaYLine
         * @property {number|null} [wheelDeltaXPage] MouseWheel wheelDeltaXPage
         * @property {number|null} [wheelDeltaYPage] MouseWheel wheelDeltaYPage
         */

        /**
         * Constructs a new MouseWheel.
         * @memberof bundle
         * @classdesc Represents a MouseWheel.
         * @implements IMouseWheel
         * @constructor
         * @param {bundle.IMouseWheel=} [properties] Properties to set
         */
        function MouseWheel(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MouseWheel determinedAt.
         * @member {number} determinedAt
         * @memberof bundle.MouseWheel
         * @instance
         */
        MouseWheel.prototype.determinedAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MouseWheel wheelDeltaX.
         * @member {number} wheelDeltaX
         * @memberof bundle.MouseWheel
         * @instance
         */
        MouseWheel.prototype.wheelDeltaX = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MouseWheel wheelDeltaY.
         * @member {number} wheelDeltaY
         * @memberof bundle.MouseWheel
         * @instance
         */
        MouseWheel.prototype.wheelDeltaY = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MouseWheel wheelMode.
         * @member {bundle.MouseWheel.WheelMode} wheelMode
         * @memberof bundle.MouseWheel
         * @instance
         */
        MouseWheel.prototype.wheelMode = 0;

        /**
         * MouseWheel wheelDeltaXLine.
         * @member {number} wheelDeltaXLine
         * @memberof bundle.MouseWheel
         * @instance
         */
        MouseWheel.prototype.wheelDeltaXLine = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MouseWheel wheelDeltaYLine.
         * @member {number} wheelDeltaYLine
         * @memberof bundle.MouseWheel
         * @instance
         */
        MouseWheel.prototype.wheelDeltaYLine = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MouseWheel wheelDeltaXPage.
         * @member {number} wheelDeltaXPage
         * @memberof bundle.MouseWheel
         * @instance
         */
        MouseWheel.prototype.wheelDeltaXPage = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MouseWheel wheelDeltaYPage.
         * @member {number} wheelDeltaYPage
         * @memberof bundle.MouseWheel
         * @instance
         */
        MouseWheel.prototype.wheelDeltaYPage = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new MouseWheel instance using the specified properties.
         * @function create
         * @memberof bundle.MouseWheel
         * @static
         * @param {bundle.IMouseWheel=} [properties] Properties to set
         * @returns {bundle.MouseWheel} MouseWheel instance
         */
        MouseWheel.create = function create(properties) {
            return new MouseWheel(properties);
        };

        /**
         * Encodes the specified MouseWheel message. Does not implicitly {@link bundle.MouseWheel.verify|verify} messages.
         * @function encode
         * @memberof bundle.MouseWheel
         * @static
         * @param {bundle.IMouseWheel} message MouseWheel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MouseWheel.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.determinedAt != null && Object.hasOwnProperty.call(message, "determinedAt"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.determinedAt);
            if (message.wheelDeltaX != null && Object.hasOwnProperty.call(message, "wheelDeltaX"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.wheelDeltaX);
            if (message.wheelDeltaY != null && Object.hasOwnProperty.call(message, "wheelDeltaY"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.wheelDeltaY);
            if (message.wheelMode != null && Object.hasOwnProperty.call(message, "wheelMode"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.wheelMode);
            if (message.wheelDeltaXLine != null && Object.hasOwnProperty.call(message, "wheelDeltaXLine"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.wheelDeltaXLine);
            if (message.wheelDeltaYLine != null && Object.hasOwnProperty.call(message, "wheelDeltaYLine"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.wheelDeltaYLine);
            if (message.wheelDeltaXPage != null && Object.hasOwnProperty.call(message, "wheelDeltaXPage"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.wheelDeltaXPage);
            if (message.wheelDeltaYPage != null && Object.hasOwnProperty.call(message, "wheelDeltaYPage"))
                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.wheelDeltaYPage);
            return writer;
        };

        /**
         * Decodes a MouseWheel message from the specified reader or buffer.
         * @function decode
         * @memberof bundle.MouseWheel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bundle.MouseWheel} MouseWheel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MouseWheel.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bundle.MouseWheel();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.determinedAt = reader.int64();
                    break;
                case 2:
                    message.wheelDeltaX = reader.int64();
                    break;
                case 3:
                    message.wheelDeltaY = reader.int64();
                    break;
                case 4:
                    message.wheelMode = reader.int32();
                    break;
                case 5:
                    message.wheelDeltaXLine = reader.int64();
                    break;
                case 6:
                    message.wheelDeltaYLine = reader.int64();
                    break;
                case 7:
                    message.wheelDeltaXPage = reader.int64();
                    break;
                case 8:
                    message.wheelDeltaYPage = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * WheelMode enum.
         * @name bundle.MouseWheel.WheelMode
         * @enum {number}
         * @property {number} UNKNOWN_WHEEL_MODE=0 UNKNOWN_WHEEL_MODE value
         * @property {number} PIXEL=1 PIXEL value
         * @property {number} LINE=2 LINE value
         * @property {number} PAGE=3 PAGE value
         */
        MouseWheel.WheelMode = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN_WHEEL_MODE"] = 0;
            values[valuesById[1] = "PIXEL"] = 1;
            values[valuesById[2] = "LINE"] = 2;
            values[valuesById[3] = "PAGE"] = 3;
            return values;
        })();

        return MouseWheel;
    })();

    bundle.PermissionEvent = (function() {

        /**
         * Properties of a PermissionEvent.
         * @memberof bundle
         * @interface IPermissionEvent
         * @property {number|null} [determinedAt] PermissionEvent determinedAt
         * @property {common.SensorType|null} [sensorType] PermissionEvent sensorType
         * @property {bundle.PermissionEvent.PermissionStatus|null} [permissionStatus] PermissionEvent permissionStatus
         */

        /**
         * Constructs a new PermissionEvent.
         * @memberof bundle
         * @classdesc Represents a PermissionEvent.
         * @implements IPermissionEvent
         * @constructor
         * @param {bundle.IPermissionEvent=} [properties] Properties to set
         */
        function PermissionEvent(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PermissionEvent determinedAt.
         * @member {number} determinedAt
         * @memberof bundle.PermissionEvent
         * @instance
         */
        PermissionEvent.prototype.determinedAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PermissionEvent sensorType.
         * @member {common.SensorType} sensorType
         * @memberof bundle.PermissionEvent
         * @instance
         */
        PermissionEvent.prototype.sensorType = 0;

        /**
         * PermissionEvent permissionStatus.
         * @member {bundle.PermissionEvent.PermissionStatus} permissionStatus
         * @memberof bundle.PermissionEvent
         * @instance
         */
        PermissionEvent.prototype.permissionStatus = 0;

        /**
         * Creates a new PermissionEvent instance using the specified properties.
         * @function create
         * @memberof bundle.PermissionEvent
         * @static
         * @param {bundle.IPermissionEvent=} [properties] Properties to set
         * @returns {bundle.PermissionEvent} PermissionEvent instance
         */
        PermissionEvent.create = function create(properties) {
            return new PermissionEvent(properties);
        };

        /**
         * Encodes the specified PermissionEvent message. Does not implicitly {@link bundle.PermissionEvent.verify|verify} messages.
         * @function encode
         * @memberof bundle.PermissionEvent
         * @static
         * @param {bundle.IPermissionEvent} message PermissionEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PermissionEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.determinedAt != null && Object.hasOwnProperty.call(message, "determinedAt"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.determinedAt);
            if (message.sensorType != null && Object.hasOwnProperty.call(message, "sensorType"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.sensorType);
            if (message.permissionStatus != null && Object.hasOwnProperty.call(message, "permissionStatus"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.permissionStatus);
            return writer;
        };

        /**
         * Decodes a PermissionEvent message from the specified reader or buffer.
         * @function decode
         * @memberof bundle.PermissionEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bundle.PermissionEvent} PermissionEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PermissionEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bundle.PermissionEvent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.determinedAt = reader.int64();
                    break;
                case 2:
                    message.sensorType = reader.int32();
                    break;
                case 3:
                    message.permissionStatus = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * PermissionStatus enum.
         * @name bundle.PermissionEvent.PermissionStatus
         * @enum {number}
         * @property {number} UNKNOWN_PERMISSION_STATUS=0 UNKNOWN_PERMISSION_STATUS value
         * @property {number} ALLOWED=1 ALLOWED value
         * @property {number} DENIED=2 DENIED value
         * @property {number} UNDETERMINED_BY_USER=3 UNDETERMINED_BY_USER value
         * @property {number} REQUIRES_PROMPT_TO_DETERMINE=4 REQUIRES_PROMPT_TO_DETERMINE value
         * @property {number} SENSOR_NOT_AVAILABLE=5 SENSOR_NOT_AVAILABLE value
         */
        PermissionEvent.PermissionStatus = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN_PERMISSION_STATUS"] = 0;
            values[valuesById[1] = "ALLOWED"] = 1;
            values[valuesById[2] = "DENIED"] = 2;
            values[valuesById[3] = "UNDETERMINED_BY_USER"] = 3;
            values[valuesById[4] = "REQUIRES_PROMPT_TO_DETERMINE"] = 4;
            values[valuesById[5] = "SENSOR_NOT_AVAILABLE"] = 5;
            return values;
        })();

        return PermissionEvent;
    })();

    bundle.ViewportSizeEvent = (function() {

        /**
         * Properties of a ViewportSizeEvent.
         * @memberof bundle
         * @interface IViewportSizeEvent
         * @property {number|null} [determinedAt] ViewportSizeEvent determinedAt
         * @property {number|null} [devicePhysicalWidth] ViewportSizeEvent devicePhysicalWidth
         * @property {number|null} [devicePhysicalHeight] ViewportSizeEvent devicePhysicalHeight
         * @property {number|null} [deviceLogicalWidth] ViewportSizeEvent deviceLogicalWidth
         * @property {number|null} [deviceLogicalHeight] ViewportSizeEvent deviceLogicalHeight
         * @property {number|null} [devicePixelRatio] ViewportSizeEvent devicePixelRatio
         * @property {bundle.ViewportSizeEvent.ViewportOrientationDirection|null} [viewportOrientation] ViewportSizeEvent viewportOrientation
         */

        /**
         * Constructs a new ViewportSizeEvent.
         * @memberof bundle
         * @classdesc Represents a ViewportSizeEvent.
         * @implements IViewportSizeEvent
         * @constructor
         * @param {bundle.IViewportSizeEvent=} [properties] Properties to set
         */
        function ViewportSizeEvent(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ViewportSizeEvent determinedAt.
         * @member {number} determinedAt
         * @memberof bundle.ViewportSizeEvent
         * @instance
         */
        ViewportSizeEvent.prototype.determinedAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ViewportSizeEvent devicePhysicalWidth.
         * @member {number} devicePhysicalWidth
         * @memberof bundle.ViewportSizeEvent
         * @instance
         */
        ViewportSizeEvent.prototype.devicePhysicalWidth = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ViewportSizeEvent devicePhysicalHeight.
         * @member {number} devicePhysicalHeight
         * @memberof bundle.ViewportSizeEvent
         * @instance
         */
        ViewportSizeEvent.prototype.devicePhysicalHeight = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ViewportSizeEvent deviceLogicalWidth.
         * @member {number} deviceLogicalWidth
         * @memberof bundle.ViewportSizeEvent
         * @instance
         */
        ViewportSizeEvent.prototype.deviceLogicalWidth = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ViewportSizeEvent deviceLogicalHeight.
         * @member {number} deviceLogicalHeight
         * @memberof bundle.ViewportSizeEvent
         * @instance
         */
        ViewportSizeEvent.prototype.deviceLogicalHeight = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ViewportSizeEvent devicePixelRatio.
         * @member {number} devicePixelRatio
         * @memberof bundle.ViewportSizeEvent
         * @instance
         */
        ViewportSizeEvent.prototype.devicePixelRatio = 0;

        /**
         * ViewportSizeEvent viewportOrientation.
         * @member {bundle.ViewportSizeEvent.ViewportOrientationDirection} viewportOrientation
         * @memberof bundle.ViewportSizeEvent
         * @instance
         */
        ViewportSizeEvent.prototype.viewportOrientation = 0;

        /**
         * Creates a new ViewportSizeEvent instance using the specified properties.
         * @function create
         * @memberof bundle.ViewportSizeEvent
         * @static
         * @param {bundle.IViewportSizeEvent=} [properties] Properties to set
         * @returns {bundle.ViewportSizeEvent} ViewportSizeEvent instance
         */
        ViewportSizeEvent.create = function create(properties) {
            return new ViewportSizeEvent(properties);
        };

        /**
         * Encodes the specified ViewportSizeEvent message. Does not implicitly {@link bundle.ViewportSizeEvent.verify|verify} messages.
         * @function encode
         * @memberof bundle.ViewportSizeEvent
         * @static
         * @param {bundle.IViewportSizeEvent} message ViewportSizeEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ViewportSizeEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.determinedAt != null && Object.hasOwnProperty.call(message, "determinedAt"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.determinedAt);
            if (message.devicePhysicalWidth != null && Object.hasOwnProperty.call(message, "devicePhysicalWidth"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.devicePhysicalWidth);
            if (message.devicePhysicalHeight != null && Object.hasOwnProperty.call(message, "devicePhysicalHeight"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.devicePhysicalHeight);
            if (message.deviceLogicalWidth != null && Object.hasOwnProperty.call(message, "deviceLogicalWidth"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.deviceLogicalWidth);
            if (message.deviceLogicalHeight != null && Object.hasOwnProperty.call(message, "deviceLogicalHeight"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.deviceLogicalHeight);
            if (message.devicePixelRatio != null && Object.hasOwnProperty.call(message, "devicePixelRatio"))
                writer.uint32(/* id 6, wireType 1 =*/49).double(message.devicePixelRatio);
            if (message.viewportOrientation != null && Object.hasOwnProperty.call(message, "viewportOrientation"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.viewportOrientation);
            return writer;
        };

        /**
         * Decodes a ViewportSizeEvent message from the specified reader or buffer.
         * @function decode
         * @memberof bundle.ViewportSizeEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bundle.ViewportSizeEvent} ViewportSizeEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ViewportSizeEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bundle.ViewportSizeEvent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.determinedAt = reader.int64();
                    break;
                case 2:
                    message.devicePhysicalWidth = reader.int64();
                    break;
                case 3:
                    message.devicePhysicalHeight = reader.int64();
                    break;
                case 4:
                    message.deviceLogicalWidth = reader.int64();
                    break;
                case 5:
                    message.deviceLogicalHeight = reader.int64();
                    break;
                case 6:
                    message.devicePixelRatio = reader.double();
                    break;
                case 7:
                    message.viewportOrientation = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * The orientation of the viewport on the device. This may or may not align with
         * the orientation reported by Orientation depending on whether the user has
         * rotation lock enabled on their device.
         * @name bundle.ViewportSizeEvent.ViewportOrientationDirection
         * @enum {number}
         * @property {number} UNKNOWN_ORIENTATION_DIRECTION=0 UNKNOWN_ORIENTATION_DIRECTION value
         * @property {number} PORTRAIT_PRIMARY=1 PORTRAIT_PRIMARY value
         * @property {number} PORTRAIT_SECONDARY=2 PORTRAIT_SECONDARY value
         * @property {number} LANDSCAPE_PRIMARY=3 LANDSCAPE_PRIMARY value
         * @property {number} LANDSCAPE_SECONDARY=4 LANDSCAPE_SECONDARY value
         */
        ViewportSizeEvent.ViewportOrientationDirection = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN_ORIENTATION_DIRECTION"] = 0;
            values[valuesById[1] = "PORTRAIT_PRIMARY"] = 1;
            values[valuesById[2] = "PORTRAIT_SECONDARY"] = 2;
            values[valuesById[3] = "LANDSCAPE_PRIMARY"] = 3;
            values[valuesById[4] = "LANDSCAPE_SECONDARY"] = 4;
            return values;
        })();

        return ViewportSizeEvent;
    })();

    bundle.AppLifeCycleEvent = (function() {

        /**
         * Properties of an AppLifeCycleEvent.
         * @memberof bundle
         * @interface IAppLifeCycleEvent
         * @property {number|null} [determinedAt] AppLifeCycleEvent determinedAt
         * @property {bundle.AppLifeCycleEvent.AppLifeCycleStatus|null} [appLifeCycleStatus] AppLifeCycleEvent appLifeCycleStatus
         */

        /**
         * Constructs a new AppLifeCycleEvent.
         * @memberof bundle
         * @classdesc Represents an AppLifeCycleEvent.
         * @implements IAppLifeCycleEvent
         * @constructor
         * @param {bundle.IAppLifeCycleEvent=} [properties] Properties to set
         */
        function AppLifeCycleEvent(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AppLifeCycleEvent determinedAt.
         * @member {number} determinedAt
         * @memberof bundle.AppLifeCycleEvent
         * @instance
         */
        AppLifeCycleEvent.prototype.determinedAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AppLifeCycleEvent appLifeCycleStatus.
         * @member {bundle.AppLifeCycleEvent.AppLifeCycleStatus} appLifeCycleStatus
         * @memberof bundle.AppLifeCycleEvent
         * @instance
         */
        AppLifeCycleEvent.prototype.appLifeCycleStatus = 0;

        /**
         * Creates a new AppLifeCycleEvent instance using the specified properties.
         * @function create
         * @memberof bundle.AppLifeCycleEvent
         * @static
         * @param {bundle.IAppLifeCycleEvent=} [properties] Properties to set
         * @returns {bundle.AppLifeCycleEvent} AppLifeCycleEvent instance
         */
        AppLifeCycleEvent.create = function create(properties) {
            return new AppLifeCycleEvent(properties);
        };

        /**
         * Encodes the specified AppLifeCycleEvent message. Does not implicitly {@link bundle.AppLifeCycleEvent.verify|verify} messages.
         * @function encode
         * @memberof bundle.AppLifeCycleEvent
         * @static
         * @param {bundle.IAppLifeCycleEvent} message AppLifeCycleEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AppLifeCycleEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.determinedAt != null && Object.hasOwnProperty.call(message, "determinedAt"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.determinedAt);
            if (message.appLifeCycleStatus != null && Object.hasOwnProperty.call(message, "appLifeCycleStatus"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.appLifeCycleStatus);
            return writer;
        };

        /**
         * Decodes an AppLifeCycleEvent message from the specified reader or buffer.
         * @function decode
         * @memberof bundle.AppLifeCycleEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bundle.AppLifeCycleEvent} AppLifeCycleEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AppLifeCycleEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bundle.AppLifeCycleEvent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.determinedAt = reader.int64();
                    break;
                case 2:
                    message.appLifeCycleStatus = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * AppLifeCycleStatus enum.
         * @name bundle.AppLifeCycleEvent.AppLifeCycleStatus
         * @enum {number}
         * @property {number} UNKNOWN_APP_LIFE_CYCLE_STATUS=0 UNKNOWN_APP_LIFE_CYCLE_STATUS value
         * @property {number} FOREGROUND=1 FOREGROUND value
         * @property {number} BACKGROUND=2 BACKGROUND value
         * @property {number} DESTROY=3 DESTROY value
         */
        AppLifeCycleEvent.AppLifeCycleStatus = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN_APP_LIFE_CYCLE_STATUS"] = 0;
            values[valuesById[1] = "FOREGROUND"] = 1;
            values[valuesById[2] = "BACKGROUND"] = 2;
            values[valuesById[3] = "DESTROY"] = 3;
            return values;
        })();

        return AppLifeCycleEvent;
    })();

    bundle.CustomEvent = (function() {

        /**
         * Properties of a CustomEvent.
         * @memberof bundle
         * @interface ICustomEvent
         * @property {number|null} [determinedAt] CustomEvent determinedAt
         * @property {string|null} [eventName] CustomEvent eventName
         * @property {Object.<string,string>|null} [properties] CustomEvent properties
         * @property {string|null} [eventKey] CustomEvent eventKey
         */

        /**
         * Constructs a new CustomEvent.
         * @memberof bundle
         * @classdesc Represents a CustomEvent.
         * @implements ICustomEvent
         * @constructor
         * @param {bundle.ICustomEvent=} [properties] Properties to set
         */
        function CustomEvent(properties) {
            this.properties = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CustomEvent determinedAt.
         * @member {number} determinedAt
         * @memberof bundle.CustomEvent
         * @instance
         */
        CustomEvent.prototype.determinedAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CustomEvent eventName.
         * @member {string} eventName
         * @memberof bundle.CustomEvent
         * @instance
         */
        CustomEvent.prototype.eventName = "";

        /**
         * CustomEvent properties.
         * @member {Object.<string,string>} properties
         * @memberof bundle.CustomEvent
         * @instance
         */
        CustomEvent.prototype.properties = $util.emptyObject;

        /**
         * CustomEvent eventKey.
         * @member {string} eventKey
         * @memberof bundle.CustomEvent
         * @instance
         */
        CustomEvent.prototype.eventKey = "";

        /**
         * Creates a new CustomEvent instance using the specified properties.
         * @function create
         * @memberof bundle.CustomEvent
         * @static
         * @param {bundle.ICustomEvent=} [properties] Properties to set
         * @returns {bundle.CustomEvent} CustomEvent instance
         */
        CustomEvent.create = function create(properties) {
            return new CustomEvent(properties);
        };

        /**
         * Encodes the specified CustomEvent message. Does not implicitly {@link bundle.CustomEvent.verify|verify} messages.
         * @function encode
         * @memberof bundle.CustomEvent
         * @static
         * @param {bundle.ICustomEvent} message CustomEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CustomEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.determinedAt != null && Object.hasOwnProperty.call(message, "determinedAt"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.determinedAt);
            if (message.eventName != null && Object.hasOwnProperty.call(message, "eventName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.eventName);
            if (message.properties != null && Object.hasOwnProperty.call(message, "properties"))
                for (var keys = Object.keys(message.properties), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.properties[keys[i]]).ldelim();
            if (message.eventKey != null && Object.hasOwnProperty.call(message, "eventKey"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.eventKey);
            return writer;
        };

        /**
         * Decodes a CustomEvent message from the specified reader or buffer.
         * @function decode
         * @memberof bundle.CustomEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bundle.CustomEvent} CustomEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CustomEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bundle.CustomEvent(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.determinedAt = reader.int64();
                    break;
                case 2:
                    message.eventName = reader.string();
                    break;
                case 3:
                    if (message.properties === $util.emptyObject)
                        message.properties = {};
                    var end2 = reader.uint32() + reader.pos;
                    key = "";
                    value = "";
                    while (reader.pos < end2) {
                        var tag2 = reader.uint32();
                        switch (tag2 >>> 3) {
                        case 1:
                            key = reader.string();
                            break;
                        case 2:
                            value = reader.string();
                            break;
                        default:
                            reader.skipType(tag2 & 7);
                            break;
                        }
                    }
                    message.properties[key] = value;
                    break;
                case 4:
                    message.eventKey = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return CustomEvent;
    })();

    bundle.FormSubmitEvent = (function() {

        /**
         * Properties of a FormSubmitEvent.
         * @memberof bundle
         * @interface IFormSubmitEvent
         * @property {number|null} [determinedAt] FormSubmitEvent determinedAt
         * @property {bundle.ITargetElement|null} [submitter] FormSubmitEvent submitter
         * @property {bundle.ITargetElement|null} [target] FormSubmitEvent target
         */

        /**
         * Constructs a new FormSubmitEvent.
         * @memberof bundle
         * @classdesc Represents a FormSubmitEvent.
         * @implements IFormSubmitEvent
         * @constructor
         * @param {bundle.IFormSubmitEvent=} [properties] Properties to set
         */
        function FormSubmitEvent(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FormSubmitEvent determinedAt.
         * @member {number} determinedAt
         * @memberof bundle.FormSubmitEvent
         * @instance
         */
        FormSubmitEvent.prototype.determinedAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * FormSubmitEvent submitter.
         * @member {bundle.ITargetElement|null|undefined} submitter
         * @memberof bundle.FormSubmitEvent
         * @instance
         */
        FormSubmitEvent.prototype.submitter = null;

        /**
         * FormSubmitEvent target.
         * @member {bundle.ITargetElement|null|undefined} target
         * @memberof bundle.FormSubmitEvent
         * @instance
         */
        FormSubmitEvent.prototype.target = null;

        /**
         * Creates a new FormSubmitEvent instance using the specified properties.
         * @function create
         * @memberof bundle.FormSubmitEvent
         * @static
         * @param {bundle.IFormSubmitEvent=} [properties] Properties to set
         * @returns {bundle.FormSubmitEvent} FormSubmitEvent instance
         */
        FormSubmitEvent.create = function create(properties) {
            return new FormSubmitEvent(properties);
        };

        /**
         * Encodes the specified FormSubmitEvent message. Does not implicitly {@link bundle.FormSubmitEvent.verify|verify} messages.
         * @function encode
         * @memberof bundle.FormSubmitEvent
         * @static
         * @param {bundle.IFormSubmitEvent} message FormSubmitEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FormSubmitEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.determinedAt != null && Object.hasOwnProperty.call(message, "determinedAt"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.determinedAt);
            if (message.submitter != null && Object.hasOwnProperty.call(message, "submitter"))
                $root.bundle.TargetElement.encode(message.submitter, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.target != null && Object.hasOwnProperty.call(message, "target"))
                $root.bundle.TargetElement.encode(message.target, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a FormSubmitEvent message from the specified reader or buffer.
         * @function decode
         * @memberof bundle.FormSubmitEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bundle.FormSubmitEvent} FormSubmitEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FormSubmitEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bundle.FormSubmitEvent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.determinedAt = reader.int64();
                    break;
                case 2:
                    message.submitter = $root.bundle.TargetElement.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.target = $root.bundle.TargetElement.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return FormSubmitEvent;
    })();

    bundle.ContextMenuEvent = (function() {

        /**
         * Properties of a ContextMenuEvent.
         * @memberof bundle
         * @interface IContextMenuEvent
         * @property {number|null} [determinedAt] ContextMenuEvent determinedAt
         * @property {bundle.ContextMenuEvent.ContextMenuStatus|null} [contextMenuStatus] ContextMenuEvent contextMenuStatus
         * @property {bundle.ITargetElement|null} [target] ContextMenuEvent target
         */

        /**
         * Constructs a new ContextMenuEvent.
         * @memberof bundle
         * @classdesc Represents a ContextMenuEvent.
         * @implements IContextMenuEvent
         * @constructor
         * @param {bundle.IContextMenuEvent=} [properties] Properties to set
         */
        function ContextMenuEvent(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ContextMenuEvent determinedAt.
         * @member {number} determinedAt
         * @memberof bundle.ContextMenuEvent
         * @instance
         */
        ContextMenuEvent.prototype.determinedAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ContextMenuEvent contextMenuStatus.
         * @member {bundle.ContextMenuEvent.ContextMenuStatus} contextMenuStatus
         * @memberof bundle.ContextMenuEvent
         * @instance
         */
        ContextMenuEvent.prototype.contextMenuStatus = 0;

        /**
         * ContextMenuEvent target.
         * @member {bundle.ITargetElement|null|undefined} target
         * @memberof bundle.ContextMenuEvent
         * @instance
         */
        ContextMenuEvent.prototype.target = null;

        /**
         * Creates a new ContextMenuEvent instance using the specified properties.
         * @function create
         * @memberof bundle.ContextMenuEvent
         * @static
         * @param {bundle.IContextMenuEvent=} [properties] Properties to set
         * @returns {bundle.ContextMenuEvent} ContextMenuEvent instance
         */
        ContextMenuEvent.create = function create(properties) {
            return new ContextMenuEvent(properties);
        };

        /**
         * Encodes the specified ContextMenuEvent message. Does not implicitly {@link bundle.ContextMenuEvent.verify|verify} messages.
         * @function encode
         * @memberof bundle.ContextMenuEvent
         * @static
         * @param {bundle.IContextMenuEvent} message ContextMenuEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ContextMenuEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.determinedAt != null && Object.hasOwnProperty.call(message, "determinedAt"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.determinedAt);
            if (message.contextMenuStatus != null && Object.hasOwnProperty.call(message, "contextMenuStatus"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.contextMenuStatus);
            if (message.target != null && Object.hasOwnProperty.call(message, "target"))
                $root.bundle.TargetElement.encode(message.target, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a ContextMenuEvent message from the specified reader or buffer.
         * @function decode
         * @memberof bundle.ContextMenuEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bundle.ContextMenuEvent} ContextMenuEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ContextMenuEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bundle.ContextMenuEvent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.determinedAt = reader.int64();
                    break;
                case 2:
                    message.contextMenuStatus = reader.int32();
                    break;
                case 3:
                    message.target = $root.bundle.TargetElement.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * ContextMenuStatus enum.
         * @name bundle.ContextMenuEvent.ContextMenuStatus
         * @enum {number}
         * @property {number} UNKNOWN_CONTEXT_MENU_STATUS=0 UNKNOWN_CONTEXT_MENU_STATUS value
         * @property {number} OPEN=1 OPEN value
         * @property {number} CLOSED=2 CLOSED value
         */
        ContextMenuEvent.ContextMenuStatus = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN_CONTEXT_MENU_STATUS"] = 0;
            values[valuesById[1] = "OPEN"] = 1;
            values[valuesById[2] = "CLOSED"] = 2;
            return values;
        })();

        return ContextMenuEvent;
    })();

    bundle.FrameRateEvent = (function() {

        /**
         * Properties of a FrameRateEvent.
         * @memberof bundle
         * @interface IFrameRateEvent
         * @property {number|null} [determinedAt] FrameRateEvent determinedAt
         * @property {number|null} [framesPerSecond] FrameRateEvent framesPerSecond
         */

        /**
         * Constructs a new FrameRateEvent.
         * @memberof bundle
         * @classdesc Represents a FrameRateEvent.
         * @implements IFrameRateEvent
         * @constructor
         * @param {bundle.IFrameRateEvent=} [properties] Properties to set
         */
        function FrameRateEvent(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FrameRateEvent determinedAt.
         * @member {number} determinedAt
         * @memberof bundle.FrameRateEvent
         * @instance
         */
        FrameRateEvent.prototype.determinedAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * FrameRateEvent framesPerSecond.
         * @member {number} framesPerSecond
         * @memberof bundle.FrameRateEvent
         * @instance
         */
        FrameRateEvent.prototype.framesPerSecond = 0;

        /**
         * Creates a new FrameRateEvent instance using the specified properties.
         * @function create
         * @memberof bundle.FrameRateEvent
         * @static
         * @param {bundle.IFrameRateEvent=} [properties] Properties to set
         * @returns {bundle.FrameRateEvent} FrameRateEvent instance
         */
        FrameRateEvent.create = function create(properties) {
            return new FrameRateEvent(properties);
        };

        /**
         * Encodes the specified FrameRateEvent message. Does not implicitly {@link bundle.FrameRateEvent.verify|verify} messages.
         * @function encode
         * @memberof bundle.FrameRateEvent
         * @static
         * @param {bundle.IFrameRateEvent} message FrameRateEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FrameRateEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.determinedAt != null && Object.hasOwnProperty.call(message, "determinedAt"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.determinedAt);
            if (message.framesPerSecond != null && Object.hasOwnProperty.call(message, "framesPerSecond"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.framesPerSecond);
            return writer;
        };

        /**
         * Decodes a FrameRateEvent message from the specified reader or buffer.
         * @function decode
         * @memberof bundle.FrameRateEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bundle.FrameRateEvent} FrameRateEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FrameRateEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bundle.FrameRateEvent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.determinedAt = reader.int64();
                    break;
                case 2:
                    message.framesPerSecond = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return FrameRateEvent;
    })();

    return bundle;
})();

$root.common = (function() {

    /**
     * Namespace common.
     * @exports common
     * @namespace
     */
    var common = {};

    common.Empty = (function() {

        /**
         * Properties of an Empty.
         * @memberof common
         * @interface IEmpty
         */

        /**
         * Constructs a new Empty.
         * @memberof common
         * @classdesc Represents an Empty.
         * @implements IEmpty
         * @constructor
         * @param {common.IEmpty=} [properties] Properties to set
         */
        function Empty(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Empty instance using the specified properties.
         * @function create
         * @memberof common.Empty
         * @static
         * @param {common.IEmpty=} [properties] Properties to set
         * @returns {common.Empty} Empty instance
         */
        Empty.create = function create(properties) {
            return new Empty(properties);
        };

        /**
         * Encodes the specified Empty message. Does not implicitly {@link common.Empty.verify|verify} messages.
         * @function encode
         * @memberof common.Empty
         * @static
         * @param {common.IEmpty} message Empty message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Empty.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Decodes an Empty message from the specified reader or buffer.
         * @function decode
         * @memberof common.Empty
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.Empty} Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Empty.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.Empty();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return Empty;
    })();

    common.ErrorResponse = (function() {

        /**
         * Properties of an ErrorResponse.
         * @memberof common
         * @interface IErrorResponse
         * @property {string|null} [type] ErrorResponse type
         * @property {string|null} [param] ErrorResponse param
         * @property {string|null} [message] ErrorResponse message
         */

        /**
         * Constructs a new ErrorResponse.
         * @memberof common
         * @classdesc Represents an ErrorResponse.
         * @implements IErrorResponse
         * @constructor
         * @param {common.IErrorResponse=} [properties] Properties to set
         */
        function ErrorResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ErrorResponse type.
         * @member {string} type
         * @memberof common.ErrorResponse
         * @instance
         */
        ErrorResponse.prototype.type = "";

        /**
         * ErrorResponse param.
         * @member {string} param
         * @memberof common.ErrorResponse
         * @instance
         */
        ErrorResponse.prototype.param = "";

        /**
         * ErrorResponse message.
         * @member {string} message
         * @memberof common.ErrorResponse
         * @instance
         */
        ErrorResponse.prototype.message = "";

        /**
         * Creates a new ErrorResponse instance using the specified properties.
         * @function create
         * @memberof common.ErrorResponse
         * @static
         * @param {common.IErrorResponse=} [properties] Properties to set
         * @returns {common.ErrorResponse} ErrorResponse instance
         */
        ErrorResponse.create = function create(properties) {
            return new ErrorResponse(properties);
        };

        /**
         * Encodes the specified ErrorResponse message. Does not implicitly {@link common.ErrorResponse.verify|verify} messages.
         * @function encode
         * @memberof common.ErrorResponse
         * @static
         * @param {common.IErrorResponse} message ErrorResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ErrorResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
            if (message.param != null && Object.hasOwnProperty.call(message, "param"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.param);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.message);
            return writer;
        };

        /**
         * Decodes an ErrorResponse message from the specified reader or buffer.
         * @function decode
         * @memberof common.ErrorResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.ErrorResponse} ErrorResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ErrorResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.ErrorResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                case 2:
                    message.param = reader.string();
                    break;
                case 3:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ErrorResponse;
    })();

    common.TokenSelfResponse = (function() {

        /**
         * Properties of a TokenSelfResponse.
         * @memberof common
         * @interface ITokenSelfResponse
         * @property {string|null} [appId] TokenSelfResponse appId
         * @property {string|null} [projectId] TokenSelfResponse projectId
         * @property {string|null} [scopes] TokenSelfResponse scopes
         * @property {string|null} [userId] TokenSelfResponse userId
         * @property {string|null} [credentialId] TokenSelfResponse credentialId
         * @property {number|null} [type] TokenSelfResponse type
         */

        /**
         * Constructs a new TokenSelfResponse.
         * @memberof common
         * @classdesc Represents a TokenSelfResponse.
         * @implements ITokenSelfResponse
         * @constructor
         * @param {common.ITokenSelfResponse=} [properties] Properties to set
         */
        function TokenSelfResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TokenSelfResponse appId.
         * @member {string} appId
         * @memberof common.TokenSelfResponse
         * @instance
         */
        TokenSelfResponse.prototype.appId = "";

        /**
         * TokenSelfResponse projectId.
         * @member {string} projectId
         * @memberof common.TokenSelfResponse
         * @instance
         */
        TokenSelfResponse.prototype.projectId = "";

        /**
         * TokenSelfResponse scopes.
         * @member {string} scopes
         * @memberof common.TokenSelfResponse
         * @instance
         */
        TokenSelfResponse.prototype.scopes = "";

        /**
         * TokenSelfResponse userId.
         * @member {string} userId
         * @memberof common.TokenSelfResponse
         * @instance
         */
        TokenSelfResponse.prototype.userId = "";

        /**
         * TokenSelfResponse credentialId.
         * @member {string} credentialId
         * @memberof common.TokenSelfResponse
         * @instance
         */
        TokenSelfResponse.prototype.credentialId = "";

        /**
         * TokenSelfResponse type.
         * @member {number} type
         * @memberof common.TokenSelfResponse
         * @instance
         */
        TokenSelfResponse.prototype.type = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new TokenSelfResponse instance using the specified properties.
         * @function create
         * @memberof common.TokenSelfResponse
         * @static
         * @param {common.ITokenSelfResponse=} [properties] Properties to set
         * @returns {common.TokenSelfResponse} TokenSelfResponse instance
         */
        TokenSelfResponse.create = function create(properties) {
            return new TokenSelfResponse(properties);
        };

        /**
         * Encodes the specified TokenSelfResponse message. Does not implicitly {@link common.TokenSelfResponse.verify|verify} messages.
         * @function encode
         * @memberof common.TokenSelfResponse
         * @static
         * @param {common.ITokenSelfResponse} message TokenSelfResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TokenSelfResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appId != null && Object.hasOwnProperty.call(message, "appId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.appId);
            if (message.projectId != null && Object.hasOwnProperty.call(message, "projectId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.projectId);
            if (message.scopes != null && Object.hasOwnProperty.call(message, "scopes"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.scopes);
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.userId);
            if (message.credentialId != null && Object.hasOwnProperty.call(message, "credentialId"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.credentialId);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.type);
            return writer;
        };

        /**
         * Decodes a TokenSelfResponse message from the specified reader or buffer.
         * @function decode
         * @memberof common.TokenSelfResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.TokenSelfResponse} TokenSelfResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TokenSelfResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.TokenSelfResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.appId = reader.string();
                    break;
                case 2:
                    message.projectId = reader.string();
                    break;
                case 3:
                    message.scopes = reader.string();
                    break;
                case 4:
                    message.userId = reader.string();
                    break;
                case 5:
                    message.credentialId = reader.string();
                    break;
                case 6:
                    message.type = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return TokenSelfResponse;
    })();

    /**
     * DevicePlatform enum.
     * @name common.DevicePlatform
     * @enum {number}
     * @property {number} UNKNOWN=0 UNKNOWN value
     * @property {number} iOS=1 iOS value
     * @property {number} ANDROID=2 ANDROID value
     * @property {number} WEB=3 WEB value
     */
    common.DevicePlatform = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UNKNOWN"] = 0;
        values[valuesById[1] = "iOS"] = 1;
        values[valuesById[2] = "ANDROID"] = 2;
        values[valuesById[3] = "WEB"] = 3;
        return values;
    })();

    /**
     * SensorType enum.
     * @name common.SensorType
     * @enum {number}
     * @property {number} UNKNOWN_SENSOR=0 UNKNOWN_SENSOR value
     * @property {number} LOCATION=1 LOCATION value
     * @property {number} ACCELEROMETER=2 ACCELEROMETER value
     * @property {number} LINEAR_ACCELEROMETER=3 LINEAR_ACCELEROMETER value
     * @property {number} MAGNETOMETER=4 MAGNETOMETER value
     * @property {number} GYROSCOPE=5 GYROSCOPE value
     * @property {number} BATTERY=6 BATTERY value
     * @property {number} ORIENTATION=7 ORIENTATION value
     * @property {number} POINTER=14 POINTER value
     * @property {number} TEXT_CHANGE=15 TEXT_CHANGE value
     * @property {number} KEY_PRESS=16 KEY_PRESS value
     * @property {number} FOCUS_CHANGE=17 FOCUS_CHANGE value
     * @property {number} VIEW_SCROLL=18 VIEW_SCROLL value
     * @property {number} MOUSE_WHEEL=19 MOUSE_WHEEL value
     * @property {number} CLICK=20 CLICK value
     * @property {number} INPUT_CHANGE=21 INPUT_CHANGE value
     * @property {number} FORM_SUBMIT=22 FORM_SUBMIT value
     * @property {number} CONTEXT_MENU=23 CONTEXT_MENU value
     * @property {number} FRAME_RATE=24 FRAME_RATE value
     */
    common.SensorType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UNKNOWN_SENSOR"] = 0;
        values[valuesById[1] = "LOCATION"] = 1;
        values[valuesById[2] = "ACCELEROMETER"] = 2;
        values[valuesById[3] = "LINEAR_ACCELEROMETER"] = 3;
        values[valuesById[4] = "MAGNETOMETER"] = 4;
        values[valuesById[5] = "GYROSCOPE"] = 5;
        values[valuesById[6] = "BATTERY"] = 6;
        values[valuesById[7] = "ORIENTATION"] = 7;
        values[valuesById[14] = "POINTER"] = 14;
        values[valuesById[15] = "TEXT_CHANGE"] = 15;
        values[valuesById[16] = "KEY_PRESS"] = 16;
        values[valuesById[17] = "FOCUS_CHANGE"] = 17;
        values[valuesById[18] = "VIEW_SCROLL"] = 18;
        values[valuesById[19] = "MOUSE_WHEEL"] = 19;
        values[valuesById[20] = "CLICK"] = 20;
        values[valuesById[21] = "INPUT_CHANGE"] = 21;
        values[valuesById[22] = "FORM_SUBMIT"] = 22;
        values[valuesById[23] = "CONTEXT_MENU"] = 23;
        values[valuesById[24] = "FRAME_RATE"] = 24;
        return values;
    })();

    return common;
})();

$root.feature = (function() {

    /**
     * Namespace feature.
     * @exports feature
     * @namespace
     */
    var feature = {};

    feature.BytesList = (function() {

        /**
         * Properties of a BytesList.
         * @memberof feature
         * @interface IBytesList
         * @property {Array.<Uint8Array>|null} [value] BytesList value
         */

        /**
         * Constructs a new BytesList.
         * @memberof feature
         * @classdesc Represents a BytesList.
         * @implements IBytesList
         * @constructor
         * @param {feature.IBytesList=} [properties] Properties to set
         */
        function BytesList(properties) {
            this.value = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BytesList value.
         * @member {Array.<Uint8Array>} value
         * @memberof feature.BytesList
         * @instance
         */
        BytesList.prototype.value = $util.emptyArray;

        /**
         * Creates a new BytesList instance using the specified properties.
         * @function create
         * @memberof feature.BytesList
         * @static
         * @param {feature.IBytesList=} [properties] Properties to set
         * @returns {feature.BytesList} BytesList instance
         */
        BytesList.create = function create(properties) {
            return new BytesList(properties);
        };

        /**
         * Encodes the specified BytesList message. Does not implicitly {@link feature.BytesList.verify|verify} messages.
         * @function encode
         * @memberof feature.BytesList
         * @static
         * @param {feature.IBytesList} message BytesList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BytesList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.value != null && message.value.length)
                for (var i = 0; i < message.value.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.value[i]);
            return writer;
        };

        /**
         * Decodes a BytesList message from the specified reader or buffer.
         * @function decode
         * @memberof feature.BytesList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {feature.BytesList} BytesList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BytesList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.feature.BytesList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.value && message.value.length))
                        message.value = [];
                    message.value.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return BytesList;
    })();

    feature.DoubleList = (function() {

        /**
         * Properties of a DoubleList.
         * @memberof feature
         * @interface IDoubleList
         * @property {Array.<number>|null} [value] DoubleList value
         */

        /**
         * Constructs a new DoubleList.
         * @memberof feature
         * @classdesc Represents a DoubleList.
         * @implements IDoubleList
         * @constructor
         * @param {feature.IDoubleList=} [properties] Properties to set
         */
        function DoubleList(properties) {
            this.value = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DoubleList value.
         * @member {Array.<number>} value
         * @memberof feature.DoubleList
         * @instance
         */
        DoubleList.prototype.value = $util.emptyArray;

        /**
         * Creates a new DoubleList instance using the specified properties.
         * @function create
         * @memberof feature.DoubleList
         * @static
         * @param {feature.IDoubleList=} [properties] Properties to set
         * @returns {feature.DoubleList} DoubleList instance
         */
        DoubleList.create = function create(properties) {
            return new DoubleList(properties);
        };

        /**
         * Encodes the specified DoubleList message. Does not implicitly {@link feature.DoubleList.verify|verify} messages.
         * @function encode
         * @memberof feature.DoubleList
         * @static
         * @param {feature.IDoubleList} message DoubleList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DoubleList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.value != null && message.value.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.value.length; ++i)
                    writer.double(message.value[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Decodes a DoubleList message from the specified reader or buffer.
         * @function decode
         * @memberof feature.DoubleList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {feature.DoubleList} DoubleList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DoubleList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.feature.DoubleList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.value && message.value.length))
                        message.value = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.value.push(reader.double());
                    } else
                        message.value.push(reader.double());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return DoubleList;
    })();

    feature.DoubleMap = (function() {

        /**
         * Properties of a DoubleMap.
         * @memberof feature
         * @interface IDoubleMap
         * @property {Object.<string,number>|null} [value] DoubleMap value
         */

        /**
         * Constructs a new DoubleMap.
         * @memberof feature
         * @classdesc Represents a DoubleMap.
         * @implements IDoubleMap
         * @constructor
         * @param {feature.IDoubleMap=} [properties] Properties to set
         */
        function DoubleMap(properties) {
            this.value = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DoubleMap value.
         * @member {Object.<string,number>} value
         * @memberof feature.DoubleMap
         * @instance
         */
        DoubleMap.prototype.value = $util.emptyObject;

        /**
         * Creates a new DoubleMap instance using the specified properties.
         * @function create
         * @memberof feature.DoubleMap
         * @static
         * @param {feature.IDoubleMap=} [properties] Properties to set
         * @returns {feature.DoubleMap} DoubleMap instance
         */
        DoubleMap.create = function create(properties) {
            return new DoubleMap(properties);
        };

        /**
         * Encodes the specified DoubleMap message. Does not implicitly {@link feature.DoubleMap.verify|verify} messages.
         * @function encode
         * @memberof feature.DoubleMap
         * @static
         * @param {feature.IDoubleMap} message DoubleMap message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DoubleMap.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                for (var keys = Object.keys(message.value), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 1 =*/17).double(message.value[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Decodes a DoubleMap message from the specified reader or buffer.
         * @function decode
         * @memberof feature.DoubleMap
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {feature.DoubleMap} DoubleMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DoubleMap.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.feature.DoubleMap(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (message.value === $util.emptyObject)
                        message.value = {};
                    var end2 = reader.uint32() + reader.pos;
                    key = "";
                    value = 0;
                    while (reader.pos < end2) {
                        var tag2 = reader.uint32();
                        switch (tag2 >>> 3) {
                        case 1:
                            key = reader.string();
                            break;
                        case 2:
                            value = reader.double();
                            break;
                        default:
                            reader.skipType(tag2 & 7);
                            break;
                        }
                    }
                    message.value[key] = value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return DoubleMap;
    })();

    feature.Int64List = (function() {

        /**
         * Properties of an Int64List.
         * @memberof feature
         * @interface IInt64List
         * @property {Array.<number>|null} [value] Int64List value
         */

        /**
         * Constructs a new Int64List.
         * @memberof feature
         * @classdesc Represents an Int64List.
         * @implements IInt64List
         * @constructor
         * @param {feature.IInt64List=} [properties] Properties to set
         */
        function Int64List(properties) {
            this.value = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Int64List value.
         * @member {Array.<number>} value
         * @memberof feature.Int64List
         * @instance
         */
        Int64List.prototype.value = $util.emptyArray;

        /**
         * Creates a new Int64List instance using the specified properties.
         * @function create
         * @memberof feature.Int64List
         * @static
         * @param {feature.IInt64List=} [properties] Properties to set
         * @returns {feature.Int64List} Int64List instance
         */
        Int64List.create = function create(properties) {
            return new Int64List(properties);
        };

        /**
         * Encodes the specified Int64List message. Does not implicitly {@link feature.Int64List.verify|verify} messages.
         * @function encode
         * @memberof feature.Int64List
         * @static
         * @param {feature.IInt64List} message Int64List message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Int64List.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.value != null && message.value.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.value.length; ++i)
                    writer.int64(message.value[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Decodes an Int64List message from the specified reader or buffer.
         * @function decode
         * @memberof feature.Int64List
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {feature.Int64List} Int64List
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Int64List.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.feature.Int64List();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.value && message.value.length))
                        message.value = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.value.push(reader.int64());
                    } else
                        message.value.push(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return Int64List;
    })();

    feature.StringList = (function() {

        /**
         * Properties of a StringList.
         * @memberof feature
         * @interface IStringList
         * @property {Array.<string>|null} [value] StringList value
         */

        /**
         * Constructs a new StringList.
         * @memberof feature
         * @classdesc Represents a StringList.
         * @implements IStringList
         * @constructor
         * @param {feature.IStringList=} [properties] Properties to set
         */
        function StringList(properties) {
            this.value = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StringList value.
         * @member {Array.<string>} value
         * @memberof feature.StringList
         * @instance
         */
        StringList.prototype.value = $util.emptyArray;

        /**
         * Creates a new StringList instance using the specified properties.
         * @function create
         * @memberof feature.StringList
         * @static
         * @param {feature.IStringList=} [properties] Properties to set
         * @returns {feature.StringList} StringList instance
         */
        StringList.create = function create(properties) {
            return new StringList(properties);
        };

        /**
         * Encodes the specified StringList message. Does not implicitly {@link feature.StringList.verify|verify} messages.
         * @function encode
         * @memberof feature.StringList
         * @static
         * @param {feature.IStringList} message StringList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StringList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.value != null && message.value.length)
                for (var i = 0; i < message.value.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.value[i]);
            return writer;
        };

        /**
         * Decodes a StringList message from the specified reader or buffer.
         * @function decode
         * @memberof feature.StringList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {feature.StringList} StringList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StringList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.feature.StringList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.value && message.value.length))
                        message.value = [];
                    message.value.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return StringList;
    })();

    feature.Feature = (function() {

        /**
         * Properties of a Feature.
         * @memberof feature
         * @interface IFeature
         * @property {feature.IBytesList|null} [bytesList] Feature bytesList
         * @property {feature.IDoubleList|null} [doubleList] Feature doubleList
         * @property {feature.IInt64List|null} [int64List] Feature int64List
         * @property {feature.IStringList|null} [stringList] Feature stringList
         * @property {feature.IDoubleMap|null} [doubleMap] Feature doubleMap
         */

        /**
         * Constructs a new Feature.
         * @memberof feature
         * @classdesc Represents a Feature.
         * @implements IFeature
         * @constructor
         * @param {feature.IFeature=} [properties] Properties to set
         */
        function Feature(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Feature bytesList.
         * @member {feature.IBytesList|null|undefined} bytesList
         * @memberof feature.Feature
         * @instance
         */
        Feature.prototype.bytesList = null;

        /**
         * Feature doubleList.
         * @member {feature.IDoubleList|null|undefined} doubleList
         * @memberof feature.Feature
         * @instance
         */
        Feature.prototype.doubleList = null;

        /**
         * Feature int64List.
         * @member {feature.IInt64List|null|undefined} int64List
         * @memberof feature.Feature
         * @instance
         */
        Feature.prototype.int64List = null;

        /**
         * Feature stringList.
         * @member {feature.IStringList|null|undefined} stringList
         * @memberof feature.Feature
         * @instance
         */
        Feature.prototype.stringList = null;

        /**
         * Feature doubleMap.
         * @member {feature.IDoubleMap|null|undefined} doubleMap
         * @memberof feature.Feature
         * @instance
         */
        Feature.prototype.doubleMap = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * Feature kind.
         * @member {"bytesList"|"doubleList"|"int64List"|"stringList"|"doubleMap"|undefined} kind
         * @memberof feature.Feature
         * @instance
         */
        Object.defineProperty(Feature.prototype, "kind", {
            get: $util.oneOfGetter($oneOfFields = ["bytesList", "doubleList", "int64List", "stringList", "doubleMap"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Feature instance using the specified properties.
         * @function create
         * @memberof feature.Feature
         * @static
         * @param {feature.IFeature=} [properties] Properties to set
         * @returns {feature.Feature} Feature instance
         */
        Feature.create = function create(properties) {
            return new Feature(properties);
        };

        /**
         * Encodes the specified Feature message. Does not implicitly {@link feature.Feature.verify|verify} messages.
         * @function encode
         * @memberof feature.Feature
         * @static
         * @param {feature.IFeature} message Feature message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Feature.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.bytesList != null && Object.hasOwnProperty.call(message, "bytesList"))
                $root.feature.BytesList.encode(message.bytesList, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.doubleList != null && Object.hasOwnProperty.call(message, "doubleList"))
                $root.feature.DoubleList.encode(message.doubleList, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.int64List != null && Object.hasOwnProperty.call(message, "int64List"))
                $root.feature.Int64List.encode(message.int64List, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.stringList != null && Object.hasOwnProperty.call(message, "stringList"))
                $root.feature.StringList.encode(message.stringList, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.doubleMap != null && Object.hasOwnProperty.call(message, "doubleMap"))
                $root.feature.DoubleMap.encode(message.doubleMap, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a Feature message from the specified reader or buffer.
         * @function decode
         * @memberof feature.Feature
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {feature.Feature} Feature
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Feature.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.feature.Feature();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.bytesList = $root.feature.BytesList.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.doubleList = $root.feature.DoubleList.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.int64List = $root.feature.Int64List.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.stringList = $root.feature.StringList.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.doubleMap = $root.feature.DoubleMap.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return Feature;
    })();

    return feature;
})();

$root.controlplane = (function() {

    /**
     * Namespace controlplane.
     * @exports controlplane
     * @namespace
     */
    var controlplane = {};

    controlplane.DataPlaneRegion = (function() {

        /**
         * Properties of a DataPlaneRegion.
         * @memberof controlplane
         * @interface IDataPlaneRegion
         * @property {string|null} [name] DataPlaneRegion name
         * @property {string|null} [url] DataPlaneRegion url
         * @property {number|null} [lat] DataPlaneRegion lat
         * @property {number|null} [lon] DataPlaneRegion lon
         * @property {string|null} [region] DataPlaneRegion region
         * @property {Array.<string>|null} [labels] DataPlaneRegion labels
         * @property {boolean|null} [defaultPrimary] DataPlaneRegion defaultPrimary
         * @property {boolean|null} [defaultBackup] DataPlaneRegion defaultBackup
         * @property {string|null} [status] DataPlaneRegion status
         */

        /**
         * Constructs a new DataPlaneRegion.
         * @memberof controlplane
         * @classdesc Represents a DataPlaneRegion.
         * @implements IDataPlaneRegion
         * @constructor
         * @param {controlplane.IDataPlaneRegion=} [properties] Properties to set
         */
        function DataPlaneRegion(properties) {
            this.labels = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DataPlaneRegion name.
         * @member {string} name
         * @memberof controlplane.DataPlaneRegion
         * @instance
         */
        DataPlaneRegion.prototype.name = "";

        /**
         * DataPlaneRegion url.
         * @member {string} url
         * @memberof controlplane.DataPlaneRegion
         * @instance
         */
        DataPlaneRegion.prototype.url = "";

        /**
         * DataPlaneRegion lat.
         * @member {number} lat
         * @memberof controlplane.DataPlaneRegion
         * @instance
         */
        DataPlaneRegion.prototype.lat = 0;

        /**
         * DataPlaneRegion lon.
         * @member {number} lon
         * @memberof controlplane.DataPlaneRegion
         * @instance
         */
        DataPlaneRegion.prototype.lon = 0;

        /**
         * DataPlaneRegion region.
         * @member {string} region
         * @memberof controlplane.DataPlaneRegion
         * @instance
         */
        DataPlaneRegion.prototype.region = "";

        /**
         * DataPlaneRegion labels.
         * @member {Array.<string>} labels
         * @memberof controlplane.DataPlaneRegion
         * @instance
         */
        DataPlaneRegion.prototype.labels = $util.emptyArray;

        /**
         * DataPlaneRegion defaultPrimary.
         * @member {boolean} defaultPrimary
         * @memberof controlplane.DataPlaneRegion
         * @instance
         */
        DataPlaneRegion.prototype.defaultPrimary = false;

        /**
         * DataPlaneRegion defaultBackup.
         * @member {boolean} defaultBackup
         * @memberof controlplane.DataPlaneRegion
         * @instance
         */
        DataPlaneRegion.prototype.defaultBackup = false;

        /**
         * DataPlaneRegion status.
         * @member {string} status
         * @memberof controlplane.DataPlaneRegion
         * @instance
         */
        DataPlaneRegion.prototype.status = "";

        /**
         * Creates a new DataPlaneRegion instance using the specified properties.
         * @function create
         * @memberof controlplane.DataPlaneRegion
         * @static
         * @param {controlplane.IDataPlaneRegion=} [properties] Properties to set
         * @returns {controlplane.DataPlaneRegion} DataPlaneRegion instance
         */
        DataPlaneRegion.create = function create(properties) {
            return new DataPlaneRegion(properties);
        };

        /**
         * Encodes the specified DataPlaneRegion message. Does not implicitly {@link controlplane.DataPlaneRegion.verify|verify} messages.
         * @function encode
         * @memberof controlplane.DataPlaneRegion
         * @static
         * @param {controlplane.IDataPlaneRegion} message DataPlaneRegion message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DataPlaneRegion.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.url);
            if (message.lat != null && Object.hasOwnProperty.call(message, "lat"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.lat);
            if (message.lon != null && Object.hasOwnProperty.call(message, "lon"))
                writer.uint32(/* id 4, wireType 1 =*/33).double(message.lon);
            if (message.region != null && Object.hasOwnProperty.call(message, "region"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.region);
            if (message.labels != null && message.labels.length)
                for (var i = 0; i < message.labels.length; ++i)
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.labels[i]);
            if (message.defaultPrimary != null && Object.hasOwnProperty.call(message, "defaultPrimary"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.defaultPrimary);
            if (message.defaultBackup != null && Object.hasOwnProperty.call(message, "defaultBackup"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.defaultBackup);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.status);
            return writer;
        };

        /**
         * Decodes a DataPlaneRegion message from the specified reader or buffer.
         * @function decode
         * @memberof controlplane.DataPlaneRegion
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {controlplane.DataPlaneRegion} DataPlaneRegion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DataPlaneRegion.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.controlplane.DataPlaneRegion();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.url = reader.string();
                    break;
                case 3:
                    message.lat = reader.double();
                    break;
                case 4:
                    message.lon = reader.double();
                    break;
                case 5:
                    message.region = reader.string();
                    break;
                case 6:
                    if (!(message.labels && message.labels.length))
                        message.labels = [];
                    message.labels.push(reader.string());
                    break;
                case 7:
                    message.defaultPrimary = reader.bool();
                    break;
                case 8:
                    message.defaultBackup = reader.bool();
                    break;
                case 9:
                    message.status = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return DataPlaneRegion;
    })();

    controlplane.DataRegionsLocateResponse = (function() {

        /**
         * Properties of a DataRegionsLocateResponse.
         * @memberof controlplane
         * @interface IDataRegionsLocateResponse
         * @property {string|null} [primaryUrl] DataRegionsLocateResponse primaryUrl
         * @property {string|null} [backupUrl] DataRegionsLocateResponse backupUrl
         * @property {string|null} [primaryNetworkUrl] DataRegionsLocateResponse primaryNetworkUrl
         * @property {string|null} [backupNetworkUrl] DataRegionsLocateResponse backupNetworkUrl
         */

        /**
         * Constructs a new DataRegionsLocateResponse.
         * @memberof controlplane
         * @classdesc Represents a DataRegionsLocateResponse.
         * @implements IDataRegionsLocateResponse
         * @constructor
         * @param {controlplane.IDataRegionsLocateResponse=} [properties] Properties to set
         */
        function DataRegionsLocateResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DataRegionsLocateResponse primaryUrl.
         * @member {string} primaryUrl
         * @memberof controlplane.DataRegionsLocateResponse
         * @instance
         */
        DataRegionsLocateResponse.prototype.primaryUrl = "";

        /**
         * DataRegionsLocateResponse backupUrl.
         * @member {string} backupUrl
         * @memberof controlplane.DataRegionsLocateResponse
         * @instance
         */
        DataRegionsLocateResponse.prototype.backupUrl = "";

        /**
         * DataRegionsLocateResponse primaryNetworkUrl.
         * @member {string} primaryNetworkUrl
         * @memberof controlplane.DataRegionsLocateResponse
         * @instance
         */
        DataRegionsLocateResponse.prototype.primaryNetworkUrl = "";

        /**
         * DataRegionsLocateResponse backupNetworkUrl.
         * @member {string} backupNetworkUrl
         * @memberof controlplane.DataRegionsLocateResponse
         * @instance
         */
        DataRegionsLocateResponse.prototype.backupNetworkUrl = "";

        /**
         * Creates a new DataRegionsLocateResponse instance using the specified properties.
         * @function create
         * @memberof controlplane.DataRegionsLocateResponse
         * @static
         * @param {controlplane.IDataRegionsLocateResponse=} [properties] Properties to set
         * @returns {controlplane.DataRegionsLocateResponse} DataRegionsLocateResponse instance
         */
        DataRegionsLocateResponse.create = function create(properties) {
            return new DataRegionsLocateResponse(properties);
        };

        /**
         * Encodes the specified DataRegionsLocateResponse message. Does not implicitly {@link controlplane.DataRegionsLocateResponse.verify|verify} messages.
         * @function encode
         * @memberof controlplane.DataRegionsLocateResponse
         * @static
         * @param {controlplane.IDataRegionsLocateResponse} message DataRegionsLocateResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DataRegionsLocateResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.primaryUrl != null && Object.hasOwnProperty.call(message, "primaryUrl"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.primaryUrl);
            if (message.backupUrl != null && Object.hasOwnProperty.call(message, "backupUrl"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.backupUrl);
            if (message.primaryNetworkUrl != null && Object.hasOwnProperty.call(message, "primaryNetworkUrl"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.primaryNetworkUrl);
            if (message.backupNetworkUrl != null && Object.hasOwnProperty.call(message, "backupNetworkUrl"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.backupNetworkUrl);
            return writer;
        };

        /**
         * Decodes a DataRegionsLocateResponse message from the specified reader or buffer.
         * @function decode
         * @memberof controlplane.DataRegionsLocateResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {controlplane.DataRegionsLocateResponse} DataRegionsLocateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DataRegionsLocateResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.controlplane.DataRegionsLocateResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.primaryUrl = reader.string();
                    break;
                case 2:
                    message.backupUrl = reader.string();
                    break;
                case 3:
                    message.primaryNetworkUrl = reader.string();
                    break;
                case 4:
                    message.backupNetworkUrl = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return DataRegionsLocateResponse;
    })();

    controlplane.DataRegionsListResponse = (function() {

        /**
         * Properties of a DataRegionsListResponse.
         * @memberof controlplane
         * @interface IDataRegionsListResponse
         * @property {Array.<controlplane.IDataPlaneRegion>|null} [regions] DataRegionsListResponse regions
         */

        /**
         * Constructs a new DataRegionsListResponse.
         * @memberof controlplane
         * @classdesc Represents a DataRegionsListResponse.
         * @implements IDataRegionsListResponse
         * @constructor
         * @param {controlplane.IDataRegionsListResponse=} [properties] Properties to set
         */
        function DataRegionsListResponse(properties) {
            this.regions = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DataRegionsListResponse regions.
         * @member {Array.<controlplane.IDataPlaneRegion>} regions
         * @memberof controlplane.DataRegionsListResponse
         * @instance
         */
        DataRegionsListResponse.prototype.regions = $util.emptyArray;

        /**
         * Creates a new DataRegionsListResponse instance using the specified properties.
         * @function create
         * @memberof controlplane.DataRegionsListResponse
         * @static
         * @param {controlplane.IDataRegionsListResponse=} [properties] Properties to set
         * @returns {controlplane.DataRegionsListResponse} DataRegionsListResponse instance
         */
        DataRegionsListResponse.create = function create(properties) {
            return new DataRegionsListResponse(properties);
        };

        /**
         * Encodes the specified DataRegionsListResponse message. Does not implicitly {@link controlplane.DataRegionsListResponse.verify|verify} messages.
         * @function encode
         * @memberof controlplane.DataRegionsListResponse
         * @static
         * @param {controlplane.IDataRegionsListResponse} message DataRegionsListResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DataRegionsListResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.regions != null && message.regions.length)
                for (var i = 0; i < message.regions.length; ++i)
                    $root.controlplane.DataPlaneRegion.encode(message.regions[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a DataRegionsListResponse message from the specified reader or buffer.
         * @function decode
         * @memberof controlplane.DataRegionsListResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {controlplane.DataRegionsListResponse} DataRegionsListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DataRegionsListResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.controlplane.DataRegionsListResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.regions && message.regions.length))
                        message.regions = [];
                    message.regions.push($root.controlplane.DataPlaneRegion.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return DataRegionsListResponse;
    })();

    controlplane.TokenUpgradeRequest = (function() {

        /**
         * Properties of a TokenUpgradeRequest.
         * @memberof controlplane
         * @interface ITokenUpgradeRequest
         * @property {string|null} [publicToken] TokenUpgradeRequest publicToken
         * @property {string|null} [userId] TokenUpgradeRequest userId
         * @property {number|null} [expiresInSeconds] TokenUpgradeRequest expiresInSeconds
         * @property {number|null} [maxIdleTimeMinutes] TokenUpgradeRequest maxIdleTimeMinutes
         */

        /**
         * Constructs a new TokenUpgradeRequest.
         * @memberof controlplane
         * @classdesc Represents a TokenUpgradeRequest.
         * @implements ITokenUpgradeRequest
         * @constructor
         * @param {controlplane.ITokenUpgradeRequest=} [properties] Properties to set
         */
        function TokenUpgradeRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TokenUpgradeRequest publicToken.
         * @member {string} publicToken
         * @memberof controlplane.TokenUpgradeRequest
         * @instance
         */
        TokenUpgradeRequest.prototype.publicToken = "";

        /**
         * TokenUpgradeRequest userId.
         * @member {string} userId
         * @memberof controlplane.TokenUpgradeRequest
         * @instance
         */
        TokenUpgradeRequest.prototype.userId = "";

        /**
         * TokenUpgradeRequest expiresInSeconds.
         * @member {number} expiresInSeconds
         * @memberof controlplane.TokenUpgradeRequest
         * @instance
         */
        TokenUpgradeRequest.prototype.expiresInSeconds = 0;

        /**
         * TokenUpgradeRequest maxIdleTimeMinutes.
         * @member {number} maxIdleTimeMinutes
         * @memberof controlplane.TokenUpgradeRequest
         * @instance
         */
        TokenUpgradeRequest.prototype.maxIdleTimeMinutes = 0;

        /**
         * Creates a new TokenUpgradeRequest instance using the specified properties.
         * @function create
         * @memberof controlplane.TokenUpgradeRequest
         * @static
         * @param {controlplane.ITokenUpgradeRequest=} [properties] Properties to set
         * @returns {controlplane.TokenUpgradeRequest} TokenUpgradeRequest instance
         */
        TokenUpgradeRequest.create = function create(properties) {
            return new TokenUpgradeRequest(properties);
        };

        /**
         * Encodes the specified TokenUpgradeRequest message. Does not implicitly {@link controlplane.TokenUpgradeRequest.verify|verify} messages.
         * @function encode
         * @memberof controlplane.TokenUpgradeRequest
         * @static
         * @param {controlplane.ITokenUpgradeRequest} message TokenUpgradeRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TokenUpgradeRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.publicToken != null && Object.hasOwnProperty.call(message, "publicToken"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.publicToken);
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.userId);
            if (message.expiresInSeconds != null && Object.hasOwnProperty.call(message, "expiresInSeconds"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.expiresInSeconds);
            if (message.maxIdleTimeMinutes != null && Object.hasOwnProperty.call(message, "maxIdleTimeMinutes"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.maxIdleTimeMinutes);
            return writer;
        };

        /**
         * Decodes a TokenUpgradeRequest message from the specified reader or buffer.
         * @function decode
         * @memberof controlplane.TokenUpgradeRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {controlplane.TokenUpgradeRequest} TokenUpgradeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TokenUpgradeRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.controlplane.TokenUpgradeRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.publicToken = reader.string();
                    break;
                case 2:
                    message.userId = reader.string();
                    break;
                case 3:
                    message.expiresInSeconds = reader.int32();
                    break;
                case 4:
                    message.maxIdleTimeMinutes = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return TokenUpgradeRequest;
    })();

    controlplane.TokenUpgradeResponse = (function() {

        /**
         * Properties of a TokenUpgradeResponse.
         * @memberof controlplane
         * @interface ITokenUpgradeResponse
         * @property {string|null} [appAccessToken] TokenUpgradeResponse appAccessToken
         */

        /**
         * Constructs a new TokenUpgradeResponse.
         * @memberof controlplane
         * @classdesc Represents a TokenUpgradeResponse.
         * @implements ITokenUpgradeResponse
         * @constructor
         * @param {controlplane.ITokenUpgradeResponse=} [properties] Properties to set
         */
        function TokenUpgradeResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TokenUpgradeResponse appAccessToken.
         * @member {string} appAccessToken
         * @memberof controlplane.TokenUpgradeResponse
         * @instance
         */
        TokenUpgradeResponse.prototype.appAccessToken = "";

        /**
         * Creates a new TokenUpgradeResponse instance using the specified properties.
         * @function create
         * @memberof controlplane.TokenUpgradeResponse
         * @static
         * @param {controlplane.ITokenUpgradeResponse=} [properties] Properties to set
         * @returns {controlplane.TokenUpgradeResponse} TokenUpgradeResponse instance
         */
        TokenUpgradeResponse.create = function create(properties) {
            return new TokenUpgradeResponse(properties);
        };

        /**
         * Encodes the specified TokenUpgradeResponse message. Does not implicitly {@link controlplane.TokenUpgradeResponse.verify|verify} messages.
         * @function encode
         * @memberof controlplane.TokenUpgradeResponse
         * @static
         * @param {controlplane.ITokenUpgradeResponse} message TokenUpgradeResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TokenUpgradeResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appAccessToken != null && Object.hasOwnProperty.call(message, "appAccessToken"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.appAccessToken);
            return writer;
        };

        /**
         * Decodes a TokenUpgradeResponse message from the specified reader or buffer.
         * @function decode
         * @memberof controlplane.TokenUpgradeResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {controlplane.TokenUpgradeResponse} TokenUpgradeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TokenUpgradeResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.controlplane.TokenUpgradeResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.appAccessToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return TokenUpgradeResponse;
    })();

    controlplane.RevokeAppTokenRequest = (function() {

        /**
         * Properties of a RevokeAppTokenRequest.
         * @memberof controlplane
         * @interface IRevokeAppTokenRequest
         * @property {string|null} [userId] RevokeAppTokenRequest userId
         */

        /**
         * Constructs a new RevokeAppTokenRequest.
         * @memberof controlplane
         * @classdesc Represents a RevokeAppTokenRequest.
         * @implements IRevokeAppTokenRequest
         * @constructor
         * @param {controlplane.IRevokeAppTokenRequest=} [properties] Properties to set
         */
        function RevokeAppTokenRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RevokeAppTokenRequest userId.
         * @member {string} userId
         * @memberof controlplane.RevokeAppTokenRequest
         * @instance
         */
        RevokeAppTokenRequest.prototype.userId = "";

        /**
         * Creates a new RevokeAppTokenRequest instance using the specified properties.
         * @function create
         * @memberof controlplane.RevokeAppTokenRequest
         * @static
         * @param {controlplane.IRevokeAppTokenRequest=} [properties] Properties to set
         * @returns {controlplane.RevokeAppTokenRequest} RevokeAppTokenRequest instance
         */
        RevokeAppTokenRequest.create = function create(properties) {
            return new RevokeAppTokenRequest(properties);
        };

        /**
         * Encodes the specified RevokeAppTokenRequest message. Does not implicitly {@link controlplane.RevokeAppTokenRequest.verify|verify} messages.
         * @function encode
         * @memberof controlplane.RevokeAppTokenRequest
         * @static
         * @param {controlplane.IRevokeAppTokenRequest} message RevokeAppTokenRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RevokeAppTokenRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.userId);
            return writer;
        };

        /**
         * Decodes a RevokeAppTokenRequest message from the specified reader or buffer.
         * @function decode
         * @memberof controlplane.RevokeAppTokenRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {controlplane.RevokeAppTokenRequest} RevokeAppTokenRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RevokeAppTokenRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.controlplane.RevokeAppTokenRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return RevokeAppTokenRequest;
    })();

    return controlplane;
})();

$root.dataplane = (function() {

    /**
     * Namespace dataplane.
     * @exports dataplane
     * @namespace
     */
    var dataplane = {};

    dataplane.LatitudeLongitude = (function() {

        /**
         * Properties of a LatitudeLongitude.
         * @memberof dataplane
         * @interface ILatitudeLongitude
         * @property {number|null} [latitude] LatitudeLongitude latitude
         * @property {number|null} [longitude] LatitudeLongitude longitude
         */

        /**
         * Constructs a new LatitudeLongitude.
         * @memberof dataplane
         * @classdesc Represents a LatitudeLongitude.
         * @implements ILatitudeLongitude
         * @constructor
         * @param {dataplane.ILatitudeLongitude=} [properties] Properties to set
         */
        function LatitudeLongitude(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LatitudeLongitude latitude.
         * @member {number} latitude
         * @memberof dataplane.LatitudeLongitude
         * @instance
         */
        LatitudeLongitude.prototype.latitude = 0;

        /**
         * LatitudeLongitude longitude.
         * @member {number} longitude
         * @memberof dataplane.LatitudeLongitude
         * @instance
         */
        LatitudeLongitude.prototype.longitude = 0;

        /**
         * Creates a new LatitudeLongitude instance using the specified properties.
         * @function create
         * @memberof dataplane.LatitudeLongitude
         * @static
         * @param {dataplane.ILatitudeLongitude=} [properties] Properties to set
         * @returns {dataplane.LatitudeLongitude} LatitudeLongitude instance
         */
        LatitudeLongitude.create = function create(properties) {
            return new LatitudeLongitude(properties);
        };

        /**
         * Encodes the specified LatitudeLongitude message. Does not implicitly {@link dataplane.LatitudeLongitude.verify|verify} messages.
         * @function encode
         * @memberof dataplane.LatitudeLongitude
         * @static
         * @param {dataplane.ILatitudeLongitude} message LatitudeLongitude message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LatitudeLongitude.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.latitude != null && Object.hasOwnProperty.call(message, "latitude"))
                writer.uint32(/* id 1, wireType 1 =*/9).double(message.latitude);
            if (message.longitude != null && Object.hasOwnProperty.call(message, "longitude"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.longitude);
            return writer;
        };

        /**
         * Decodes a LatitudeLongitude message from the specified reader or buffer.
         * @function decode
         * @memberof dataplane.LatitudeLongitude
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dataplane.LatitudeLongitude} LatitudeLongitude
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LatitudeLongitude.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dataplane.LatitudeLongitude();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.latitude = reader.double();
                    break;
                case 2:
                    message.longitude = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return LatitudeLongitude;
    })();

    dataplane.BoundingCircle = (function() {

        /**
         * Properties of a BoundingCircle.
         * @memberof dataplane
         * @interface IBoundingCircle
         * @property {dataplane.ILatitudeLongitude|null} [centroid] BoundingCircle centroid
         * @property {number|null} [radius] BoundingCircle radius
         */

        /**
         * Constructs a new BoundingCircle.
         * @memberof dataplane
         * @classdesc Represents a BoundingCircle.
         * @implements IBoundingCircle
         * @constructor
         * @param {dataplane.IBoundingCircle=} [properties] Properties to set
         */
        function BoundingCircle(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BoundingCircle centroid.
         * @member {dataplane.ILatitudeLongitude|null|undefined} centroid
         * @memberof dataplane.BoundingCircle
         * @instance
         */
        BoundingCircle.prototype.centroid = null;

        /**
         * BoundingCircle radius.
         * @member {number} radius
         * @memberof dataplane.BoundingCircle
         * @instance
         */
        BoundingCircle.prototype.radius = 0;

        /**
         * Creates a new BoundingCircle instance using the specified properties.
         * @function create
         * @memberof dataplane.BoundingCircle
         * @static
         * @param {dataplane.IBoundingCircle=} [properties] Properties to set
         * @returns {dataplane.BoundingCircle} BoundingCircle instance
         */
        BoundingCircle.create = function create(properties) {
            return new BoundingCircle(properties);
        };

        /**
         * Encodes the specified BoundingCircle message. Does not implicitly {@link dataplane.BoundingCircle.verify|verify} messages.
         * @function encode
         * @memberof dataplane.BoundingCircle
         * @static
         * @param {dataplane.IBoundingCircle} message BoundingCircle message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BoundingCircle.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.centroid != null && Object.hasOwnProperty.call(message, "centroid"))
                $root.dataplane.LatitudeLongitude.encode(message.centroid, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.radius != null && Object.hasOwnProperty.call(message, "radius"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.radius);
            return writer;
        };

        /**
         * Decodes a BoundingCircle message from the specified reader or buffer.
         * @function decode
         * @memberof dataplane.BoundingCircle
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dataplane.BoundingCircle} BoundingCircle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BoundingCircle.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dataplane.BoundingCircle();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.centroid = $root.dataplane.LatitudeLongitude.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.radius = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return BoundingCircle;
    })();

    dataplane.RecordingProfile = (function() {

        /**
         * Properties of a RecordingProfile.
         * @memberof dataplane
         * @interface IRecordingProfile
         * @property {string|null} [name] RecordingProfile name
         * @property {number|null} [version] RecordingProfile version
         */

        /**
         * Constructs a new RecordingProfile.
         * @memberof dataplane
         * @classdesc Represents a RecordingProfile.
         * @implements IRecordingProfile
         * @constructor
         * @param {dataplane.IRecordingProfile=} [properties] Properties to set
         */
        function RecordingProfile(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RecordingProfile name.
         * @member {string} name
         * @memberof dataplane.RecordingProfile
         * @instance
         */
        RecordingProfile.prototype.name = "";

        /**
         * RecordingProfile version.
         * @member {number} version
         * @memberof dataplane.RecordingProfile
         * @instance
         */
        RecordingProfile.prototype.version = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new RecordingProfile instance using the specified properties.
         * @function create
         * @memberof dataplane.RecordingProfile
         * @static
         * @param {dataplane.IRecordingProfile=} [properties] Properties to set
         * @returns {dataplane.RecordingProfile} RecordingProfile instance
         */
        RecordingProfile.create = function create(properties) {
            return new RecordingProfile(properties);
        };

        /**
         * Encodes the specified RecordingProfile message. Does not implicitly {@link dataplane.RecordingProfile.verify|verify} messages.
         * @function encode
         * @memberof dataplane.RecordingProfile
         * @static
         * @param {dataplane.IRecordingProfile} message RecordingProfile message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RecordingProfile.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.version);
            return writer;
        };

        /**
         * Decodes a RecordingProfile message from the specified reader or buffer.
         * @function decode
         * @memberof dataplane.RecordingProfile
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dataplane.RecordingProfile} RecordingProfile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RecordingProfile.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dataplane.RecordingProfile();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.version = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return RecordingProfile;
    })();

    dataplane.SessionMetadata = (function() {

        /**
         * Properties of a SessionMetadata.
         * @memberof dataplane
         * @interface ISessionMetadata
         * @property {string|null} [installId] SessionMetadata installId
         * @property {dataplane.SessionMetadata.Platform|null} [platform] SessionMetadata platform
         * @property {string|null} [manufacturer] SessionMetadata manufacturer
         * @property {string|null} [model] SessionMetadata model
         * @property {string|null} [systemVersion] SessionMetadata systemVersion
         * @property {boolean|null} [isDevicePhysical] SessionMetadata isDevicePhysical
         * @property {dataplane.IRecordingProfile|null} [recordingProfile] SessionMetadata recordingProfile
         * @property {number|null} [devicePhysicalWidth] SessionMetadata devicePhysicalWidth
         * @property {number|null} [devicePhysicalHeight] SessionMetadata devicePhysicalHeight
         * @property {number|null} [deviceLogicalWidth] SessionMetadata deviceLogicalWidth
         * @property {number|null} [deviceLogicalHeight] SessionMetadata deviceLogicalHeight
         * @property {number|null} [devicePixelRatio] SessionMetadata devicePixelRatio
         * @property {string|null} [releaseVersion] SessionMetadata releaseVersion
         */

        /**
         * Constructs a new SessionMetadata.
         * @memberof dataplane
         * @classdesc Represents a SessionMetadata.
         * @implements ISessionMetadata
         * @constructor
         * @param {dataplane.ISessionMetadata=} [properties] Properties to set
         */
        function SessionMetadata(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SessionMetadata installId.
         * @member {string} installId
         * @memberof dataplane.SessionMetadata
         * @instance
         */
        SessionMetadata.prototype.installId = "";

        /**
         * SessionMetadata platform.
         * @member {dataplane.SessionMetadata.Platform} platform
         * @memberof dataplane.SessionMetadata
         * @instance
         */
        SessionMetadata.prototype.platform = 0;

        /**
         * SessionMetadata manufacturer.
         * @member {string} manufacturer
         * @memberof dataplane.SessionMetadata
         * @instance
         */
        SessionMetadata.prototype.manufacturer = "";

        /**
         * SessionMetadata model.
         * @member {string} model
         * @memberof dataplane.SessionMetadata
         * @instance
         */
        SessionMetadata.prototype.model = "";

        /**
         * SessionMetadata systemVersion.
         * @member {string} systemVersion
         * @memberof dataplane.SessionMetadata
         * @instance
         */
        SessionMetadata.prototype.systemVersion = "";

        /**
         * SessionMetadata isDevicePhysical.
         * @member {boolean} isDevicePhysical
         * @memberof dataplane.SessionMetadata
         * @instance
         */
        SessionMetadata.prototype.isDevicePhysical = false;

        /**
         * SessionMetadata recordingProfile.
         * @member {dataplane.IRecordingProfile|null|undefined} recordingProfile
         * @memberof dataplane.SessionMetadata
         * @instance
         */
        SessionMetadata.prototype.recordingProfile = null;

        /**
         * SessionMetadata devicePhysicalWidth.
         * @member {number} devicePhysicalWidth
         * @memberof dataplane.SessionMetadata
         * @instance
         */
        SessionMetadata.prototype.devicePhysicalWidth = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SessionMetadata devicePhysicalHeight.
         * @member {number} devicePhysicalHeight
         * @memberof dataplane.SessionMetadata
         * @instance
         */
        SessionMetadata.prototype.devicePhysicalHeight = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SessionMetadata deviceLogicalWidth.
         * @member {number} deviceLogicalWidth
         * @memberof dataplane.SessionMetadata
         * @instance
         */
        SessionMetadata.prototype.deviceLogicalWidth = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SessionMetadata deviceLogicalHeight.
         * @member {number} deviceLogicalHeight
         * @memberof dataplane.SessionMetadata
         * @instance
         */
        SessionMetadata.prototype.deviceLogicalHeight = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SessionMetadata devicePixelRatio.
         * @member {number} devicePixelRatio
         * @memberof dataplane.SessionMetadata
         * @instance
         */
        SessionMetadata.prototype.devicePixelRatio = 0;

        /**
         * SessionMetadata releaseVersion.
         * @member {string} releaseVersion
         * @memberof dataplane.SessionMetadata
         * @instance
         */
        SessionMetadata.prototype.releaseVersion = "";

        /**
         * Creates a new SessionMetadata instance using the specified properties.
         * @function create
         * @memberof dataplane.SessionMetadata
         * @static
         * @param {dataplane.ISessionMetadata=} [properties] Properties to set
         * @returns {dataplane.SessionMetadata} SessionMetadata instance
         */
        SessionMetadata.create = function create(properties) {
            return new SessionMetadata(properties);
        };

        /**
         * Encodes the specified SessionMetadata message. Does not implicitly {@link dataplane.SessionMetadata.verify|verify} messages.
         * @function encode
         * @memberof dataplane.SessionMetadata
         * @static
         * @param {dataplane.ISessionMetadata} message SessionMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SessionMetadata.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.installId != null && Object.hasOwnProperty.call(message, "installId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.installId);
            if (message.platform != null && Object.hasOwnProperty.call(message, "platform"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.platform);
            if (message.manufacturer != null && Object.hasOwnProperty.call(message, "manufacturer"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.manufacturer);
            if (message.model != null && Object.hasOwnProperty.call(message, "model"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.model);
            if (message.systemVersion != null && Object.hasOwnProperty.call(message, "systemVersion"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.systemVersion);
            if (message.isDevicePhysical != null && Object.hasOwnProperty.call(message, "isDevicePhysical"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.isDevicePhysical);
            if (message.recordingProfile != null && Object.hasOwnProperty.call(message, "recordingProfile"))
                $root.dataplane.RecordingProfile.encode(message.recordingProfile, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.devicePhysicalWidth != null && Object.hasOwnProperty.call(message, "devicePhysicalWidth"))
                writer.uint32(/* id 9, wireType 0 =*/72).int64(message.devicePhysicalWidth);
            if (message.devicePhysicalHeight != null && Object.hasOwnProperty.call(message, "devicePhysicalHeight"))
                writer.uint32(/* id 10, wireType 0 =*/80).int64(message.devicePhysicalHeight);
            if (message.deviceLogicalWidth != null && Object.hasOwnProperty.call(message, "deviceLogicalWidth"))
                writer.uint32(/* id 11, wireType 0 =*/88).int64(message.deviceLogicalWidth);
            if (message.deviceLogicalHeight != null && Object.hasOwnProperty.call(message, "deviceLogicalHeight"))
                writer.uint32(/* id 12, wireType 0 =*/96).int64(message.deviceLogicalHeight);
            if (message.devicePixelRatio != null && Object.hasOwnProperty.call(message, "devicePixelRatio"))
                writer.uint32(/* id 13, wireType 1 =*/105).double(message.devicePixelRatio);
            if (message.releaseVersion != null && Object.hasOwnProperty.call(message, "releaseVersion"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.releaseVersion);
            return writer;
        };

        /**
         * Decodes a SessionMetadata message from the specified reader or buffer.
         * @function decode
         * @memberof dataplane.SessionMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dataplane.SessionMetadata} SessionMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SessionMetadata.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dataplane.SessionMetadata();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.installId = reader.string();
                    break;
                case 3:
                    message.platform = reader.int32();
                    break;
                case 4:
                    message.manufacturer = reader.string();
                    break;
                case 5:
                    message.model = reader.string();
                    break;
                case 6:
                    message.systemVersion = reader.string();
                    break;
                case 7:
                    message.isDevicePhysical = reader.bool();
                    break;
                case 8:
                    message.recordingProfile = $root.dataplane.RecordingProfile.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.devicePhysicalWidth = reader.int64();
                    break;
                case 10:
                    message.devicePhysicalHeight = reader.int64();
                    break;
                case 11:
                    message.deviceLogicalWidth = reader.int64();
                    break;
                case 12:
                    message.deviceLogicalHeight = reader.int64();
                    break;
                case 13:
                    message.devicePixelRatio = reader.double();
                    break;
                case 14:
                    message.releaseVersion = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Platform enum.
         * @name dataplane.SessionMetadata.Platform
         * @enum {number}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} iOS=1 iOS value
         * @property {number} ANDROID=2 ANDROID value
         * @property {number} WEB=3 WEB value
         */
        SessionMetadata.Platform = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "iOS"] = 1;
            values[valuesById[2] = "ANDROID"] = 2;
            values[valuesById[3] = "WEB"] = 3;
            return values;
        })();

        return SessionMetadata;
    })();

    dataplane.SessionConfig = (function() {

        /**
         * Properties of a SessionConfig.
         * @memberof dataplane
         * @interface ISessionConfig
         * @property {number|null} [requestedDurationMillis] SessionConfig requestedDurationMillis
         * @property {boolean|null} [maskText] SessionConfig maskText
         * @property {number|null} [sensorSamplingRate] SessionConfig sensorSamplingRate
         * @property {number|null} [bundleGenerationIntervalMillis] SessionConfig bundleGenerationIntervalMillis
         * @property {Array.<common.SensorType>|null} [requestedSensors] SessionConfig requestedSensors
         */

        /**
         * Constructs a new SessionConfig.
         * @memberof dataplane
         * @classdesc Represents a SessionConfig.
         * @implements ISessionConfig
         * @constructor
         * @param {dataplane.ISessionConfig=} [properties] Properties to set
         */
        function SessionConfig(properties) {
            this.requestedSensors = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SessionConfig requestedDurationMillis.
         * @member {number} requestedDurationMillis
         * @memberof dataplane.SessionConfig
         * @instance
         */
        SessionConfig.prototype.requestedDurationMillis = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SessionConfig maskText.
         * @member {boolean} maskText
         * @memberof dataplane.SessionConfig
         * @instance
         */
        SessionConfig.prototype.maskText = false;

        /**
         * SessionConfig sensorSamplingRate.
         * @member {number} sensorSamplingRate
         * @memberof dataplane.SessionConfig
         * @instance
         */
        SessionConfig.prototype.sensorSamplingRate = 0;

        /**
         * SessionConfig bundleGenerationIntervalMillis.
         * @member {number} bundleGenerationIntervalMillis
         * @memberof dataplane.SessionConfig
         * @instance
         */
        SessionConfig.prototype.bundleGenerationIntervalMillis = 0;

        /**
         * SessionConfig requestedSensors.
         * @member {Array.<common.SensorType>} requestedSensors
         * @memberof dataplane.SessionConfig
         * @instance
         */
        SessionConfig.prototype.requestedSensors = $util.emptyArray;

        /**
         * Creates a new SessionConfig instance using the specified properties.
         * @function create
         * @memberof dataplane.SessionConfig
         * @static
         * @param {dataplane.ISessionConfig=} [properties] Properties to set
         * @returns {dataplane.SessionConfig} SessionConfig instance
         */
        SessionConfig.create = function create(properties) {
            return new SessionConfig(properties);
        };

        /**
         * Encodes the specified SessionConfig message. Does not implicitly {@link dataplane.SessionConfig.verify|verify} messages.
         * @function encode
         * @memberof dataplane.SessionConfig
         * @static
         * @param {dataplane.ISessionConfig} message SessionConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SessionConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.requestedDurationMillis != null && Object.hasOwnProperty.call(message, "requestedDurationMillis"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.requestedDurationMillis);
            if (message.maskText != null && Object.hasOwnProperty.call(message, "maskText"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.maskText);
            if (message.sensorSamplingRate != null && Object.hasOwnProperty.call(message, "sensorSamplingRate"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.sensorSamplingRate);
            if (message.bundleGenerationIntervalMillis != null && Object.hasOwnProperty.call(message, "bundleGenerationIntervalMillis"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.bundleGenerationIntervalMillis);
            if (message.requestedSensors != null && message.requestedSensors.length) {
                writer.uint32(/* id 5, wireType 2 =*/42).fork();
                for (var i = 0; i < message.requestedSensors.length; ++i)
                    writer.int32(message.requestedSensors[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Decodes a SessionConfig message from the specified reader or buffer.
         * @function decode
         * @memberof dataplane.SessionConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dataplane.SessionConfig} SessionConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SessionConfig.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dataplane.SessionConfig();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.requestedDurationMillis = reader.int64();
                    break;
                case 2:
                    message.maskText = reader.bool();
                    break;
                case 3:
                    message.sensorSamplingRate = reader.int32();
                    break;
                case 4:
                    message.bundleGenerationIntervalMillis = reader.int32();
                    break;
                case 5:
                    if (!(message.requestedSensors && message.requestedSensors.length))
                        message.requestedSensors = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.requestedSensors.push(reader.int32());
                    } else
                        message.requestedSensors.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return SessionConfig;
    })();

    dataplane.SessionLabel = (function() {

        /**
         * Properties of a SessionLabel.
         * @memberof dataplane
         * @interface ISessionLabel
         * @property {string|null} [labelId] SessionLabel labelId
         * @property {string|null} [sessionLabelId] SessionLabel sessionLabelId
         * @property {string|null} [name] SessionLabel name
         * @property {google.protobuf.ITimestamp|null} [createdAt] SessionLabel createdAt
         */

        /**
         * Constructs a new SessionLabel.
         * @memberof dataplane
         * @classdesc Represents a SessionLabel.
         * @implements ISessionLabel
         * @constructor
         * @param {dataplane.ISessionLabel=} [properties] Properties to set
         */
        function SessionLabel(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SessionLabel labelId.
         * @member {string} labelId
         * @memberof dataplane.SessionLabel
         * @instance
         */
        SessionLabel.prototype.labelId = "";

        /**
         * SessionLabel sessionLabelId.
         * @member {string} sessionLabelId
         * @memberof dataplane.SessionLabel
         * @instance
         */
        SessionLabel.prototype.sessionLabelId = "";

        /**
         * SessionLabel name.
         * @member {string} name
         * @memberof dataplane.SessionLabel
         * @instance
         */
        SessionLabel.prototype.name = "";

        /**
         * SessionLabel createdAt.
         * @member {google.protobuf.ITimestamp|null|undefined} createdAt
         * @memberof dataplane.SessionLabel
         * @instance
         */
        SessionLabel.prototype.createdAt = null;

        /**
         * Creates a new SessionLabel instance using the specified properties.
         * @function create
         * @memberof dataplane.SessionLabel
         * @static
         * @param {dataplane.ISessionLabel=} [properties] Properties to set
         * @returns {dataplane.SessionLabel} SessionLabel instance
         */
        SessionLabel.create = function create(properties) {
            return new SessionLabel(properties);
        };

        /**
         * Encodes the specified SessionLabel message. Does not implicitly {@link dataplane.SessionLabel.verify|verify} messages.
         * @function encode
         * @memberof dataplane.SessionLabel
         * @static
         * @param {dataplane.ISessionLabel} message SessionLabel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SessionLabel.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.labelId != null && Object.hasOwnProperty.call(message, "labelId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.labelId);
            if (message.sessionLabelId != null && Object.hasOwnProperty.call(message, "sessionLabelId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.sessionLabelId);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a SessionLabel message from the specified reader or buffer.
         * @function decode
         * @memberof dataplane.SessionLabel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dataplane.SessionLabel} SessionLabel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SessionLabel.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dataplane.SessionLabel();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.labelId = reader.string();
                    break;
                case 2:
                    message.sessionLabelId = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return SessionLabel;
    })();

    dataplane.BucketedCounter = (function() {

        /**
         * Properties of a BucketedCounter.
         * @memberof dataplane
         * @interface IBucketedCounter
         * @property {Array.<dataplane.BucketedCounter.IBucket>|null} [buckets] BucketedCounter buckets
         * @property {number|null} [total] BucketedCounter total
         */

        /**
         * Constructs a new BucketedCounter.
         * @memberof dataplane
         * @classdesc Represents a BucketedCounter.
         * @implements IBucketedCounter
         * @constructor
         * @param {dataplane.IBucketedCounter=} [properties] Properties to set
         */
        function BucketedCounter(properties) {
            this.buckets = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BucketedCounter buckets.
         * @member {Array.<dataplane.BucketedCounter.IBucket>} buckets
         * @memberof dataplane.BucketedCounter
         * @instance
         */
        BucketedCounter.prototype.buckets = $util.emptyArray;

        /**
         * BucketedCounter total.
         * @member {number} total
         * @memberof dataplane.BucketedCounter
         * @instance
         */
        BucketedCounter.prototype.total = 0;

        /**
         * Creates a new BucketedCounter instance using the specified properties.
         * @function create
         * @memberof dataplane.BucketedCounter
         * @static
         * @param {dataplane.IBucketedCounter=} [properties] Properties to set
         * @returns {dataplane.BucketedCounter} BucketedCounter instance
         */
        BucketedCounter.create = function create(properties) {
            return new BucketedCounter(properties);
        };

        /**
         * Encodes the specified BucketedCounter message. Does not implicitly {@link dataplane.BucketedCounter.verify|verify} messages.
         * @function encode
         * @memberof dataplane.BucketedCounter
         * @static
         * @param {dataplane.IBucketedCounter} message BucketedCounter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BucketedCounter.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.buckets != null && message.buckets.length)
                for (var i = 0; i < message.buckets.length; ++i)
                    $root.dataplane.BucketedCounter.Bucket.encode(message.buckets[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.total != null && Object.hasOwnProperty.call(message, "total"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.total);
            return writer;
        };

        /**
         * Decodes a BucketedCounter message from the specified reader or buffer.
         * @function decode
         * @memberof dataplane.BucketedCounter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dataplane.BucketedCounter} BucketedCounter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BucketedCounter.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dataplane.BucketedCounter();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.buckets && message.buckets.length))
                        message.buckets = [];
                    message.buckets.push($root.dataplane.BucketedCounter.Bucket.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.total = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        BucketedCounter.Bucket = (function() {

            /**
             * Properties of a Bucket.
             * @memberof dataplane.BucketedCounter
             * @interface IBucket
             * @property {number|null} [startTime] Bucket startTime
             * @property {number|null} [value] Bucket value
             */

            /**
             * Constructs a new Bucket.
             * @memberof dataplane.BucketedCounter
             * @classdesc Represents a Bucket.
             * @implements IBucket
             * @constructor
             * @param {dataplane.BucketedCounter.IBucket=} [properties] Properties to set
             */
            function Bucket(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Bucket startTime.
             * @member {number} startTime
             * @memberof dataplane.BucketedCounter.Bucket
             * @instance
             */
            Bucket.prototype.startTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Bucket value.
             * @member {number} value
             * @memberof dataplane.BucketedCounter.Bucket
             * @instance
             */
            Bucket.prototype.value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new Bucket instance using the specified properties.
             * @function create
             * @memberof dataplane.BucketedCounter.Bucket
             * @static
             * @param {dataplane.BucketedCounter.IBucket=} [properties] Properties to set
             * @returns {dataplane.BucketedCounter.Bucket} Bucket instance
             */
            Bucket.create = function create(properties) {
                return new Bucket(properties);
            };

            /**
             * Encodes the specified Bucket message. Does not implicitly {@link dataplane.BucketedCounter.Bucket.verify|verify} messages.
             * @function encode
             * @memberof dataplane.BucketedCounter.Bucket
             * @static
             * @param {dataplane.BucketedCounter.IBucket} message Bucket message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Bucket.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.startTime != null && Object.hasOwnProperty.call(message, "startTime"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.startTime);
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.value);
                return writer;
            };

            /**
             * Decodes a Bucket message from the specified reader or buffer.
             * @function decode
             * @memberof dataplane.BucketedCounter.Bucket
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {dataplane.BucketedCounter.Bucket} Bucket
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Bucket.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dataplane.BucketedCounter.Bucket();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.startTime = reader.int64();
                        break;
                    case 2:
                        message.value = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return Bucket;
        })();

        return BucketedCounter;
    })();

    dataplane.CDF = (function() {

        /**
         * Properties of a CDF.
         * @memberof dataplane
         * @interface ICDF
         * @property {Array.<number>|null} [values] CDF values
         */

        /**
         * Constructs a new CDF.
         * @memberof dataplane
         * @classdesc Represents a CDF.
         * @implements ICDF
         * @constructor
         * @param {dataplane.ICDF=} [properties] Properties to set
         */
        function CDF(properties) {
            this.values = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CDF values.
         * @member {Array.<number>} values
         * @memberof dataplane.CDF
         * @instance
         */
        CDF.prototype.values = $util.emptyArray;

        /**
         * Creates a new CDF instance using the specified properties.
         * @function create
         * @memberof dataplane.CDF
         * @static
         * @param {dataplane.ICDF=} [properties] Properties to set
         * @returns {dataplane.CDF} CDF instance
         */
        CDF.create = function create(properties) {
            return new CDF(properties);
        };

        /**
         * Encodes the specified CDF message. Does not implicitly {@link dataplane.CDF.verify|verify} messages.
         * @function encode
         * @memberof dataplane.CDF
         * @static
         * @param {dataplane.ICDF} message CDF message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDF.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.values != null && message.values.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.values.length; ++i)
                    writer.double(message.values[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Decodes a CDF message from the specified reader or buffer.
         * @function decode
         * @memberof dataplane.CDF
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dataplane.CDF} CDF
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDF.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dataplane.CDF();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.values && message.values.length))
                        message.values = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.values.push(reader.double());
                    } else
                        message.values.push(reader.double());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return CDF;
    })();

    dataplane.Session = (function() {

        /**
         * Properties of a Session.
         * @memberof dataplane
         * @interface ISession
         * @property {string|null} [sessionId] Session sessionId
         * @property {string|null} [appId] Session appId
         * @property {google.protobuf.ITimestamp|null} [oldestEvent] Session oldestEvent
         * @property {google.protobuf.ITimestamp|null} [newestEvent] Session newestEvent
         * @property {google.protobuf.ITimestamp|null} [createdAt] Session createdAt
         * @property {dataplane.IBoundingCircle|null} [circle] Session circle
         * @property {dataplane.ISessionMetadata|null} [metadata] Session metadata
         * @property {Object.<string,dataplane.IBucketedCounter>|null} [counters] Session counters
         * @property {Array.<dataplane.ISessionLabel>|null} [labels] Session labels
         * @property {Object.<string,dataplane.ICDF>|null} [cdfs] Session cdfs
         * @property {string|null} [regionId] Session regionId
         * @property {string|null} [clientSessionGroupId] Session clientSessionGroupId
         * @property {dataplane.ISessionConfig|null} [config] Session config
         * @property {string|null} [journeyId] Session journeyId
         */

        /**
         * Constructs a new Session.
         * @memberof dataplane
         * @classdesc Represents a Session.
         * @implements ISession
         * @constructor
         * @param {dataplane.ISession=} [properties] Properties to set
         */
        function Session(properties) {
            this.counters = {};
            this.labels = [];
            this.cdfs = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Session sessionId.
         * @member {string} sessionId
         * @memberof dataplane.Session
         * @instance
         */
        Session.prototype.sessionId = "";

        /**
         * Session appId.
         * @member {string} appId
         * @memberof dataplane.Session
         * @instance
         */
        Session.prototype.appId = "";

        /**
         * Session oldestEvent.
         * @member {google.protobuf.ITimestamp|null|undefined} oldestEvent
         * @memberof dataplane.Session
         * @instance
         */
        Session.prototype.oldestEvent = null;

        /**
         * Session newestEvent.
         * @member {google.protobuf.ITimestamp|null|undefined} newestEvent
         * @memberof dataplane.Session
         * @instance
         */
        Session.prototype.newestEvent = null;

        /**
         * Session createdAt.
         * @member {google.protobuf.ITimestamp|null|undefined} createdAt
         * @memberof dataplane.Session
         * @instance
         */
        Session.prototype.createdAt = null;

        /**
         * Session circle.
         * @member {dataplane.IBoundingCircle|null|undefined} circle
         * @memberof dataplane.Session
         * @instance
         */
        Session.prototype.circle = null;

        /**
         * Session metadata.
         * @member {dataplane.ISessionMetadata|null|undefined} metadata
         * @memberof dataplane.Session
         * @instance
         */
        Session.prototype.metadata = null;

        /**
         * Session counters.
         * @member {Object.<string,dataplane.IBucketedCounter>} counters
         * @memberof dataplane.Session
         * @instance
         */
        Session.prototype.counters = $util.emptyObject;

        /**
         * Session labels.
         * @member {Array.<dataplane.ISessionLabel>} labels
         * @memberof dataplane.Session
         * @instance
         */
        Session.prototype.labels = $util.emptyArray;

        /**
         * Session cdfs.
         * @member {Object.<string,dataplane.ICDF>} cdfs
         * @memberof dataplane.Session
         * @instance
         */
        Session.prototype.cdfs = $util.emptyObject;

        /**
         * Session regionId.
         * @member {string} regionId
         * @memberof dataplane.Session
         * @instance
         */
        Session.prototype.regionId = "";

        /**
         * Session clientSessionGroupId.
         * @member {string} clientSessionGroupId
         * @memberof dataplane.Session
         * @instance
         */
        Session.prototype.clientSessionGroupId = "";

        /**
         * Session config.
         * @member {dataplane.ISessionConfig|null|undefined} config
         * @memberof dataplane.Session
         * @instance
         */
        Session.prototype.config = null;

        /**
         * Session journeyId.
         * @member {string} journeyId
         * @memberof dataplane.Session
         * @instance
         */
        Session.prototype.journeyId = "";

        /**
         * Creates a new Session instance using the specified properties.
         * @function create
         * @memberof dataplane.Session
         * @static
         * @param {dataplane.ISession=} [properties] Properties to set
         * @returns {dataplane.Session} Session instance
         */
        Session.create = function create(properties) {
            return new Session(properties);
        };

        /**
         * Encodes the specified Session message. Does not implicitly {@link dataplane.Session.verify|verify} messages.
         * @function encode
         * @memberof dataplane.Session
         * @static
         * @param {dataplane.ISession} message Session message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Session.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sessionId != null && Object.hasOwnProperty.call(message, "sessionId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.sessionId);
            if (message.appId != null && Object.hasOwnProperty.call(message, "appId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.appId);
            if (message.oldestEvent != null && Object.hasOwnProperty.call(message, "oldestEvent"))
                $root.google.protobuf.Timestamp.encode(message.oldestEvent, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.newestEvent != null && Object.hasOwnProperty.call(message, "newestEvent"))
                $root.google.protobuf.Timestamp.encode(message.newestEvent, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.circle != null && Object.hasOwnProperty.call(message, "circle"))
                $root.dataplane.BoundingCircle.encode(message.circle, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.metadata != null && Object.hasOwnProperty.call(message, "metadata"))
                $root.dataplane.SessionMetadata.encode(message.metadata, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.counters != null && Object.hasOwnProperty.call(message, "counters"))
                for (var keys = Object.keys(message.counters), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 8, wireType 2 =*/66).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                    $root.dataplane.BucketedCounter.encode(message.counters[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            if (message.labels != null && message.labels.length)
                for (var i = 0; i < message.labels.length; ++i)
                    $root.dataplane.SessionLabel.encode(message.labels[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.cdfs != null && Object.hasOwnProperty.call(message, "cdfs"))
                for (var keys = Object.keys(message.cdfs), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 10, wireType 2 =*/82).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                    $root.dataplane.CDF.encode(message.cdfs[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            if (message.regionId != null && Object.hasOwnProperty.call(message, "regionId"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.regionId);
            if (message.clientSessionGroupId != null && Object.hasOwnProperty.call(message, "clientSessionGroupId"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.clientSessionGroupId);
            if (message.config != null && Object.hasOwnProperty.call(message, "config"))
                $root.dataplane.SessionConfig.encode(message.config, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            if (message.journeyId != null && Object.hasOwnProperty.call(message, "journeyId"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.journeyId);
            return writer;
        };

        /**
         * Decodes a Session message from the specified reader or buffer.
         * @function decode
         * @memberof dataplane.Session
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dataplane.Session} Session
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Session.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dataplane.Session(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sessionId = reader.string();
                    break;
                case 2:
                    message.appId = reader.string();
                    break;
                case 3:
                    message.oldestEvent = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.newestEvent = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.circle = $root.dataplane.BoundingCircle.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.metadata = $root.dataplane.SessionMetadata.decode(reader, reader.uint32());
                    break;
                case 8:
                    if (message.counters === $util.emptyObject)
                        message.counters = {};
                    var end2 = reader.uint32() + reader.pos;
                    key = "";
                    value = null;
                    while (reader.pos < end2) {
                        var tag2 = reader.uint32();
                        switch (tag2 >>> 3) {
                        case 1:
                            key = reader.string();
                            break;
                        case 2:
                            value = $root.dataplane.BucketedCounter.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag2 & 7);
                            break;
                        }
                    }
                    message.counters[key] = value;
                    break;
                case 9:
                    if (!(message.labels && message.labels.length))
                        message.labels = [];
                    message.labels.push($root.dataplane.SessionLabel.decode(reader, reader.uint32()));
                    break;
                case 10:
                    if (message.cdfs === $util.emptyObject)
                        message.cdfs = {};
                    var end2 = reader.uint32() + reader.pos;
                    key = "";
                    value = null;
                    while (reader.pos < end2) {
                        var tag2 = reader.uint32();
                        switch (tag2 >>> 3) {
                        case 1:
                            key = reader.string();
                            break;
                        case 2:
                            value = $root.dataplane.CDF.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag2 & 7);
                            break;
                        }
                    }
                    message.cdfs[key] = value;
                    break;
                case 11:
                    message.regionId = reader.string();
                    break;
                case 12:
                    message.clientSessionGroupId = reader.string();
                    break;
                case 13:
                    message.config = $root.dataplane.SessionConfig.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.journeyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return Session;
    })();

    dataplane.SessionLabelCreateRequest = (function() {

        /**
         * Properties of a SessionLabelCreateRequest.
         * @memberof dataplane
         * @interface ISessionLabelCreateRequest
         * @property {Array.<dataplane.ISessionLabel>|null} [labels] SessionLabelCreateRequest labels
         */

        /**
         * Constructs a new SessionLabelCreateRequest.
         * @memberof dataplane
         * @classdesc Represents a SessionLabelCreateRequest.
         * @implements ISessionLabelCreateRequest
         * @constructor
         * @param {dataplane.ISessionLabelCreateRequest=} [properties] Properties to set
         */
        function SessionLabelCreateRequest(properties) {
            this.labels = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SessionLabelCreateRequest labels.
         * @member {Array.<dataplane.ISessionLabel>} labels
         * @memberof dataplane.SessionLabelCreateRequest
         * @instance
         */
        SessionLabelCreateRequest.prototype.labels = $util.emptyArray;

        /**
         * Creates a new SessionLabelCreateRequest instance using the specified properties.
         * @function create
         * @memberof dataplane.SessionLabelCreateRequest
         * @static
         * @param {dataplane.ISessionLabelCreateRequest=} [properties] Properties to set
         * @returns {dataplane.SessionLabelCreateRequest} SessionLabelCreateRequest instance
         */
        SessionLabelCreateRequest.create = function create(properties) {
            return new SessionLabelCreateRequest(properties);
        };

        /**
         * Encodes the specified SessionLabelCreateRequest message. Does not implicitly {@link dataplane.SessionLabelCreateRequest.verify|verify} messages.
         * @function encode
         * @memberof dataplane.SessionLabelCreateRequest
         * @static
         * @param {dataplane.ISessionLabelCreateRequest} message SessionLabelCreateRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SessionLabelCreateRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.labels != null && message.labels.length)
                for (var i = 0; i < message.labels.length; ++i)
                    $root.dataplane.SessionLabel.encode(message.labels[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a SessionLabelCreateRequest message from the specified reader or buffer.
         * @function decode
         * @memberof dataplane.SessionLabelCreateRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dataplane.SessionLabelCreateRequest} SessionLabelCreateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SessionLabelCreateRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dataplane.SessionLabelCreateRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.labels && message.labels.length))
                        message.labels = [];
                    message.labels.push($root.dataplane.SessionLabel.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return SessionLabelCreateRequest;
    })();

    dataplane.SessionLabelCreateResponse = (function() {

        /**
         * Properties of a SessionLabelCreateResponse.
         * @memberof dataplane
         * @interface ISessionLabelCreateResponse
         */

        /**
         * Constructs a new SessionLabelCreateResponse.
         * @memberof dataplane
         * @classdesc Represents a SessionLabelCreateResponse.
         * @implements ISessionLabelCreateResponse
         * @constructor
         * @param {dataplane.ISessionLabelCreateResponse=} [properties] Properties to set
         */
        function SessionLabelCreateResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new SessionLabelCreateResponse instance using the specified properties.
         * @function create
         * @memberof dataplane.SessionLabelCreateResponse
         * @static
         * @param {dataplane.ISessionLabelCreateResponse=} [properties] Properties to set
         * @returns {dataplane.SessionLabelCreateResponse} SessionLabelCreateResponse instance
         */
        SessionLabelCreateResponse.create = function create(properties) {
            return new SessionLabelCreateResponse(properties);
        };

        /**
         * Encodes the specified SessionLabelCreateResponse message. Does not implicitly {@link dataplane.SessionLabelCreateResponse.verify|verify} messages.
         * @function encode
         * @memberof dataplane.SessionLabelCreateResponse
         * @static
         * @param {dataplane.ISessionLabelCreateResponse} message SessionLabelCreateResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SessionLabelCreateResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Decodes a SessionLabelCreateResponse message from the specified reader or buffer.
         * @function decode
         * @memberof dataplane.SessionLabelCreateResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dataplane.SessionLabelCreateResponse} SessionLabelCreateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SessionLabelCreateResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dataplane.SessionLabelCreateResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return SessionLabelCreateResponse;
    })();

    dataplane.NetworkPacketCaptureClientResponse = (function() {

        /**
         * Properties of a NetworkPacketCaptureClientResponse.
         * @memberof dataplane
         * @interface INetworkPacketCaptureClientResponse
         * @property {string|null} [sessionId] NetworkPacketCaptureClientResponse sessionId
         */

        /**
         * Constructs a new NetworkPacketCaptureClientResponse.
         * @memberof dataplane
         * @classdesc Represents a NetworkPacketCaptureClientResponse.
         * @implements INetworkPacketCaptureClientResponse
         * @constructor
         * @param {dataplane.INetworkPacketCaptureClientResponse=} [properties] Properties to set
         */
        function NetworkPacketCaptureClientResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NetworkPacketCaptureClientResponse sessionId.
         * @member {string} sessionId
         * @memberof dataplane.NetworkPacketCaptureClientResponse
         * @instance
         */
        NetworkPacketCaptureClientResponse.prototype.sessionId = "";

        /**
         * Creates a new NetworkPacketCaptureClientResponse instance using the specified properties.
         * @function create
         * @memberof dataplane.NetworkPacketCaptureClientResponse
         * @static
         * @param {dataplane.INetworkPacketCaptureClientResponse=} [properties] Properties to set
         * @returns {dataplane.NetworkPacketCaptureClientResponse} NetworkPacketCaptureClientResponse instance
         */
        NetworkPacketCaptureClientResponse.create = function create(properties) {
            return new NetworkPacketCaptureClientResponse(properties);
        };

        /**
         * Encodes the specified NetworkPacketCaptureClientResponse message. Does not implicitly {@link dataplane.NetworkPacketCaptureClientResponse.verify|verify} messages.
         * @function encode
         * @memberof dataplane.NetworkPacketCaptureClientResponse
         * @static
         * @param {dataplane.INetworkPacketCaptureClientResponse} message NetworkPacketCaptureClientResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NetworkPacketCaptureClientResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sessionId != null && Object.hasOwnProperty.call(message, "sessionId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.sessionId);
            return writer;
        };

        /**
         * Decodes a NetworkPacketCaptureClientResponse message from the specified reader or buffer.
         * @function decode
         * @memberof dataplane.NetworkPacketCaptureClientResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dataplane.NetworkPacketCaptureClientResponse} NetworkPacketCaptureClientResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NetworkPacketCaptureClientResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dataplane.NetworkPacketCaptureClientResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sessionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return NetworkPacketCaptureClientResponse;
    })();

    dataplane.BundleCreateRequest = (function() {

        /**
         * Properties of a BundleCreateRequest.
         * @memberof dataplane
         * @interface IBundleCreateRequest
         * @property {string|null} [sessionId] BundleCreateRequest sessionId
         * @property {Array.<bundle.IBundle>|null} [bundles] BundleCreateRequest bundles
         * @property {string|null} [installId] BundleCreateRequest installId
         * @property {string|null} [clientUserId] BundleCreateRequest clientUserId
         */

        /**
         * Constructs a new BundleCreateRequest.
         * @memberof dataplane
         * @classdesc Represents a BundleCreateRequest.
         * @implements IBundleCreateRequest
         * @constructor
         * @param {dataplane.IBundleCreateRequest=} [properties] Properties to set
         */
        function BundleCreateRequest(properties) {
            this.bundles = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BundleCreateRequest sessionId.
         * @member {string} sessionId
         * @memberof dataplane.BundleCreateRequest
         * @instance
         */
        BundleCreateRequest.prototype.sessionId = "";

        /**
         * BundleCreateRequest bundles.
         * @member {Array.<bundle.IBundle>} bundles
         * @memberof dataplane.BundleCreateRequest
         * @instance
         */
        BundleCreateRequest.prototype.bundles = $util.emptyArray;

        /**
         * BundleCreateRequest installId.
         * @member {string} installId
         * @memberof dataplane.BundleCreateRequest
         * @instance
         */
        BundleCreateRequest.prototype.installId = "";

        /**
         * BundleCreateRequest clientUserId.
         * @member {string} clientUserId
         * @memberof dataplane.BundleCreateRequest
         * @instance
         */
        BundleCreateRequest.prototype.clientUserId = "";

        /**
         * Creates a new BundleCreateRequest instance using the specified properties.
         * @function create
         * @memberof dataplane.BundleCreateRequest
         * @static
         * @param {dataplane.IBundleCreateRequest=} [properties] Properties to set
         * @returns {dataplane.BundleCreateRequest} BundleCreateRequest instance
         */
        BundleCreateRequest.create = function create(properties) {
            return new BundleCreateRequest(properties);
        };

        /**
         * Encodes the specified BundleCreateRequest message. Does not implicitly {@link dataplane.BundleCreateRequest.verify|verify} messages.
         * @function encode
         * @memberof dataplane.BundleCreateRequest
         * @static
         * @param {dataplane.IBundleCreateRequest} message BundleCreateRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BundleCreateRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sessionId != null && Object.hasOwnProperty.call(message, "sessionId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.sessionId);
            if (message.bundles != null && message.bundles.length)
                for (var i = 0; i < message.bundles.length; ++i)
                    $root.bundle.Bundle.encode(message.bundles[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.installId != null && Object.hasOwnProperty.call(message, "installId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.installId);
            if (message.clientUserId != null && Object.hasOwnProperty.call(message, "clientUserId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.clientUserId);
            return writer;
        };

        /**
         * Decodes a BundleCreateRequest message from the specified reader or buffer.
         * @function decode
         * @memberof dataplane.BundleCreateRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dataplane.BundleCreateRequest} BundleCreateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BundleCreateRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dataplane.BundleCreateRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sessionId = reader.string();
                    break;
                case 2:
                    if (!(message.bundles && message.bundles.length))
                        message.bundles = [];
                    message.bundles.push($root.bundle.Bundle.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.installId = reader.string();
                    break;
                case 4:
                    message.clientUserId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return BundleCreateRequest;
    })();

    dataplane.BundleCreateResponse = (function() {

        /**
         * Properties of a BundleCreateResponse.
         * @memberof dataplane
         * @interface IBundleCreateResponse
         * @property {number|null} [errorCount] BundleCreateResponse errorCount
         * @property {number|null} [successCount] BundleCreateResponse successCount
         */

        /**
         * Constructs a new BundleCreateResponse.
         * @memberof dataplane
         * @classdesc Represents a BundleCreateResponse.
         * @implements IBundleCreateResponse
         * @constructor
         * @param {dataplane.IBundleCreateResponse=} [properties] Properties to set
         */
        function BundleCreateResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BundleCreateResponse errorCount.
         * @member {number} errorCount
         * @memberof dataplane.BundleCreateResponse
         * @instance
         */
        BundleCreateResponse.prototype.errorCount = 0;

        /**
         * BundleCreateResponse successCount.
         * @member {number} successCount
         * @memberof dataplane.BundleCreateResponse
         * @instance
         */
        BundleCreateResponse.prototype.successCount = 0;

        /**
         * Creates a new BundleCreateResponse instance using the specified properties.
         * @function create
         * @memberof dataplane.BundleCreateResponse
         * @static
         * @param {dataplane.IBundleCreateResponse=} [properties] Properties to set
         * @returns {dataplane.BundleCreateResponse} BundleCreateResponse instance
         */
        BundleCreateResponse.create = function create(properties) {
            return new BundleCreateResponse(properties);
        };

        /**
         * Encodes the specified BundleCreateResponse message. Does not implicitly {@link dataplane.BundleCreateResponse.verify|verify} messages.
         * @function encode
         * @memberof dataplane.BundleCreateResponse
         * @static
         * @param {dataplane.IBundleCreateResponse} message BundleCreateResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BundleCreateResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errorCount != null && Object.hasOwnProperty.call(message, "errorCount"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errorCount);
            if (message.successCount != null && Object.hasOwnProperty.call(message, "successCount"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.successCount);
            return writer;
        };

        /**
         * Decodes a BundleCreateResponse message from the specified reader or buffer.
         * @function decode
         * @memberof dataplane.BundleCreateResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dataplane.BundleCreateResponse} BundleCreateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BundleCreateResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dataplane.BundleCreateResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.errorCount = reader.int32();
                    break;
                case 2:
                    message.successCount = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return BundleCreateResponse;
    })();

    dataplane.LabelWithStats = (function() {

        /**
         * Properties of a LabelWithStats.
         * @memberof dataplane
         * @interface ILabelWithStats
         * @property {string|null} [name] LabelWithStats name
         * @property {number|null} [sessionsCount] LabelWithStats sessionsCount
         */

        /**
         * Constructs a new LabelWithStats.
         * @memberof dataplane
         * @classdesc Represents a LabelWithStats.
         * @implements ILabelWithStats
         * @constructor
         * @param {dataplane.ILabelWithStats=} [properties] Properties to set
         */
        function LabelWithStats(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LabelWithStats name.
         * @member {string} name
         * @memberof dataplane.LabelWithStats
         * @instance
         */
        LabelWithStats.prototype.name = "";

        /**
         * LabelWithStats sessionsCount.
         * @member {number} sessionsCount
         * @memberof dataplane.LabelWithStats
         * @instance
         */
        LabelWithStats.prototype.sessionsCount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new LabelWithStats instance using the specified properties.
         * @function create
         * @memberof dataplane.LabelWithStats
         * @static
         * @param {dataplane.ILabelWithStats=} [properties] Properties to set
         * @returns {dataplane.LabelWithStats} LabelWithStats instance
         */
        LabelWithStats.create = function create(properties) {
            return new LabelWithStats(properties);
        };

        /**
         * Encodes the specified LabelWithStats message. Does not implicitly {@link dataplane.LabelWithStats.verify|verify} messages.
         * @function encode
         * @memberof dataplane.LabelWithStats
         * @static
         * @param {dataplane.ILabelWithStats} message LabelWithStats message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LabelWithStats.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.sessionsCount != null && Object.hasOwnProperty.call(message, "sessionsCount"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.sessionsCount);
            return writer;
        };

        /**
         * Decodes a LabelWithStats message from the specified reader or buffer.
         * @function decode
         * @memberof dataplane.LabelWithStats
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dataplane.LabelWithStats} LabelWithStats
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LabelWithStats.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dataplane.LabelWithStats();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.sessionsCount = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return LabelWithStats;
    })();

    dataplane.App = (function() {

        /**
         * Properties of an App.
         * @memberof dataplane
         * @interface IApp
         * @property {string|null} [appId] App appId
         * @property {string|null} [projectId] App projectId
         * @property {google.protobuf.ITimestamp|null} [createdAt] App createdAt
         */

        /**
         * Constructs a new App.
         * @memberof dataplane
         * @classdesc Represents an App.
         * @implements IApp
         * @constructor
         * @param {dataplane.IApp=} [properties] Properties to set
         */
        function App(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * App appId.
         * @member {string} appId
         * @memberof dataplane.App
         * @instance
         */
        App.prototype.appId = "";

        /**
         * App projectId.
         * @member {string} projectId
         * @memberof dataplane.App
         * @instance
         */
        App.prototype.projectId = "";

        /**
         * App createdAt.
         * @member {google.protobuf.ITimestamp|null|undefined} createdAt
         * @memberof dataplane.App
         * @instance
         */
        App.prototype.createdAt = null;

        /**
         * Creates a new App instance using the specified properties.
         * @function create
         * @memberof dataplane.App
         * @static
         * @param {dataplane.IApp=} [properties] Properties to set
         * @returns {dataplane.App} App instance
         */
        App.create = function create(properties) {
            return new App(properties);
        };

        /**
         * Encodes the specified App message. Does not implicitly {@link dataplane.App.verify|verify} messages.
         * @function encode
         * @memberof dataplane.App
         * @static
         * @param {dataplane.IApp} message App message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        App.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appId != null && Object.hasOwnProperty.call(message, "appId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.appId);
            if (message.projectId != null && Object.hasOwnProperty.call(message, "projectId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.projectId);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes an App message from the specified reader or buffer.
         * @function decode
         * @memberof dataplane.App
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dataplane.App} App
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        App.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dataplane.App();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.appId = reader.string();
                    break;
                case 2:
                    message.projectId = reader.string();
                    break;
                case 3:
                    message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return App;
    })();

    dataplane.AppStats = (function() {

        /**
         * Properties of an AppStats.
         * @memberof dataplane
         * @interface IAppStats
         * @property {string|null} [appId] AppStats appId
         * @property {Object.<string,number>|null} [recordingProfileStats] AppStats recordingProfileStats
         */

        /**
         * Constructs a new AppStats.
         * @memberof dataplane
         * @classdesc Represents an AppStats.
         * @implements IAppStats
         * @constructor
         * @param {dataplane.IAppStats=} [properties] Properties to set
         */
        function AppStats(properties) {
            this.recordingProfileStats = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AppStats appId.
         * @member {string} appId
         * @memberof dataplane.AppStats
         * @instance
         */
        AppStats.prototype.appId = "";

        /**
         * AppStats recordingProfileStats.
         * @member {Object.<string,number>} recordingProfileStats
         * @memberof dataplane.AppStats
         * @instance
         */
        AppStats.prototype.recordingProfileStats = $util.emptyObject;

        /**
         * Creates a new AppStats instance using the specified properties.
         * @function create
         * @memberof dataplane.AppStats
         * @static
         * @param {dataplane.IAppStats=} [properties] Properties to set
         * @returns {dataplane.AppStats} AppStats instance
         */
        AppStats.create = function create(properties) {
            return new AppStats(properties);
        };

        /**
         * Encodes the specified AppStats message. Does not implicitly {@link dataplane.AppStats.verify|verify} messages.
         * @function encode
         * @memberof dataplane.AppStats
         * @static
         * @param {dataplane.IAppStats} message AppStats message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AppStats.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appId != null && Object.hasOwnProperty.call(message, "appId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.appId);
            if (message.recordingProfileStats != null && Object.hasOwnProperty.call(message, "recordingProfileStats"))
                for (var keys = Object.keys(message.recordingProfileStats), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 0 =*/16).int64(message.recordingProfileStats[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Decodes an AppStats message from the specified reader or buffer.
         * @function decode
         * @memberof dataplane.AppStats
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dataplane.AppStats} AppStats
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AppStats.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dataplane.AppStats(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.appId = reader.string();
                    break;
                case 2:
                    if (message.recordingProfileStats === $util.emptyObject)
                        message.recordingProfileStats = {};
                    var end2 = reader.uint32() + reader.pos;
                    key = "";
                    value = 0;
                    while (reader.pos < end2) {
                        var tag2 = reader.uint32();
                        switch (tag2 >>> 3) {
                        case 1:
                            key = reader.string();
                            break;
                        case 2:
                            value = reader.int64();
                            break;
                        default:
                            reader.skipType(tag2 & 7);
                            break;
                        }
                    }
                    message.recordingProfileStats[key] = value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return AppStats;
    })();

    dataplane.Chunk = (function() {

        /**
         * Properties of a Chunk.
         * @memberof dataplane
         * @interface IChunk
         * @property {string|null} [chunkId] Chunk chunkId
         * @property {string|null} [md5] Chunk md5
         * @property {google.protobuf.ITimestamp|null} [createdAt] Chunk createdAt
         */

        /**
         * Constructs a new Chunk.
         * @memberof dataplane
         * @classdesc Represents a Chunk.
         * @implements IChunk
         * @constructor
         * @param {dataplane.IChunk=} [properties] Properties to set
         */
        function Chunk(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Chunk chunkId.
         * @member {string} chunkId
         * @memberof dataplane.Chunk
         * @instance
         */
        Chunk.prototype.chunkId = "";

        /**
         * Chunk md5.
         * @member {string} md5
         * @memberof dataplane.Chunk
         * @instance
         */
        Chunk.prototype.md5 = "";

        /**
         * Chunk createdAt.
         * @member {google.protobuf.ITimestamp|null|undefined} createdAt
         * @memberof dataplane.Chunk
         * @instance
         */
        Chunk.prototype.createdAt = null;

        /**
         * Creates a new Chunk instance using the specified properties.
         * @function create
         * @memberof dataplane.Chunk
         * @static
         * @param {dataplane.IChunk=} [properties] Properties to set
         * @returns {dataplane.Chunk} Chunk instance
         */
        Chunk.create = function create(properties) {
            return new Chunk(properties);
        };

        /**
         * Encodes the specified Chunk message. Does not implicitly {@link dataplane.Chunk.verify|verify} messages.
         * @function encode
         * @memberof dataplane.Chunk
         * @static
         * @param {dataplane.IChunk} message Chunk message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Chunk.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.chunkId != null && Object.hasOwnProperty.call(message, "chunkId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.chunkId);
            if (message.md5 != null && Object.hasOwnProperty.call(message, "md5"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.md5);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a Chunk message from the specified reader or buffer.
         * @function decode
         * @memberof dataplane.Chunk
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dataplane.Chunk} Chunk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Chunk.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dataplane.Chunk();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.chunkId = reader.string();
                    break;
                case 2:
                    message.md5 = reader.string();
                    break;
                case 3:
                    message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return Chunk;
    })();

    dataplane.Card = (function() {

        /**
         * Properties of a Card.
         * @memberof dataplane
         * @interface ICard
         * @property {string|null} [sessionId] Card sessionId
         * @property {string|null} [cardId] Card cardId
         * @property {string|null} [title] Card title
         * @property {string|null} [description] Card description
         * @property {string|null} [sourceType] Card sourceType
         * @property {string|null} [sourceId] Card sourceId
         * @property {string|null} [payload] Card payload
         * @property {google.protobuf.ITimestamp|null} [createdAt] Card createdAt
         */

        /**
         * Constructs a new Card.
         * @memberof dataplane
         * @classdesc Represents a Card.
         * @implements ICard
         * @constructor
         * @param {dataplane.ICard=} [properties] Properties to set
         */
        function Card(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Card sessionId.
         * @member {string} sessionId
         * @memberof dataplane.Card
         * @instance
         */
        Card.prototype.sessionId = "";

        /**
         * Card cardId.
         * @member {string} cardId
         * @memberof dataplane.Card
         * @instance
         */
        Card.prototype.cardId = "";

        /**
         * Card title.
         * @member {string} title
         * @memberof dataplane.Card
         * @instance
         */
        Card.prototype.title = "";

        /**
         * Card description.
         * @member {string} description
         * @memberof dataplane.Card
         * @instance
         */
        Card.prototype.description = "";

        /**
         * Card sourceType.
         * @member {string} sourceType
         * @memberof dataplane.Card
         * @instance
         */
        Card.prototype.sourceType = "";

        /**
         * Card sourceId.
         * @member {string} sourceId
         * @memberof dataplane.Card
         * @instance
         */
        Card.prototype.sourceId = "";

        /**
         * Card payload.
         * @member {string} payload
         * @memberof dataplane.Card
         * @instance
         */
        Card.prototype.payload = "";

        /**
         * Card createdAt.
         * @member {google.protobuf.ITimestamp|null|undefined} createdAt
         * @memberof dataplane.Card
         * @instance
         */
        Card.prototype.createdAt = null;

        /**
         * Creates a new Card instance using the specified properties.
         * @function create
         * @memberof dataplane.Card
         * @static
         * @param {dataplane.ICard=} [properties] Properties to set
         * @returns {dataplane.Card} Card instance
         */
        Card.create = function create(properties) {
            return new Card(properties);
        };

        /**
         * Encodes the specified Card message. Does not implicitly {@link dataplane.Card.verify|verify} messages.
         * @function encode
         * @memberof dataplane.Card
         * @static
         * @param {dataplane.ICard} message Card message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Card.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sessionId != null && Object.hasOwnProperty.call(message, "sessionId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.sessionId);
            if (message.cardId != null && Object.hasOwnProperty.call(message, "cardId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.cardId);
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.title);
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.description);
            if (message.sourceType != null && Object.hasOwnProperty.call(message, "sourceType"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.sourceType);
            if (message.sourceId != null && Object.hasOwnProperty.call(message, "sourceId"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.sourceId);
            if (message.payload != null && Object.hasOwnProperty.call(message, "payload"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.payload);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a Card message from the specified reader or buffer.
         * @function decode
         * @memberof dataplane.Card
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dataplane.Card} Card
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Card.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dataplane.Card();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sessionId = reader.string();
                    break;
                case 2:
                    message.cardId = reader.string();
                    break;
                case 3:
                    message.title = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    message.sourceType = reader.string();
                    break;
                case 6:
                    message.sourceId = reader.string();
                    break;
                case 7:
                    message.payload = reader.string();
                    break;
                case 8:
                    message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return Card;
    })();

    /**
     * WebhookEventTypes enum.
     * @name dataplane.WebhookEventTypes
     * @enum {number}
     * @property {number} UNKNOWN=0 UNKNOWN value
     * @property {number} SESSION_CREATED=1 SESSION_CREATED value
     * @property {number} BUNDLE_RECEIVED=2 BUNDLE_RECEIVED value
     * @property {number} CHUNK_PERSISTED=3 CHUNK_PERSISTED value
     * @property {number} SESSION_INACTIVE=4 SESSION_INACTIVE value
     */
    dataplane.WebhookEventTypes = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UNKNOWN"] = 0;
        values[valuesById[1] = "SESSION_CREATED"] = 1;
        values[valuesById[2] = "BUNDLE_RECEIVED"] = 2;
        values[valuesById[3] = "CHUNK_PERSISTED"] = 3;
        values[valuesById[4] = "SESSION_INACTIVE"] = 4;
        return values;
    })();

    dataplane.WebhookPayload = (function() {

        /**
         * Properties of a WebhookPayload.
         * @memberof dataplane
         * @interface IWebhookPayload
         * @property {string|null} [projectId] WebhookPayload projectId
         * @property {string|null} [appId] WebhookPayload appId
         * @property {string|null} [sessionId] WebhookPayload sessionId
         * @property {dataplane.WebhookEventTypes|null} [eventType] WebhookPayload eventType
         * @property {bundle.ISealedBundle|null} [bundle] WebhookPayload bundle
         * @property {string|null} [clientSessionGroupId] WebhookPayload clientSessionGroupId
         * @property {Array.<string>|null} [sessionLabels] WebhookPayload sessionLabels
         * @property {string|null} [journeyId] WebhookPayload journeyId
         */

        /**
         * Constructs a new WebhookPayload.
         * @memberof dataplane
         * @classdesc Represents a WebhookPayload.
         * @implements IWebhookPayload
         * @constructor
         * @param {dataplane.IWebhookPayload=} [properties] Properties to set
         */
        function WebhookPayload(properties) {
            this.sessionLabels = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WebhookPayload projectId.
         * @member {string} projectId
         * @memberof dataplane.WebhookPayload
         * @instance
         */
        WebhookPayload.prototype.projectId = "";

        /**
         * WebhookPayload appId.
         * @member {string} appId
         * @memberof dataplane.WebhookPayload
         * @instance
         */
        WebhookPayload.prototype.appId = "";

        /**
         * WebhookPayload sessionId.
         * @member {string} sessionId
         * @memberof dataplane.WebhookPayload
         * @instance
         */
        WebhookPayload.prototype.sessionId = "";

        /**
         * WebhookPayload eventType.
         * @member {dataplane.WebhookEventTypes} eventType
         * @memberof dataplane.WebhookPayload
         * @instance
         */
        WebhookPayload.prototype.eventType = 0;

        /**
         * WebhookPayload bundle.
         * @member {bundle.ISealedBundle|null|undefined} bundle
         * @memberof dataplane.WebhookPayload
         * @instance
         */
        WebhookPayload.prototype.bundle = null;

        /**
         * WebhookPayload clientSessionGroupId.
         * @member {string} clientSessionGroupId
         * @memberof dataplane.WebhookPayload
         * @instance
         */
        WebhookPayload.prototype.clientSessionGroupId = "";

        /**
         * WebhookPayload sessionLabels.
         * @member {Array.<string>} sessionLabels
         * @memberof dataplane.WebhookPayload
         * @instance
         */
        WebhookPayload.prototype.sessionLabels = $util.emptyArray;

        /**
         * WebhookPayload journeyId.
         * @member {string} journeyId
         * @memberof dataplane.WebhookPayload
         * @instance
         */
        WebhookPayload.prototype.journeyId = "";

        /**
         * Creates a new WebhookPayload instance using the specified properties.
         * @function create
         * @memberof dataplane.WebhookPayload
         * @static
         * @param {dataplane.IWebhookPayload=} [properties] Properties to set
         * @returns {dataplane.WebhookPayload} WebhookPayload instance
         */
        WebhookPayload.create = function create(properties) {
            return new WebhookPayload(properties);
        };

        /**
         * Encodes the specified WebhookPayload message. Does not implicitly {@link dataplane.WebhookPayload.verify|verify} messages.
         * @function encode
         * @memberof dataplane.WebhookPayload
         * @static
         * @param {dataplane.IWebhookPayload} message WebhookPayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebhookPayload.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.projectId != null && Object.hasOwnProperty.call(message, "projectId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.projectId);
            if (message.appId != null && Object.hasOwnProperty.call(message, "appId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.appId);
            if (message.sessionId != null && Object.hasOwnProperty.call(message, "sessionId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.sessionId);
            if (message.eventType != null && Object.hasOwnProperty.call(message, "eventType"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.eventType);
            if (message.bundle != null && Object.hasOwnProperty.call(message, "bundle"))
                $root.bundle.SealedBundle.encode(message.bundle, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.clientSessionGroupId != null && Object.hasOwnProperty.call(message, "clientSessionGroupId"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.clientSessionGroupId);
            if (message.sessionLabels != null && message.sessionLabels.length)
                for (var i = 0; i < message.sessionLabels.length; ++i)
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.sessionLabels[i]);
            if (message.journeyId != null && Object.hasOwnProperty.call(message, "journeyId"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.journeyId);
            return writer;
        };

        /**
         * Decodes a WebhookPayload message from the specified reader or buffer.
         * @function decode
         * @memberof dataplane.WebhookPayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dataplane.WebhookPayload} WebhookPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebhookPayload.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dataplane.WebhookPayload();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
                    break;
                case 2:
                    message.appId = reader.string();
                    break;
                case 3:
                    message.sessionId = reader.string();
                    break;
                case 4:
                    message.eventType = reader.int32();
                    break;
                case 5:
                    message.bundle = $root.bundle.SealedBundle.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.clientSessionGroupId = reader.string();
                    break;
                case 7:
                    if (!(message.sessionLabels && message.sessionLabels.length))
                        message.sessionLabels = [];
                    message.sessionLabels.push(reader.string());
                    break;
                case 8:
                    message.journeyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return WebhookPayload;
    })();

    dataplane.Journey = (function() {

        /**
         * Properties of a Journey.
         * @memberof dataplane
         * @interface IJourney
         * @property {string|null} [journeyId] Journey journeyId
         * @property {string|null} [appId] Journey appId
         * @property {google.protobuf.ITimestamp|null} [oldestEvent] Journey oldestEvent
         * @property {google.protobuf.ITimestamp|null} [newestEvent] Journey newestEvent
         * @property {google.protobuf.ITimestamp|null} [createdAt] Journey createdAt
         * @property {number|null} [sessionCount] Journey sessionCount
         * @property {common.DevicePlatform|null} [primaryPlatform] Journey primaryPlatform
         * @property {string|null} [primaryRegionId] Journey primaryRegionId
         */

        /**
         * Constructs a new Journey.
         * @memberof dataplane
         * @classdesc Represents a Journey.
         * @implements IJourney
         * @constructor
         * @param {dataplane.IJourney=} [properties] Properties to set
         */
        function Journey(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Journey journeyId.
         * @member {string} journeyId
         * @memberof dataplane.Journey
         * @instance
         */
        Journey.prototype.journeyId = "";

        /**
         * Journey appId.
         * @member {string} appId
         * @memberof dataplane.Journey
         * @instance
         */
        Journey.prototype.appId = "";

        /**
         * Journey oldestEvent.
         * @member {google.protobuf.ITimestamp|null|undefined} oldestEvent
         * @memberof dataplane.Journey
         * @instance
         */
        Journey.prototype.oldestEvent = null;

        /**
         * Journey newestEvent.
         * @member {google.protobuf.ITimestamp|null|undefined} newestEvent
         * @memberof dataplane.Journey
         * @instance
         */
        Journey.prototype.newestEvent = null;

        /**
         * Journey createdAt.
         * @member {google.protobuf.ITimestamp|null|undefined} createdAt
         * @memberof dataplane.Journey
         * @instance
         */
        Journey.prototype.createdAt = null;

        /**
         * Journey sessionCount.
         * @member {number} sessionCount
         * @memberof dataplane.Journey
         * @instance
         */
        Journey.prototype.sessionCount = 0;

        /**
         * Journey primaryPlatform.
         * @member {common.DevicePlatform} primaryPlatform
         * @memberof dataplane.Journey
         * @instance
         */
        Journey.prototype.primaryPlatform = 0;

        /**
         * Journey primaryRegionId.
         * @member {string} primaryRegionId
         * @memberof dataplane.Journey
         * @instance
         */
        Journey.prototype.primaryRegionId = "";

        /**
         * Creates a new Journey instance using the specified properties.
         * @function create
         * @memberof dataplane.Journey
         * @static
         * @param {dataplane.IJourney=} [properties] Properties to set
         * @returns {dataplane.Journey} Journey instance
         */
        Journey.create = function create(properties) {
            return new Journey(properties);
        };

        /**
         * Encodes the specified Journey message. Does not implicitly {@link dataplane.Journey.verify|verify} messages.
         * @function encode
         * @memberof dataplane.Journey
         * @static
         * @param {dataplane.IJourney} message Journey message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Journey.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.journeyId != null && Object.hasOwnProperty.call(message, "journeyId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.journeyId);
            if (message.appId != null && Object.hasOwnProperty.call(message, "appId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.appId);
            if (message.oldestEvent != null && Object.hasOwnProperty.call(message, "oldestEvent"))
                $root.google.protobuf.Timestamp.encode(message.oldestEvent, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.newestEvent != null && Object.hasOwnProperty.call(message, "newestEvent"))
                $root.google.protobuf.Timestamp.encode(message.newestEvent, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.sessionCount != null && Object.hasOwnProperty.call(message, "sessionCount"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.sessionCount);
            if (message.primaryPlatform != null && Object.hasOwnProperty.call(message, "primaryPlatform"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.primaryPlatform);
            if (message.primaryRegionId != null && Object.hasOwnProperty.call(message, "primaryRegionId"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.primaryRegionId);
            return writer;
        };

        /**
         * Decodes a Journey message from the specified reader or buffer.
         * @function decode
         * @memberof dataplane.Journey
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dataplane.Journey} Journey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Journey.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dataplane.Journey();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.journeyId = reader.string();
                    break;
                case 2:
                    message.appId = reader.string();
                    break;
                case 3:
                    message.oldestEvent = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.newestEvent = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.sessionCount = reader.int32();
                    break;
                case 7:
                    message.primaryPlatform = reader.int32();
                    break;
                case 8:
                    message.primaryRegionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return Journey;
    })();

    dataplane.SessionListResponse = (function() {

        /**
         * Properties of a SessionListResponse.
         * @memberof dataplane
         * @interface ISessionListResponse
         * @property {Array.<dataplane.ISession>|null} [sessions] SessionListResponse sessions
         * @property {pagination.IPaginationResponse|null} [pagination] SessionListResponse pagination
         */

        /**
         * Constructs a new SessionListResponse.
         * @memberof dataplane
         * @classdesc Represents a SessionListResponse.
         * @implements ISessionListResponse
         * @constructor
         * @param {dataplane.ISessionListResponse=} [properties] Properties to set
         */
        function SessionListResponse(properties) {
            this.sessions = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SessionListResponse sessions.
         * @member {Array.<dataplane.ISession>} sessions
         * @memberof dataplane.SessionListResponse
         * @instance
         */
        SessionListResponse.prototype.sessions = $util.emptyArray;

        /**
         * SessionListResponse pagination.
         * @member {pagination.IPaginationResponse|null|undefined} pagination
         * @memberof dataplane.SessionListResponse
         * @instance
         */
        SessionListResponse.prototype.pagination = null;

        /**
         * Creates a new SessionListResponse instance using the specified properties.
         * @function create
         * @memberof dataplane.SessionListResponse
         * @static
         * @param {dataplane.ISessionListResponse=} [properties] Properties to set
         * @returns {dataplane.SessionListResponse} SessionListResponse instance
         */
        SessionListResponse.create = function create(properties) {
            return new SessionListResponse(properties);
        };

        /**
         * Encodes the specified SessionListResponse message. Does not implicitly {@link dataplane.SessionListResponse.verify|verify} messages.
         * @function encode
         * @memberof dataplane.SessionListResponse
         * @static
         * @param {dataplane.ISessionListResponse} message SessionListResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SessionListResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sessions != null && message.sessions.length)
                for (var i = 0; i < message.sessions.length; ++i)
                    $root.dataplane.Session.encode(message.sessions[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.pagination != null && Object.hasOwnProperty.call(message, "pagination"))
                $root.pagination.PaginationResponse.encode(message.pagination, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a SessionListResponse message from the specified reader or buffer.
         * @function decode
         * @memberof dataplane.SessionListResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dataplane.SessionListResponse} SessionListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SessionListResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dataplane.SessionListResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    if (!(message.sessions && message.sessions.length))
                        message.sessions = [];
                    message.sessions.push($root.dataplane.Session.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.pagination = $root.pagination.PaginationResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return SessionListResponse;
    })();

    dataplane.SessionDeleteResponse = (function() {

        /**
         * Properties of a SessionDeleteResponse.
         * @memberof dataplane
         * @interface ISessionDeleteResponse
         * @property {string|null} [sessionId] SessionDeleteResponse sessionId
         */

        /**
         * Constructs a new SessionDeleteResponse.
         * @memberof dataplane
         * @classdesc Represents a SessionDeleteResponse.
         * @implements ISessionDeleteResponse
         * @constructor
         * @param {dataplane.ISessionDeleteResponse=} [properties] Properties to set
         */
        function SessionDeleteResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SessionDeleteResponse sessionId.
         * @member {string} sessionId
         * @memberof dataplane.SessionDeleteResponse
         * @instance
         */
        SessionDeleteResponse.prototype.sessionId = "";

        /**
         * Creates a new SessionDeleteResponse instance using the specified properties.
         * @function create
         * @memberof dataplane.SessionDeleteResponse
         * @static
         * @param {dataplane.ISessionDeleteResponse=} [properties] Properties to set
         * @returns {dataplane.SessionDeleteResponse} SessionDeleteResponse instance
         */
        SessionDeleteResponse.create = function create(properties) {
            return new SessionDeleteResponse(properties);
        };

        /**
         * Encodes the specified SessionDeleteResponse message. Does not implicitly {@link dataplane.SessionDeleteResponse.verify|verify} messages.
         * @function encode
         * @memberof dataplane.SessionDeleteResponse
         * @static
         * @param {dataplane.ISessionDeleteResponse} message SessionDeleteResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SessionDeleteResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sessionId != null && Object.hasOwnProperty.call(message, "sessionId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.sessionId);
            return writer;
        };

        /**
         * Decodes a SessionDeleteResponse message from the specified reader or buffer.
         * @function decode
         * @memberof dataplane.SessionDeleteResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dataplane.SessionDeleteResponse} SessionDeleteResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SessionDeleteResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dataplane.SessionDeleteResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sessionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return SessionDeleteResponse;
    })();

    dataplane.JourneyListResponse = (function() {

        /**
         * Properties of a JourneyListResponse.
         * @memberof dataplane
         * @interface IJourneyListResponse
         * @property {Array.<dataplane.IJourney>|null} [journeys] JourneyListResponse journeys
         * @property {pagination.IPaginationResponse|null} [pagination] JourneyListResponse pagination
         */

        /**
         * Constructs a new JourneyListResponse.
         * @memberof dataplane
         * @classdesc Represents a JourneyListResponse.
         * @implements IJourneyListResponse
         * @constructor
         * @param {dataplane.IJourneyListResponse=} [properties] Properties to set
         */
        function JourneyListResponse(properties) {
            this.journeys = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JourneyListResponse journeys.
         * @member {Array.<dataplane.IJourney>} journeys
         * @memberof dataplane.JourneyListResponse
         * @instance
         */
        JourneyListResponse.prototype.journeys = $util.emptyArray;

        /**
         * JourneyListResponse pagination.
         * @member {pagination.IPaginationResponse|null|undefined} pagination
         * @memberof dataplane.JourneyListResponse
         * @instance
         */
        JourneyListResponse.prototype.pagination = null;

        /**
         * Creates a new JourneyListResponse instance using the specified properties.
         * @function create
         * @memberof dataplane.JourneyListResponse
         * @static
         * @param {dataplane.IJourneyListResponse=} [properties] Properties to set
         * @returns {dataplane.JourneyListResponse} JourneyListResponse instance
         */
        JourneyListResponse.create = function create(properties) {
            return new JourneyListResponse(properties);
        };

        /**
         * Encodes the specified JourneyListResponse message. Does not implicitly {@link dataplane.JourneyListResponse.verify|verify} messages.
         * @function encode
         * @memberof dataplane.JourneyListResponse
         * @static
         * @param {dataplane.IJourneyListResponse} message JourneyListResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JourneyListResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.journeys != null && message.journeys.length)
                for (var i = 0; i < message.journeys.length; ++i)
                    $root.dataplane.Journey.encode(message.journeys[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.pagination != null && Object.hasOwnProperty.call(message, "pagination"))
                $root.pagination.PaginationResponse.encode(message.pagination, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a JourneyListResponse message from the specified reader or buffer.
         * @function decode
         * @memberof dataplane.JourneyListResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dataplane.JourneyListResponse} JourneyListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JourneyListResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dataplane.JourneyListResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.journeys && message.journeys.length))
                        message.journeys = [];
                    message.journeys.push($root.dataplane.Journey.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = $root.pagination.PaginationResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return JourneyListResponse;
    })();

    dataplane.JourneyDetailResponse = (function() {

        /**
         * Properties of a JourneyDetailResponse.
         * @memberof dataplane
         * @interface IJourneyDetailResponse
         * @property {dataplane.IJourney|null} [journey] JourneyDetailResponse journey
         * @property {Array.<dataplane.ISession>|null} [sessions] JourneyDetailResponse sessions
         */

        /**
         * Constructs a new JourneyDetailResponse.
         * @memberof dataplane
         * @classdesc Represents a JourneyDetailResponse.
         * @implements IJourneyDetailResponse
         * @constructor
         * @param {dataplane.IJourneyDetailResponse=} [properties] Properties to set
         */
        function JourneyDetailResponse(properties) {
            this.sessions = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JourneyDetailResponse journey.
         * @member {dataplane.IJourney|null|undefined} journey
         * @memberof dataplane.JourneyDetailResponse
         * @instance
         */
        JourneyDetailResponse.prototype.journey = null;

        /**
         * JourneyDetailResponse sessions.
         * @member {Array.<dataplane.ISession>} sessions
         * @memberof dataplane.JourneyDetailResponse
         * @instance
         */
        JourneyDetailResponse.prototype.sessions = $util.emptyArray;

        /**
         * Creates a new JourneyDetailResponse instance using the specified properties.
         * @function create
         * @memberof dataplane.JourneyDetailResponse
         * @static
         * @param {dataplane.IJourneyDetailResponse=} [properties] Properties to set
         * @returns {dataplane.JourneyDetailResponse} JourneyDetailResponse instance
         */
        JourneyDetailResponse.create = function create(properties) {
            return new JourneyDetailResponse(properties);
        };

        /**
         * Encodes the specified JourneyDetailResponse message. Does not implicitly {@link dataplane.JourneyDetailResponse.verify|verify} messages.
         * @function encode
         * @memberof dataplane.JourneyDetailResponse
         * @static
         * @param {dataplane.IJourneyDetailResponse} message JourneyDetailResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JourneyDetailResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.journey != null && Object.hasOwnProperty.call(message, "journey"))
                $root.dataplane.Journey.encode(message.journey, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.sessions != null && message.sessions.length)
                for (var i = 0; i < message.sessions.length; ++i)
                    $root.dataplane.Session.encode(message.sessions[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a JourneyDetailResponse message from the specified reader or buffer.
         * @function decode
         * @memberof dataplane.JourneyDetailResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dataplane.JourneyDetailResponse} JourneyDetailResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JourneyDetailResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dataplane.JourneyDetailResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.journey = $root.dataplane.Journey.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.sessions && message.sessions.length))
                        message.sessions = [];
                    message.sessions.push($root.dataplane.Session.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return JourneyDetailResponse;
    })();

    dataplane.ChunksListResponse = (function() {

        /**
         * Properties of a ChunksListResponse.
         * @memberof dataplane
         * @interface IChunksListResponse
         * @property {string|null} [sessionId] ChunksListResponse sessionId
         * @property {Array.<dataplane.IChunk>|null} [chunks] ChunksListResponse chunks
         * @property {pagination.IPaginationResponse|null} [pagination] ChunksListResponse pagination
         */

        /**
         * Constructs a new ChunksListResponse.
         * @memberof dataplane
         * @classdesc Represents a ChunksListResponse.
         * @implements IChunksListResponse
         * @constructor
         * @param {dataplane.IChunksListResponse=} [properties] Properties to set
         */
        function ChunksListResponse(properties) {
            this.chunks = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChunksListResponse sessionId.
         * @member {string} sessionId
         * @memberof dataplane.ChunksListResponse
         * @instance
         */
        ChunksListResponse.prototype.sessionId = "";

        /**
         * ChunksListResponse chunks.
         * @member {Array.<dataplane.IChunk>} chunks
         * @memberof dataplane.ChunksListResponse
         * @instance
         */
        ChunksListResponse.prototype.chunks = $util.emptyArray;

        /**
         * ChunksListResponse pagination.
         * @member {pagination.IPaginationResponse|null|undefined} pagination
         * @memberof dataplane.ChunksListResponse
         * @instance
         */
        ChunksListResponse.prototype.pagination = null;

        /**
         * Creates a new ChunksListResponse instance using the specified properties.
         * @function create
         * @memberof dataplane.ChunksListResponse
         * @static
         * @param {dataplane.IChunksListResponse=} [properties] Properties to set
         * @returns {dataplane.ChunksListResponse} ChunksListResponse instance
         */
        ChunksListResponse.create = function create(properties) {
            return new ChunksListResponse(properties);
        };

        /**
         * Encodes the specified ChunksListResponse message. Does not implicitly {@link dataplane.ChunksListResponse.verify|verify} messages.
         * @function encode
         * @memberof dataplane.ChunksListResponse
         * @static
         * @param {dataplane.IChunksListResponse} message ChunksListResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChunksListResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sessionId != null && Object.hasOwnProperty.call(message, "sessionId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.sessionId);
            if (message.chunks != null && message.chunks.length)
                for (var i = 0; i < message.chunks.length; ++i)
                    $root.dataplane.Chunk.encode(message.chunks[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.pagination != null && Object.hasOwnProperty.call(message, "pagination"))
                $root.pagination.PaginationResponse.encode(message.pagination, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a ChunksListResponse message from the specified reader or buffer.
         * @function decode
         * @memberof dataplane.ChunksListResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dataplane.ChunksListResponse} ChunksListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChunksListResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dataplane.ChunksListResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sessionId = reader.string();
                    break;
                case 2:
                    if (!(message.chunks && message.chunks.length))
                        message.chunks = [];
                    message.chunks.push($root.dataplane.Chunk.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.pagination = $root.pagination.PaginationResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ChunksListResponse;
    })();

    dataplane.CardListResponse = (function() {

        /**
         * Properties of a CardListResponse.
         * @memberof dataplane
         * @interface ICardListResponse
         * @property {string|null} [sessionId] CardListResponse sessionId
         * @property {Array.<dataplane.ICard>|null} [cards] CardListResponse cards
         * @property {pagination.IPaginationResponse|null} [pagination] CardListResponse pagination
         */

        /**
         * Constructs a new CardListResponse.
         * @memberof dataplane
         * @classdesc Represents a CardListResponse.
         * @implements ICardListResponse
         * @constructor
         * @param {dataplane.ICardListResponse=} [properties] Properties to set
         */
        function CardListResponse(properties) {
            this.cards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CardListResponse sessionId.
         * @member {string} sessionId
         * @memberof dataplane.CardListResponse
         * @instance
         */
        CardListResponse.prototype.sessionId = "";

        /**
         * CardListResponse cards.
         * @member {Array.<dataplane.ICard>} cards
         * @memberof dataplane.CardListResponse
         * @instance
         */
        CardListResponse.prototype.cards = $util.emptyArray;

        /**
         * CardListResponse pagination.
         * @member {pagination.IPaginationResponse|null|undefined} pagination
         * @memberof dataplane.CardListResponse
         * @instance
         */
        CardListResponse.prototype.pagination = null;

        /**
         * Creates a new CardListResponse instance using the specified properties.
         * @function create
         * @memberof dataplane.CardListResponse
         * @static
         * @param {dataplane.ICardListResponse=} [properties] Properties to set
         * @returns {dataplane.CardListResponse} CardListResponse instance
         */
        CardListResponse.create = function create(properties) {
            return new CardListResponse(properties);
        };

        /**
         * Encodes the specified CardListResponse message. Does not implicitly {@link dataplane.CardListResponse.verify|verify} messages.
         * @function encode
         * @memberof dataplane.CardListResponse
         * @static
         * @param {dataplane.ICardListResponse} message CardListResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CardListResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sessionId != null && Object.hasOwnProperty.call(message, "sessionId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.sessionId);
            if (message.cards != null && message.cards.length)
                for (var i = 0; i < message.cards.length; ++i)
                    $root.dataplane.Card.encode(message.cards[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.pagination != null && Object.hasOwnProperty.call(message, "pagination"))
                $root.pagination.PaginationResponse.encode(message.pagination, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a CardListResponse message from the specified reader or buffer.
         * @function decode
         * @memberof dataplane.CardListResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dataplane.CardListResponse} CardListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CardListResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dataplane.CardListResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sessionId = reader.string();
                    break;
                case 2:
                    if (!(message.cards && message.cards.length))
                        message.cards = [];
                    message.cards.push($root.dataplane.Card.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.pagination = $root.pagination.PaginationResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return CardListResponse;
    })();

    dataplane.CardDeleteResponse = (function() {

        /**
         * Properties of a CardDeleteResponse.
         * @memberof dataplane
         * @interface ICardDeleteResponse
         * @property {string|null} [cardId] CardDeleteResponse cardId
         */

        /**
         * Constructs a new CardDeleteResponse.
         * @memberof dataplane
         * @classdesc Represents a CardDeleteResponse.
         * @implements ICardDeleteResponse
         * @constructor
         * @param {dataplane.ICardDeleteResponse=} [properties] Properties to set
         */
        function CardDeleteResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CardDeleteResponse cardId.
         * @member {string} cardId
         * @memberof dataplane.CardDeleteResponse
         * @instance
         */
        CardDeleteResponse.prototype.cardId = "";

        /**
         * Creates a new CardDeleteResponse instance using the specified properties.
         * @function create
         * @memberof dataplane.CardDeleteResponse
         * @static
         * @param {dataplane.ICardDeleteResponse=} [properties] Properties to set
         * @returns {dataplane.CardDeleteResponse} CardDeleteResponse instance
         */
        CardDeleteResponse.create = function create(properties) {
            return new CardDeleteResponse(properties);
        };

        /**
         * Encodes the specified CardDeleteResponse message. Does not implicitly {@link dataplane.CardDeleteResponse.verify|verify} messages.
         * @function encode
         * @memberof dataplane.CardDeleteResponse
         * @static
         * @param {dataplane.ICardDeleteResponse} message CardDeleteResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CardDeleteResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cardId != null && Object.hasOwnProperty.call(message, "cardId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.cardId);
            return writer;
        };

        /**
         * Decodes a CardDeleteResponse message from the specified reader or buffer.
         * @function decode
         * @memberof dataplane.CardDeleteResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dataplane.CardDeleteResponse} CardDeleteResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CardDeleteResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dataplane.CardDeleteResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cardId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return CardDeleteResponse;
    })();

    dataplane.LabelListResponse = (function() {

        /**
         * Properties of a LabelListResponse.
         * @memberof dataplane
         * @interface ILabelListResponse
         * @property {Array.<dataplane.ISessionLabel>|null} [labels] LabelListResponse labels
         */

        /**
         * Constructs a new LabelListResponse.
         * @memberof dataplane
         * @classdesc Represents a LabelListResponse.
         * @implements ILabelListResponse
         * @constructor
         * @param {dataplane.ILabelListResponse=} [properties] Properties to set
         */
        function LabelListResponse(properties) {
            this.labels = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LabelListResponse labels.
         * @member {Array.<dataplane.ISessionLabel>} labels
         * @memberof dataplane.LabelListResponse
         * @instance
         */
        LabelListResponse.prototype.labels = $util.emptyArray;

        /**
         * Creates a new LabelListResponse instance using the specified properties.
         * @function create
         * @memberof dataplane.LabelListResponse
         * @static
         * @param {dataplane.ILabelListResponse=} [properties] Properties to set
         * @returns {dataplane.LabelListResponse} LabelListResponse instance
         */
        LabelListResponse.create = function create(properties) {
            return new LabelListResponse(properties);
        };

        /**
         * Encodes the specified LabelListResponse message. Does not implicitly {@link dataplane.LabelListResponse.verify|verify} messages.
         * @function encode
         * @memberof dataplane.LabelListResponse
         * @static
         * @param {dataplane.ILabelListResponse} message LabelListResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LabelListResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.labels != null && message.labels.length)
                for (var i = 0; i < message.labels.length; ++i)
                    $root.dataplane.SessionLabel.encode(message.labels[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a LabelListResponse message from the specified reader or buffer.
         * @function decode
         * @memberof dataplane.LabelListResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dataplane.LabelListResponse} LabelListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LabelListResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dataplane.LabelListResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.labels && message.labels.length))
                        message.labels = [];
                    message.labels.push($root.dataplane.SessionLabel.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return LabelListResponse;
    })();

    dataplane.LabelsTopResponse = (function() {

        /**
         * Properties of a LabelsTopResponse.
         * @memberof dataplane
         * @interface ILabelsTopResponse
         * @property {Array.<dataplane.ILabelWithStats>|null} [labels] LabelsTopResponse labels
         */

        /**
         * Constructs a new LabelsTopResponse.
         * @memberof dataplane
         * @classdesc Represents a LabelsTopResponse.
         * @implements ILabelsTopResponse
         * @constructor
         * @param {dataplane.ILabelsTopResponse=} [properties] Properties to set
         */
        function LabelsTopResponse(properties) {
            this.labels = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LabelsTopResponse labels.
         * @member {Array.<dataplane.ILabelWithStats>} labels
         * @memberof dataplane.LabelsTopResponse
         * @instance
         */
        LabelsTopResponse.prototype.labels = $util.emptyArray;

        /**
         * Creates a new LabelsTopResponse instance using the specified properties.
         * @function create
         * @memberof dataplane.LabelsTopResponse
         * @static
         * @param {dataplane.ILabelsTopResponse=} [properties] Properties to set
         * @returns {dataplane.LabelsTopResponse} LabelsTopResponse instance
         */
        LabelsTopResponse.create = function create(properties) {
            return new LabelsTopResponse(properties);
        };

        /**
         * Encodes the specified LabelsTopResponse message. Does not implicitly {@link dataplane.LabelsTopResponse.verify|verify} messages.
         * @function encode
         * @memberof dataplane.LabelsTopResponse
         * @static
         * @param {dataplane.ILabelsTopResponse} message LabelsTopResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LabelsTopResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.labels != null && message.labels.length)
                for (var i = 0; i < message.labels.length; ++i)
                    $root.dataplane.LabelWithStats.encode(message.labels[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a LabelsTopResponse message from the specified reader or buffer.
         * @function decode
         * @memberof dataplane.LabelsTopResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dataplane.LabelsTopResponse} LabelsTopResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LabelsTopResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dataplane.LabelsTopResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.labels && message.labels.length))
                        message.labels = [];
                    message.labels.push($root.dataplane.LabelWithStats.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return LabelsTopResponse;
    })();

    dataplane.PaginatedFieldsResponse = (function() {

        /**
         * Properties of a PaginatedFieldsResponse.
         * @memberof dataplane
         * @interface IPaginatedFieldsResponse
         * @property {bundle.IBundle|null} [bundle] PaginatedFieldsResponse bundle
         * @property {number|null} [maxDeterminedAt] PaginatedFieldsResponse maxDeterminedAt
         * @property {number|null} [fromBundleCursor] PaginatedFieldsResponse fromBundleCursor
         */

        /**
         * Constructs a new PaginatedFieldsResponse.
         * @memberof dataplane
         * @classdesc Represents a PaginatedFieldsResponse.
         * @implements IPaginatedFieldsResponse
         * @constructor
         * @param {dataplane.IPaginatedFieldsResponse=} [properties] Properties to set
         */
        function PaginatedFieldsResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PaginatedFieldsResponse bundle.
         * @member {bundle.IBundle|null|undefined} bundle
         * @memberof dataplane.PaginatedFieldsResponse
         * @instance
         */
        PaginatedFieldsResponse.prototype.bundle = null;

        /**
         * PaginatedFieldsResponse maxDeterminedAt.
         * @member {number} maxDeterminedAt
         * @memberof dataplane.PaginatedFieldsResponse
         * @instance
         */
        PaginatedFieldsResponse.prototype.maxDeterminedAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PaginatedFieldsResponse fromBundleCursor.
         * @member {number} fromBundleCursor
         * @memberof dataplane.PaginatedFieldsResponse
         * @instance
         */
        PaginatedFieldsResponse.prototype.fromBundleCursor = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new PaginatedFieldsResponse instance using the specified properties.
         * @function create
         * @memberof dataplane.PaginatedFieldsResponse
         * @static
         * @param {dataplane.IPaginatedFieldsResponse=} [properties] Properties to set
         * @returns {dataplane.PaginatedFieldsResponse} PaginatedFieldsResponse instance
         */
        PaginatedFieldsResponse.create = function create(properties) {
            return new PaginatedFieldsResponse(properties);
        };

        /**
         * Encodes the specified PaginatedFieldsResponse message. Does not implicitly {@link dataplane.PaginatedFieldsResponse.verify|verify} messages.
         * @function encode
         * @memberof dataplane.PaginatedFieldsResponse
         * @static
         * @param {dataplane.IPaginatedFieldsResponse} message PaginatedFieldsResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PaginatedFieldsResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.bundle != null && Object.hasOwnProperty.call(message, "bundle"))
                $root.bundle.Bundle.encode(message.bundle, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.maxDeterminedAt != null && Object.hasOwnProperty.call(message, "maxDeterminedAt"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.maxDeterminedAt);
            if (message.fromBundleCursor != null && Object.hasOwnProperty.call(message, "fromBundleCursor"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.fromBundleCursor);
            return writer;
        };

        /**
         * Decodes a PaginatedFieldsResponse message from the specified reader or buffer.
         * @function decode
         * @memberof dataplane.PaginatedFieldsResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dataplane.PaginatedFieldsResponse} PaginatedFieldsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PaginatedFieldsResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dataplane.PaginatedFieldsResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.bundle = $root.bundle.Bundle.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.maxDeterminedAt = reader.int64();
                    break;
                case 3:
                    message.fromBundleCursor = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return PaginatedFieldsResponse;
    })();

    dataplane.FeatureEnvelope = (function() {

        /**
         * Properties of a FeatureEnvelope.
         * @memberof dataplane
         * @interface IFeatureEnvelope
         * @property {feature.IFeature|null} [feature] FeatureEnvelope feature
         * @property {string|null} [key] FeatureEnvelope key
         */

        /**
         * Constructs a new FeatureEnvelope.
         * @memberof dataplane
         * @classdesc Represents a FeatureEnvelope.
         * @implements IFeatureEnvelope
         * @constructor
         * @param {dataplane.IFeatureEnvelope=} [properties] Properties to set
         */
        function FeatureEnvelope(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FeatureEnvelope feature.
         * @member {feature.IFeature|null|undefined} feature
         * @memberof dataplane.FeatureEnvelope
         * @instance
         */
        FeatureEnvelope.prototype.feature = null;

        /**
         * FeatureEnvelope key.
         * @member {string} key
         * @memberof dataplane.FeatureEnvelope
         * @instance
         */
        FeatureEnvelope.prototype.key = "";

        /**
         * Creates a new FeatureEnvelope instance using the specified properties.
         * @function create
         * @memberof dataplane.FeatureEnvelope
         * @static
         * @param {dataplane.IFeatureEnvelope=} [properties] Properties to set
         * @returns {dataplane.FeatureEnvelope} FeatureEnvelope instance
         */
        FeatureEnvelope.create = function create(properties) {
            return new FeatureEnvelope(properties);
        };

        /**
         * Encodes the specified FeatureEnvelope message. Does not implicitly {@link dataplane.FeatureEnvelope.verify|verify} messages.
         * @function encode
         * @memberof dataplane.FeatureEnvelope
         * @static
         * @param {dataplane.IFeatureEnvelope} message FeatureEnvelope message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FeatureEnvelope.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.feature != null && Object.hasOwnProperty.call(message, "feature"))
                $root.feature.Feature.encode(message.feature, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.key);
            return writer;
        };

        /**
         * Decodes a FeatureEnvelope message from the specified reader or buffer.
         * @function decode
         * @memberof dataplane.FeatureEnvelope
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dataplane.FeatureEnvelope} FeatureEnvelope
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FeatureEnvelope.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dataplane.FeatureEnvelope();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.feature = $root.feature.Feature.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.key = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return FeatureEnvelope;
    })();

    dataplane.FeatureEnvelopeList = (function() {

        /**
         * Properties of a FeatureEnvelopeList.
         * @memberof dataplane
         * @interface IFeatureEnvelopeList
         * @property {Array.<dataplane.IFeatureEnvelope>|null} [features] FeatureEnvelopeList features
         */

        /**
         * Constructs a new FeatureEnvelopeList.
         * @memberof dataplane
         * @classdesc Represents a FeatureEnvelopeList.
         * @implements IFeatureEnvelopeList
         * @constructor
         * @param {dataplane.IFeatureEnvelopeList=} [properties] Properties to set
         */
        function FeatureEnvelopeList(properties) {
            this.features = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FeatureEnvelopeList features.
         * @member {Array.<dataplane.IFeatureEnvelope>} features
         * @memberof dataplane.FeatureEnvelopeList
         * @instance
         */
        FeatureEnvelopeList.prototype.features = $util.emptyArray;

        /**
         * Creates a new FeatureEnvelopeList instance using the specified properties.
         * @function create
         * @memberof dataplane.FeatureEnvelopeList
         * @static
         * @param {dataplane.IFeatureEnvelopeList=} [properties] Properties to set
         * @returns {dataplane.FeatureEnvelopeList} FeatureEnvelopeList instance
         */
        FeatureEnvelopeList.create = function create(properties) {
            return new FeatureEnvelopeList(properties);
        };

        /**
         * Encodes the specified FeatureEnvelopeList message. Does not implicitly {@link dataplane.FeatureEnvelopeList.verify|verify} messages.
         * @function encode
         * @memberof dataplane.FeatureEnvelopeList
         * @static
         * @param {dataplane.IFeatureEnvelopeList} message FeatureEnvelopeList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FeatureEnvelopeList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.features != null && message.features.length)
                for (var i = 0; i < message.features.length; ++i)
                    $root.dataplane.FeatureEnvelope.encode(message.features[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a FeatureEnvelopeList message from the specified reader or buffer.
         * @function decode
         * @memberof dataplane.FeatureEnvelopeList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dataplane.FeatureEnvelopeList} FeatureEnvelopeList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FeatureEnvelopeList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dataplane.FeatureEnvelopeList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.features && message.features.length))
                        message.features = [];
                    message.features.push($root.dataplane.FeatureEnvelope.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return FeatureEnvelopeList;
    })();

    dataplane.FeatureListResponse = (function() {

        /**
         * Properties of a FeatureListResponse.
         * @memberof dataplane
         * @interface IFeatureListResponse
         * @property {string|null} [sessionId] FeatureListResponse sessionId
         * @property {Object.<string,dataplane.IFeatureEnvelopeList>|null} [features] FeatureListResponse features
         */

        /**
         * Constructs a new FeatureListResponse.
         * @memberof dataplane
         * @classdesc Represents a FeatureListResponse.
         * @implements IFeatureListResponse
         * @constructor
         * @param {dataplane.IFeatureListResponse=} [properties] Properties to set
         */
        function FeatureListResponse(properties) {
            this.features = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FeatureListResponse sessionId.
         * @member {string} sessionId
         * @memberof dataplane.FeatureListResponse
         * @instance
         */
        FeatureListResponse.prototype.sessionId = "";

        /**
         * FeatureListResponse features.
         * @member {Object.<string,dataplane.IFeatureEnvelopeList>} features
         * @memberof dataplane.FeatureListResponse
         * @instance
         */
        FeatureListResponse.prototype.features = $util.emptyObject;

        /**
         * Creates a new FeatureListResponse instance using the specified properties.
         * @function create
         * @memberof dataplane.FeatureListResponse
         * @static
         * @param {dataplane.IFeatureListResponse=} [properties] Properties to set
         * @returns {dataplane.FeatureListResponse} FeatureListResponse instance
         */
        FeatureListResponse.create = function create(properties) {
            return new FeatureListResponse(properties);
        };

        /**
         * Encodes the specified FeatureListResponse message. Does not implicitly {@link dataplane.FeatureListResponse.verify|verify} messages.
         * @function encode
         * @memberof dataplane.FeatureListResponse
         * @static
         * @param {dataplane.IFeatureListResponse} message FeatureListResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FeatureListResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sessionId != null && Object.hasOwnProperty.call(message, "sessionId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.sessionId);
            if (message.features != null && Object.hasOwnProperty.call(message, "features"))
                for (var keys = Object.keys(message.features), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                    $root.dataplane.FeatureEnvelopeList.encode(message.features[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            return writer;
        };

        /**
         * Decodes a FeatureListResponse message from the specified reader or buffer.
         * @function decode
         * @memberof dataplane.FeatureListResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dataplane.FeatureListResponse} FeatureListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FeatureListResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dataplane.FeatureListResponse(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sessionId = reader.string();
                    break;
                case 2:
                    if (message.features === $util.emptyObject)
                        message.features = {};
                    var end2 = reader.uint32() + reader.pos;
                    key = "";
                    value = null;
                    while (reader.pos < end2) {
                        var tag2 = reader.uint32();
                        switch (tag2 >>> 3) {
                        case 1:
                            key = reader.string();
                            break;
                        case 2:
                            value = $root.dataplane.FeatureEnvelopeList.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag2 & 7);
                            break;
                        }
                    }
                    message.features[key] = value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return FeatureListResponse;
    })();

    dataplane.SessionFeaturesResponse = (function() {

        /**
         * Properties of a SessionFeaturesResponse.
         * @memberof dataplane
         * @interface ISessionFeaturesResponse
         * @property {string|null} [sessionId] SessionFeaturesResponse sessionId
         * @property {Object.<string,feature.IFeature>|null} [clientSdk] SessionFeaturesResponse clientSdk
         * @property {Object.<string,feature.IFeature>|null} [cloudNetwork] SessionFeaturesResponse cloudNetwork
         * @property {Object.<string,feature.IFeature>|null} [cloudBehavioral] SessionFeaturesResponse cloudBehavioral
         */

        /**
         * Constructs a new SessionFeaturesResponse.
         * @memberof dataplane
         * @classdesc Represents a SessionFeaturesResponse.
         * @implements ISessionFeaturesResponse
         * @constructor
         * @param {dataplane.ISessionFeaturesResponse=} [properties] Properties to set
         */
        function SessionFeaturesResponse(properties) {
            this.clientSdk = {};
            this.cloudNetwork = {};
            this.cloudBehavioral = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SessionFeaturesResponse sessionId.
         * @member {string} sessionId
         * @memberof dataplane.SessionFeaturesResponse
         * @instance
         */
        SessionFeaturesResponse.prototype.sessionId = "";

        /**
         * SessionFeaturesResponse clientSdk.
         * @member {Object.<string,feature.IFeature>} clientSdk
         * @memberof dataplane.SessionFeaturesResponse
         * @instance
         */
        SessionFeaturesResponse.prototype.clientSdk = $util.emptyObject;

        /**
         * SessionFeaturesResponse cloudNetwork.
         * @member {Object.<string,feature.IFeature>} cloudNetwork
         * @memberof dataplane.SessionFeaturesResponse
         * @instance
         */
        SessionFeaturesResponse.prototype.cloudNetwork = $util.emptyObject;

        /**
         * SessionFeaturesResponse cloudBehavioral.
         * @member {Object.<string,feature.IFeature>} cloudBehavioral
         * @memberof dataplane.SessionFeaturesResponse
         * @instance
         */
        SessionFeaturesResponse.prototype.cloudBehavioral = $util.emptyObject;

        /**
         * Creates a new SessionFeaturesResponse instance using the specified properties.
         * @function create
         * @memberof dataplane.SessionFeaturesResponse
         * @static
         * @param {dataplane.ISessionFeaturesResponse=} [properties] Properties to set
         * @returns {dataplane.SessionFeaturesResponse} SessionFeaturesResponse instance
         */
        SessionFeaturesResponse.create = function create(properties) {
            return new SessionFeaturesResponse(properties);
        };

        /**
         * Encodes the specified SessionFeaturesResponse message. Does not implicitly {@link dataplane.SessionFeaturesResponse.verify|verify} messages.
         * @function encode
         * @memberof dataplane.SessionFeaturesResponse
         * @static
         * @param {dataplane.ISessionFeaturesResponse} message SessionFeaturesResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SessionFeaturesResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sessionId != null && Object.hasOwnProperty.call(message, "sessionId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.sessionId);
            if (message.clientSdk != null && Object.hasOwnProperty.call(message, "clientSdk"))
                for (var keys = Object.keys(message.clientSdk), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                    $root.feature.Feature.encode(message.clientSdk[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            if (message.cloudNetwork != null && Object.hasOwnProperty.call(message, "cloudNetwork"))
                for (var keys = Object.keys(message.cloudNetwork), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                    $root.feature.Feature.encode(message.cloudNetwork[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            if (message.cloudBehavioral != null && Object.hasOwnProperty.call(message, "cloudBehavioral"))
                for (var keys = Object.keys(message.cloudBehavioral), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 4, wireType 2 =*/34).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                    $root.feature.Feature.encode(message.cloudBehavioral[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            return writer;
        };

        /**
         * Decodes a SessionFeaturesResponse message from the specified reader or buffer.
         * @function decode
         * @memberof dataplane.SessionFeaturesResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dataplane.SessionFeaturesResponse} SessionFeaturesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SessionFeaturesResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dataplane.SessionFeaturesResponse(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sessionId = reader.string();
                    break;
                case 2:
                    if (message.clientSdk === $util.emptyObject)
                        message.clientSdk = {};
                    var end2 = reader.uint32() + reader.pos;
                    key = "";
                    value = null;
                    while (reader.pos < end2) {
                        var tag2 = reader.uint32();
                        switch (tag2 >>> 3) {
                        case 1:
                            key = reader.string();
                            break;
                        case 2:
                            value = $root.feature.Feature.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag2 & 7);
                            break;
                        }
                    }
                    message.clientSdk[key] = value;
                    break;
                case 3:
                    if (message.cloudNetwork === $util.emptyObject)
                        message.cloudNetwork = {};
                    var end2 = reader.uint32() + reader.pos;
                    key = "";
                    value = null;
                    while (reader.pos < end2) {
                        var tag2 = reader.uint32();
                        switch (tag2 >>> 3) {
                        case 1:
                            key = reader.string();
                            break;
                        case 2:
                            value = $root.feature.Feature.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag2 & 7);
                            break;
                        }
                    }
                    message.cloudNetwork[key] = value;
                    break;
                case 4:
                    if (message.cloudBehavioral === $util.emptyObject)
                        message.cloudBehavioral = {};
                    var end2 = reader.uint32() + reader.pos;
                    key = "";
                    value = null;
                    while (reader.pos < end2) {
                        var tag2 = reader.uint32();
                        switch (tag2 >>> 3) {
                        case 1:
                            key = reader.string();
                            break;
                        case 2:
                            value = $root.feature.Feature.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag2 & 7);
                            break;
                        }
                    }
                    message.cloudBehavioral[key] = value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return SessionFeaturesResponse;
    })();

    dataplane.JourneyFeaturesResponse = (function() {

        /**
         * Properties of a JourneyFeaturesResponse.
         * @memberof dataplane
         * @interface IJourneyFeaturesResponse
         * @property {string|null} [journeyId] JourneyFeaturesResponse journeyId
         * @property {Object.<string,feature.IFeature>|null} [clientSdk] JourneyFeaturesResponse clientSdk
         * @property {Object.<string,feature.IFeature>|null} [cloudNetwork] JourneyFeaturesResponse cloudNetwork
         * @property {Object.<string,feature.IFeature>|null} [cloudBehavioral] JourneyFeaturesResponse cloudBehavioral
         */

        /**
         * Constructs a new JourneyFeaturesResponse.
         * @memberof dataplane
         * @classdesc Represents a JourneyFeaturesResponse.
         * @implements IJourneyFeaturesResponse
         * @constructor
         * @param {dataplane.IJourneyFeaturesResponse=} [properties] Properties to set
         */
        function JourneyFeaturesResponse(properties) {
            this.clientSdk = {};
            this.cloudNetwork = {};
            this.cloudBehavioral = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JourneyFeaturesResponse journeyId.
         * @member {string} journeyId
         * @memberof dataplane.JourneyFeaturesResponse
         * @instance
         */
        JourneyFeaturesResponse.prototype.journeyId = "";

        /**
         * JourneyFeaturesResponse clientSdk.
         * @member {Object.<string,feature.IFeature>} clientSdk
         * @memberof dataplane.JourneyFeaturesResponse
         * @instance
         */
        JourneyFeaturesResponse.prototype.clientSdk = $util.emptyObject;

        /**
         * JourneyFeaturesResponse cloudNetwork.
         * @member {Object.<string,feature.IFeature>} cloudNetwork
         * @memberof dataplane.JourneyFeaturesResponse
         * @instance
         */
        JourneyFeaturesResponse.prototype.cloudNetwork = $util.emptyObject;

        /**
         * JourneyFeaturesResponse cloudBehavioral.
         * @member {Object.<string,feature.IFeature>} cloudBehavioral
         * @memberof dataplane.JourneyFeaturesResponse
         * @instance
         */
        JourneyFeaturesResponse.prototype.cloudBehavioral = $util.emptyObject;

        /**
         * Creates a new JourneyFeaturesResponse instance using the specified properties.
         * @function create
         * @memberof dataplane.JourneyFeaturesResponse
         * @static
         * @param {dataplane.IJourneyFeaturesResponse=} [properties] Properties to set
         * @returns {dataplane.JourneyFeaturesResponse} JourneyFeaturesResponse instance
         */
        JourneyFeaturesResponse.create = function create(properties) {
            return new JourneyFeaturesResponse(properties);
        };

        /**
         * Encodes the specified JourneyFeaturesResponse message. Does not implicitly {@link dataplane.JourneyFeaturesResponse.verify|verify} messages.
         * @function encode
         * @memberof dataplane.JourneyFeaturesResponse
         * @static
         * @param {dataplane.IJourneyFeaturesResponse} message JourneyFeaturesResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JourneyFeaturesResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.journeyId != null && Object.hasOwnProperty.call(message, "journeyId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.journeyId);
            if (message.clientSdk != null && Object.hasOwnProperty.call(message, "clientSdk"))
                for (var keys = Object.keys(message.clientSdk), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                    $root.feature.Feature.encode(message.clientSdk[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            if (message.cloudNetwork != null && Object.hasOwnProperty.call(message, "cloudNetwork"))
                for (var keys = Object.keys(message.cloudNetwork), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                    $root.feature.Feature.encode(message.cloudNetwork[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            if (message.cloudBehavioral != null && Object.hasOwnProperty.call(message, "cloudBehavioral"))
                for (var keys = Object.keys(message.cloudBehavioral), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 4, wireType 2 =*/34).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                    $root.feature.Feature.encode(message.cloudBehavioral[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            return writer;
        };

        /**
         * Decodes a JourneyFeaturesResponse message from the specified reader or buffer.
         * @function decode
         * @memberof dataplane.JourneyFeaturesResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dataplane.JourneyFeaturesResponse} JourneyFeaturesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JourneyFeaturesResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dataplane.JourneyFeaturesResponse(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.journeyId = reader.string();
                    break;
                case 2:
                    if (message.clientSdk === $util.emptyObject)
                        message.clientSdk = {};
                    var end2 = reader.uint32() + reader.pos;
                    key = "";
                    value = null;
                    while (reader.pos < end2) {
                        var tag2 = reader.uint32();
                        switch (tag2 >>> 3) {
                        case 1:
                            key = reader.string();
                            break;
                        case 2:
                            value = $root.feature.Feature.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag2 & 7);
                            break;
                        }
                    }
                    message.clientSdk[key] = value;
                    break;
                case 3:
                    if (message.cloudNetwork === $util.emptyObject)
                        message.cloudNetwork = {};
                    var end2 = reader.uint32() + reader.pos;
                    key = "";
                    value = null;
                    while (reader.pos < end2) {
                        var tag2 = reader.uint32();
                        switch (tag2 >>> 3) {
                        case 1:
                            key = reader.string();
                            break;
                        case 2:
                            value = $root.feature.Feature.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag2 & 7);
                            break;
                        }
                    }
                    message.cloudNetwork[key] = value;
                    break;
                case 4:
                    if (message.cloudBehavioral === $util.emptyObject)
                        message.cloudBehavioral = {};
                    var end2 = reader.uint32() + reader.pos;
                    key = "";
                    value = null;
                    while (reader.pos < end2) {
                        var tag2 = reader.uint32();
                        switch (tag2 >>> 3) {
                        case 1:
                            key = reader.string();
                            break;
                        case 2:
                            value = $root.feature.Feature.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag2 & 7);
                            break;
                        }
                    }
                    message.cloudBehavioral[key] = value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return JourneyFeaturesResponse;
    })();

    dataplane.SignalsResponse = (function() {

        /**
         * Properties of a SignalsResponse.
         * @memberof dataplane
         * @interface ISignalsResponse
         * @property {v2.signal.IOs|null} [os] SignalsResponse os
         */

        /**
         * Constructs a new SignalsResponse.
         * @memberof dataplane
         * @classdesc Represents a SignalsResponse.
         * @implements ISignalsResponse
         * @constructor
         * @param {dataplane.ISignalsResponse=} [properties] Properties to set
         */
        function SignalsResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SignalsResponse os.
         * @member {v2.signal.IOs|null|undefined} os
         * @memberof dataplane.SignalsResponse
         * @instance
         */
        SignalsResponse.prototype.os = null;

        /**
         * Creates a new SignalsResponse instance using the specified properties.
         * @function create
         * @memberof dataplane.SignalsResponse
         * @static
         * @param {dataplane.ISignalsResponse=} [properties] Properties to set
         * @returns {dataplane.SignalsResponse} SignalsResponse instance
         */
        SignalsResponse.create = function create(properties) {
            return new SignalsResponse(properties);
        };

        /**
         * Encodes the specified SignalsResponse message. Does not implicitly {@link dataplane.SignalsResponse.verify|verify} messages.
         * @function encode
         * @memberof dataplane.SignalsResponse
         * @static
         * @param {dataplane.ISignalsResponse} message SignalsResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SignalsResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.os != null && Object.hasOwnProperty.call(message, "os"))
                $root.v2.signal.Os.encode(message.os, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a SignalsResponse message from the specified reader or buffer.
         * @function decode
         * @memberof dataplane.SignalsResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dataplane.SignalsResponse} SignalsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SignalsResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dataplane.SignalsResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.os = $root.v2.signal.Os.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return SignalsResponse;
    })();

    return dataplane;
})();

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        var protobuf = {};

        protobuf.Timestamp = (function() {

            /**
             * Properties of a Timestamp.
             * @memberof google.protobuf
             * @interface ITimestamp
             * @property {number|null} [seconds] Timestamp seconds
             * @property {number|null} [nanos] Timestamp nanos
             */

            /**
             * Constructs a new Timestamp.
             * @memberof google.protobuf
             * @classdesc Represents a Timestamp.
             * @implements ITimestamp
             * @constructor
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             */
            function Timestamp(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Timestamp seconds.
             * @member {number} seconds
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Timestamp nanos.
             * @member {number} nanos
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.nanos = 0;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             * @returns {google.protobuf.Timestamp} Timestamp instance
             */
            Timestamp.create = function create(properties) {
                return new Timestamp(properties);
            };

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                if (message.nanos != null && Object.hasOwnProperty.call(message, "nanos"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                return writer;
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Timestamp();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.seconds = reader.int64();
                        break;
                    case 2:
                        message.nanos = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return Timestamp;
        })();

        return protobuf;
    })();

    return google;
})();

$root.error_reporting = (function() {

    /**
     * Namespace error_reporting.
     * @exports error_reporting
     * @namespace
     */
    var error_reporting = {};

    error_reporting.Frame = (function() {

        /**
         * Properties of a Frame.
         * @memberof error_reporting
         * @interface IFrame
         * @property {string|null} ["function"] Frame function
         * @property {string|null} [module] Frame module
         * @property {string|null} [filename] Frame filename
         * @property {number|null} [lineNo] Frame lineNo
         * @property {number|null} [colNo] Frame colNo
         */

        /**
         * Constructs a new Frame.
         * @memberof error_reporting
         * @classdesc Represents a Frame.
         * @implements IFrame
         * @constructor
         * @param {error_reporting.IFrame=} [properties] Properties to set
         */
        function Frame(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Frame function.
         * @member {string} function
         * @memberof error_reporting.Frame
         * @instance
         */
        Frame.prototype["function"] = "";

        /**
         * Frame module.
         * @member {string} module
         * @memberof error_reporting.Frame
         * @instance
         */
        Frame.prototype.module = "";

        /**
         * Frame filename.
         * @member {string} filename
         * @memberof error_reporting.Frame
         * @instance
         */
        Frame.prototype.filename = "";

        /**
         * Frame lineNo.
         * @member {number} lineNo
         * @memberof error_reporting.Frame
         * @instance
         */
        Frame.prototype.lineNo = 0;

        /**
         * Frame colNo.
         * @member {number} colNo
         * @memberof error_reporting.Frame
         * @instance
         */
        Frame.prototype.colNo = 0;

        /**
         * Creates a new Frame instance using the specified properties.
         * @function create
         * @memberof error_reporting.Frame
         * @static
         * @param {error_reporting.IFrame=} [properties] Properties to set
         * @returns {error_reporting.Frame} Frame instance
         */
        Frame.create = function create(properties) {
            return new Frame(properties);
        };

        /**
         * Encodes the specified Frame message. Does not implicitly {@link error_reporting.Frame.verify|verify} messages.
         * @function encode
         * @memberof error_reporting.Frame
         * @static
         * @param {error_reporting.IFrame} message Frame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Frame.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message["function"] != null && Object.hasOwnProperty.call(message, "function"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message["function"]);
            if (message.module != null && Object.hasOwnProperty.call(message, "module"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.module);
            if (message.filename != null && Object.hasOwnProperty.call(message, "filename"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.filename);
            if (message.lineNo != null && Object.hasOwnProperty.call(message, "lineNo"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.lineNo);
            if (message.colNo != null && Object.hasOwnProperty.call(message, "colNo"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.colNo);
            return writer;
        };

        /**
         * Decodes a Frame message from the specified reader or buffer.
         * @function decode
         * @memberof error_reporting.Frame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {error_reporting.Frame} Frame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Frame.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.error_reporting.Frame();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message["function"] = reader.string();
                    break;
                case 2:
                    message.module = reader.string();
                    break;
                case 3:
                    message.filename = reader.string();
                    break;
                case 4:
                    message.lineNo = reader.int32();
                    break;
                case 5:
                    message.colNo = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return Frame;
    })();

    error_reporting.Exception = (function() {

        /**
         * Properties of an Exception.
         * @memberof error_reporting
         * @interface IException
         * @property {string|null} [type] Exception type
         * @property {string|null} [value] Exception value
         * @property {Array.<error_reporting.IFrame>|null} [stacktrace] Exception stacktrace
         */

        /**
         * Constructs a new Exception.
         * @memberof error_reporting
         * @classdesc Represents an Exception.
         * @implements IException
         * @constructor
         * @param {error_reporting.IException=} [properties] Properties to set
         */
        function Exception(properties) {
            this.stacktrace = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Exception type.
         * @member {string} type
         * @memberof error_reporting.Exception
         * @instance
         */
        Exception.prototype.type = "";

        /**
         * Exception value.
         * @member {string} value
         * @memberof error_reporting.Exception
         * @instance
         */
        Exception.prototype.value = "";

        /**
         * Exception stacktrace.
         * @member {Array.<error_reporting.IFrame>} stacktrace
         * @memberof error_reporting.Exception
         * @instance
         */
        Exception.prototype.stacktrace = $util.emptyArray;

        /**
         * Creates a new Exception instance using the specified properties.
         * @function create
         * @memberof error_reporting.Exception
         * @static
         * @param {error_reporting.IException=} [properties] Properties to set
         * @returns {error_reporting.Exception} Exception instance
         */
        Exception.create = function create(properties) {
            return new Exception(properties);
        };

        /**
         * Encodes the specified Exception message. Does not implicitly {@link error_reporting.Exception.verify|verify} messages.
         * @function encode
         * @memberof error_reporting.Exception
         * @static
         * @param {error_reporting.IException} message Exception message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Exception.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
            if (message.stacktrace != null && message.stacktrace.length)
                for (var i = 0; i < message.stacktrace.length; ++i)
                    $root.error_reporting.Frame.encode(message.stacktrace[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes an Exception message from the specified reader or buffer.
         * @function decode
         * @memberof error_reporting.Exception
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {error_reporting.Exception} Exception
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Exception.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.error_reporting.Exception();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                case 3:
                    if (!(message.stacktrace && message.stacktrace.length))
                        message.stacktrace = [];
                    message.stacktrace.push($root.error_reporting.Frame.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return Exception;
    })();

    error_reporting.ErrorMessage = (function() {

        /**
         * Properties of an ErrorMessage.
         * @memberof error_reporting
         * @interface IErrorMessage
         * @property {string|null} [title] ErrorMessage title
         * @property {number|null} [timestamp] ErrorMessage timestamp
         * @property {common.DevicePlatform|null} [platform] ErrorMessage platform
         * @property {string|null} [manufacturer] ErrorMessage manufacturer
         * @property {string|null} [model] ErrorMessage model
         * @property {string|null} [osVersion] ErrorMessage osVersion
         * @property {error_reporting.ErrorMessage.Level|null} [level] ErrorMessage level
         * @property {string|null} [releaseVersion] ErrorMessage releaseVersion
         * @property {string|null} [proguardUuid] ErrorMessage proguardUuid
         * @property {error_reporting.IException|null} [exception] ErrorMessage exception
         * @property {Object.<string,string>|null} [additionalTags] ErrorMessage additionalTags
         */

        /**
         * Constructs a new ErrorMessage.
         * @memberof error_reporting
         * @classdesc Represents an ErrorMessage.
         * @implements IErrorMessage
         * @constructor
         * @param {error_reporting.IErrorMessage=} [properties] Properties to set
         */
        function ErrorMessage(properties) {
            this.additionalTags = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ErrorMessage title.
         * @member {string} title
         * @memberof error_reporting.ErrorMessage
         * @instance
         */
        ErrorMessage.prototype.title = "";

        /**
         * ErrorMessage timestamp.
         * @member {number} timestamp
         * @memberof error_reporting.ErrorMessage
         * @instance
         */
        ErrorMessage.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ErrorMessage platform.
         * @member {common.DevicePlatform} platform
         * @memberof error_reporting.ErrorMessage
         * @instance
         */
        ErrorMessage.prototype.platform = 0;

        /**
         * ErrorMessage manufacturer.
         * @member {string} manufacturer
         * @memberof error_reporting.ErrorMessage
         * @instance
         */
        ErrorMessage.prototype.manufacturer = "";

        /**
         * ErrorMessage model.
         * @member {string} model
         * @memberof error_reporting.ErrorMessage
         * @instance
         */
        ErrorMessage.prototype.model = "";

        /**
         * ErrorMessage osVersion.
         * @member {string} osVersion
         * @memberof error_reporting.ErrorMessage
         * @instance
         */
        ErrorMessage.prototype.osVersion = "";

        /**
         * ErrorMessage level.
         * @member {error_reporting.ErrorMessage.Level} level
         * @memberof error_reporting.ErrorMessage
         * @instance
         */
        ErrorMessage.prototype.level = 0;

        /**
         * ErrorMessage releaseVersion.
         * @member {string} releaseVersion
         * @memberof error_reporting.ErrorMessage
         * @instance
         */
        ErrorMessage.prototype.releaseVersion = "";

        /**
         * ErrorMessage proguardUuid.
         * @member {string} proguardUuid
         * @memberof error_reporting.ErrorMessage
         * @instance
         */
        ErrorMessage.prototype.proguardUuid = "";

        /**
         * ErrorMessage exception.
         * @member {error_reporting.IException|null|undefined} exception
         * @memberof error_reporting.ErrorMessage
         * @instance
         */
        ErrorMessage.prototype.exception = null;

        /**
         * ErrorMessage additionalTags.
         * @member {Object.<string,string>} additionalTags
         * @memberof error_reporting.ErrorMessage
         * @instance
         */
        ErrorMessage.prototype.additionalTags = $util.emptyObject;

        /**
         * Creates a new ErrorMessage instance using the specified properties.
         * @function create
         * @memberof error_reporting.ErrorMessage
         * @static
         * @param {error_reporting.IErrorMessage=} [properties] Properties to set
         * @returns {error_reporting.ErrorMessage} ErrorMessage instance
         */
        ErrorMessage.create = function create(properties) {
            return new ErrorMessage(properties);
        };

        /**
         * Encodes the specified ErrorMessage message. Does not implicitly {@link error_reporting.ErrorMessage.verify|verify} messages.
         * @function encode
         * @memberof error_reporting.ErrorMessage
         * @static
         * @param {error_reporting.IErrorMessage} message ErrorMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ErrorMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.title);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.timestamp);
            if (message.platform != null && Object.hasOwnProperty.call(message, "platform"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.platform);
            if (message.manufacturer != null && Object.hasOwnProperty.call(message, "manufacturer"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.manufacturer);
            if (message.model != null && Object.hasOwnProperty.call(message, "model"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.model);
            if (message.osVersion != null && Object.hasOwnProperty.call(message, "osVersion"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.osVersion);
            if (message.level != null && Object.hasOwnProperty.call(message, "level"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.level);
            if (message.releaseVersion != null && Object.hasOwnProperty.call(message, "releaseVersion"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.releaseVersion);
            if (message.proguardUuid != null && Object.hasOwnProperty.call(message, "proguardUuid"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.proguardUuid);
            if (message.exception != null && Object.hasOwnProperty.call(message, "exception"))
                $root.error_reporting.Exception.encode(message.exception, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.additionalTags != null && Object.hasOwnProperty.call(message, "additionalTags"))
                for (var keys = Object.keys(message.additionalTags), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 11, wireType 2 =*/90).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.additionalTags[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Decodes an ErrorMessage message from the specified reader or buffer.
         * @function decode
         * @memberof error_reporting.ErrorMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {error_reporting.ErrorMessage} ErrorMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ErrorMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.error_reporting.ErrorMessage(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.timestamp = reader.int64();
                    break;
                case 3:
                    message.platform = reader.int32();
                    break;
                case 4:
                    message.manufacturer = reader.string();
                    break;
                case 5:
                    message.model = reader.string();
                    break;
                case 6:
                    message.osVersion = reader.string();
                    break;
                case 7:
                    message.level = reader.int32();
                    break;
                case 8:
                    message.releaseVersion = reader.string();
                    break;
                case 9:
                    message.proguardUuid = reader.string();
                    break;
                case 10:
                    message.exception = $root.error_reporting.Exception.decode(reader, reader.uint32());
                    break;
                case 11:
                    if (message.additionalTags === $util.emptyObject)
                        message.additionalTags = {};
                    var end2 = reader.uint32() + reader.pos;
                    key = "";
                    value = "";
                    while (reader.pos < end2) {
                        var tag2 = reader.uint32();
                        switch (tag2 >>> 3) {
                        case 1:
                            key = reader.string();
                            break;
                        case 2:
                            value = reader.string();
                            break;
                        default:
                            reader.skipType(tag2 & 7);
                            break;
                        }
                    }
                    message.additionalTags[key] = value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Level enum.
         * @name error_reporting.ErrorMessage.Level
         * @enum {number}
         * @property {number} INVALID=0 INVALID value
         * @property {number} DEBUG=1 DEBUG value
         * @property {number} INFO=2 INFO value
         * @property {number} WARNING=3 WARNING value
         * @property {number} ERROR=4 ERROR value
         * @property {number} FATAL=5 FATAL value
         */
        ErrorMessage.Level = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "INVALID"] = 0;
            values[valuesById[1] = "DEBUG"] = 1;
            values[valuesById[2] = "INFO"] = 2;
            values[valuesById[3] = "WARNING"] = 3;
            values[valuesById[4] = "ERROR"] = 4;
            values[valuesById[5] = "FATAL"] = 5;
            return values;
        })();

        return ErrorMessage;
    })();

    return error_reporting;
})();

$root.pagination = (function() {

    /**
     * Namespace pagination.
     * @exports pagination
     * @namespace
     */
    var pagination = {};

    pagination.PaginationRequest = (function() {

        /**
         * Properties of a PaginationRequest.
         * @memberof pagination
         * @interface IPaginationRequest
         */

        /**
         * Constructs a new PaginationRequest.
         * @memberof pagination
         * @classdesc Represents a PaginationRequest.
         * @implements IPaginationRequest
         * @constructor
         * @param {pagination.IPaginationRequest=} [properties] Properties to set
         */
        function PaginationRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new PaginationRequest instance using the specified properties.
         * @function create
         * @memberof pagination.PaginationRequest
         * @static
         * @param {pagination.IPaginationRequest=} [properties] Properties to set
         * @returns {pagination.PaginationRequest} PaginationRequest instance
         */
        PaginationRequest.create = function create(properties) {
            return new PaginationRequest(properties);
        };

        /**
         * Encodes the specified PaginationRequest message. Does not implicitly {@link pagination.PaginationRequest.verify|verify} messages.
         * @function encode
         * @memberof pagination.PaginationRequest
         * @static
         * @param {pagination.IPaginationRequest} message PaginationRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PaginationRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Decodes a PaginationRequest message from the specified reader or buffer.
         * @function decode
         * @memberof pagination.PaginationRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pagination.PaginationRequest} PaginationRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PaginationRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pagination.PaginationRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return PaginationRequest;
    })();

    pagination.PaginationResponse = (function() {

        /**
         * Properties of a PaginationResponse.
         * @memberof pagination
         * @interface IPaginationResponse
         * @property {number|null} [currentPage] PaginationResponse currentPage
         * @property {number|null} [previousPage] PaginationResponse previousPage
         * @property {number|null} [nextPage] PaginationResponse nextPage
         * @property {number|null} [perPage] PaginationResponse perPage
         * @property {number|null} [totalPages] PaginationResponse totalPages
         * @property {number|null} [totalCount] PaginationResponse totalCount
         */

        /**
         * Constructs a new PaginationResponse.
         * @memberof pagination
         * @classdesc Represents a PaginationResponse.
         * @implements IPaginationResponse
         * @constructor
         * @param {pagination.IPaginationResponse=} [properties] Properties to set
         */
        function PaginationResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PaginationResponse currentPage.
         * @member {number} currentPage
         * @memberof pagination.PaginationResponse
         * @instance
         */
        PaginationResponse.prototype.currentPage = 0;

        /**
         * PaginationResponse previousPage.
         * @member {number} previousPage
         * @memberof pagination.PaginationResponse
         * @instance
         */
        PaginationResponse.prototype.previousPage = 0;

        /**
         * PaginationResponse nextPage.
         * @member {number} nextPage
         * @memberof pagination.PaginationResponse
         * @instance
         */
        PaginationResponse.prototype.nextPage = 0;

        /**
         * PaginationResponse perPage.
         * @member {number} perPage
         * @memberof pagination.PaginationResponse
         * @instance
         */
        PaginationResponse.prototype.perPage = 0;

        /**
         * PaginationResponse totalPages.
         * @member {number} totalPages
         * @memberof pagination.PaginationResponse
         * @instance
         */
        PaginationResponse.prototype.totalPages = 0;

        /**
         * PaginationResponse totalCount.
         * @member {number} totalCount
         * @memberof pagination.PaginationResponse
         * @instance
         */
        PaginationResponse.prototype.totalCount = 0;

        /**
         * Creates a new PaginationResponse instance using the specified properties.
         * @function create
         * @memberof pagination.PaginationResponse
         * @static
         * @param {pagination.IPaginationResponse=} [properties] Properties to set
         * @returns {pagination.PaginationResponse} PaginationResponse instance
         */
        PaginationResponse.create = function create(properties) {
            return new PaginationResponse(properties);
        };

        /**
         * Encodes the specified PaginationResponse message. Does not implicitly {@link pagination.PaginationResponse.verify|verify} messages.
         * @function encode
         * @memberof pagination.PaginationResponse
         * @static
         * @param {pagination.IPaginationResponse} message PaginationResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PaginationResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.currentPage != null && Object.hasOwnProperty.call(message, "currentPage"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.currentPage);
            if (message.previousPage != null && Object.hasOwnProperty.call(message, "previousPage"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.previousPage);
            if (message.nextPage != null && Object.hasOwnProperty.call(message, "nextPage"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.nextPage);
            if (message.perPage != null && Object.hasOwnProperty.call(message, "perPage"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.perPage);
            if (message.totalPages != null && Object.hasOwnProperty.call(message, "totalPages"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.totalPages);
            if (message.totalCount != null && Object.hasOwnProperty.call(message, "totalCount"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.totalCount);
            return writer;
        };

        /**
         * Decodes a PaginationResponse message from the specified reader or buffer.
         * @function decode
         * @memberof pagination.PaginationResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pagination.PaginationResponse} PaginationResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PaginationResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pagination.PaginationResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.currentPage = reader.int32();
                    break;
                case 2:
                    message.previousPage = reader.int32();
                    break;
                case 3:
                    message.nextPage = reader.int32();
                    break;
                case 4:
                    message.perPage = reader.int32();
                    break;
                case 5:
                    message.totalPages = reader.int32();
                    break;
                case 6:
                    message.totalCount = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return PaginationResponse;
    })();

    return pagination;
})();

$root.v2 = (function() {

    /**
     * Namespace v2.
     * @exports v2
     * @namespace
     */
    var v2 = {};

    v2.signal = (function() {

        /**
         * Namespace signal.
         * @memberof v2
         * @namespace
         */
        var signal = {};

        signal.Os = (function() {

            /**
             * Properties of an Os.
             * @memberof v2.signal
             * @interface IOs
             * @property {string|null} [predictedOsFamily] Os predictedOsFamily
             * @property {number|null} [predictedOsFamilyScore] Os predictedOsFamilyScore
             */

            /**
             * Constructs a new Os.
             * @memberof v2.signal
             * @classdesc Represents an Os.
             * @implements IOs
             * @constructor
             * @param {v2.signal.IOs=} [properties] Properties to set
             */
            function Os(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Os predictedOsFamily.
             * @member {string} predictedOsFamily
             * @memberof v2.signal.Os
             * @instance
             */
            Os.prototype.predictedOsFamily = "";

            /**
             * Os predictedOsFamilyScore.
             * @member {number} predictedOsFamilyScore
             * @memberof v2.signal.Os
             * @instance
             */
            Os.prototype.predictedOsFamilyScore = 0;

            /**
             * Creates a new Os instance using the specified properties.
             * @function create
             * @memberof v2.signal.Os
             * @static
             * @param {v2.signal.IOs=} [properties] Properties to set
             * @returns {v2.signal.Os} Os instance
             */
            Os.create = function create(properties) {
                return new Os(properties);
            };

            /**
             * Encodes the specified Os message. Does not implicitly {@link v2.signal.Os.verify|verify} messages.
             * @function encode
             * @memberof v2.signal.Os
             * @static
             * @param {v2.signal.IOs} message Os message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Os.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.predictedOsFamily != null && Object.hasOwnProperty.call(message, "predictedOsFamily"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.predictedOsFamily);
                if (message.predictedOsFamilyScore != null && Object.hasOwnProperty.call(message, "predictedOsFamilyScore"))
                    writer.uint32(/* id 2, wireType 1 =*/17).double(message.predictedOsFamilyScore);
                return writer;
            };

            /**
             * Decodes an Os message from the specified reader or buffer.
             * @function decode
             * @memberof v2.signal.Os
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {v2.signal.Os} Os
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Os.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v2.signal.Os();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.predictedOsFamily = reader.string();
                        break;
                    case 2:
                        message.predictedOsFamilyScore = reader.double();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return Os;
        })();

        return signal;
    })();

    return v2;
})();

module.exports = $root;
