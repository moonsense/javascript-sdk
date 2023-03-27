import * as $protobuf from "protobufjs";
/** Namespace bundle. */
export namespace bundle {

    /** Properties of a SealedBundle. */
    interface ISealedBundle {

        /** SealedBundle bundle */
        bundle?: (bundle.IBundle|null);

        /** SealedBundle appId */
        appId?: (string|null);

        /** SealedBundle credentialId */
        credentialId?: (string|null);

        /** SealedBundle sessionId */
        sessionId?: (string|null);

        /** SealedBundle userId */
        userId?: (string|null);

        /** SealedBundle serverTimeMillis */
        serverTimeMillis?: (number|null);

        /** SealedBundle installId */
        installId?: (string|null);

        /** SealedBundle clientUserId */
        clientUserId?: (string|null);

        /** SealedBundle remoteIp */
        remoteIp?: (string|null);

        /** SealedBundle journeyId */
        journeyId?: (string|null);
    }

    /** Represents a SealedBundle. */
    class SealedBundle implements ISealedBundle {

        /**
         * Constructs a new SealedBundle.
         * @param [properties] Properties to set
         */
        constructor(properties?: bundle.ISealedBundle);

        /** SealedBundle bundle. */
        public bundle?: (bundle.IBundle|null);

        /** SealedBundle appId. */
        public appId: string;

        /** SealedBundle credentialId. */
        public credentialId: string;

        /** SealedBundle sessionId. */
        public sessionId: string;

        /** SealedBundle userId. */
        public userId: string;

        /** SealedBundle serverTimeMillis. */
        public serverTimeMillis: number;

        /** SealedBundle installId. */
        public installId: string;

        /** SealedBundle clientUserId. */
        public clientUserId: string;

        /** SealedBundle remoteIp. */
        public remoteIp: string;

        /** SealedBundle journeyId. */
        public journeyId: string;

        /**
         * Creates a new SealedBundle instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SealedBundle instance
         */
        public static create(properties?: bundle.ISealedBundle): bundle.SealedBundle;

        /**
         * Encodes the specified SealedBundle message. Does not implicitly {@link bundle.SealedBundle.verify|verify} messages.
         * @param message SealedBundle message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bundle.ISealedBundle, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SealedBundle message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SealedBundle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bundle.SealedBundle;
    }

    /** Properties of a Bundle. */
    interface IBundle {

        /**
         * Device location as a list of GPS coordinates. Granularity depends on app permissions.
         * Currently only supported through the Web SDK
         */
        locationData?: (bundle.ILocation[]|null);

        /** Bundle accelerometerData */
        accelerometerData?: (bundle.IAccelerometer[]|null);

        /** Magnetic field as perceived by the device. */
        magnetometerData?: (bundle.IMagnetometer[]|null);

        /** Rate of rotation of the device around the three sensor axes. */
        gyroscopeData?: (bundle.IGyroscope[]|null);

        /** Bundle clientTime */
        clientTime?: (bundle.IClock|null);

        /** Bundle battery */
        battery?: (bundle.IBattery|null);

        /** Device orientation reported as azimuth, pitch and roll. */
        orientationData?: (bundle.IOrientation[]|null);

        /** Bundle pointerData */
        pointerData?: (bundle.IPointer[]|null);

        /** Bundle linearAccelerometerData */
        linearAccelerometerData?: (bundle.IAccelerometer[]|null);

        /** Bundle index */
        index?: (number|null);

        /** Bundle textChangeData */
        textChangeData?: (bundle.ITextChange[]|null);

        /** Bundle keyPressData */
        keyPressData?: (bundle.IKeyPress[]|null);

        /** Bundle focusChangeData */
        focusChangeData?: (bundle.IFocusChange[]|null);

        /** Bundle viewportScrollData */
        viewportScrollData?: (bundle.IViewportScroll[]|null);

        /** Bundle mouseWheelData */
        mouseWheelData?: (bundle.IMouseWheel[]|null);

        /** Bundle permissionEvents */
        permissionEvents?: (bundle.IPermissionEvent[]|null);

        /** Bundle viewportSizeEvents */
        viewportSizeEvents?: (bundle.IViewportSizeEvent[]|null);

        /** Bundle appLifeCycleEvents */
        appLifeCycleEvents?: (bundle.IAppLifeCycleEvent[]|null);

        /** Bundle customEvents */
        customEvents?: (bundle.ICustomEvent[]|null);

        /** Bundle clickData */
        clickData?: (bundle.IClick[]|null);

        /** Bundle isFinalBundle */
        isFinalBundle?: (boolean|null);

        /** Bundle features */
        features?: ({ [k: string]: feature.IFeature }|null);

        /** Bundle inputChangeData */
        inputChangeData?: (bundle.IInputChange[]|null);

        /** Bundle formSubmitEvents */
        formSubmitEvents?: (bundle.IFormSubmitEvent[]|null);

        /** Bundle contextMenuEvents */
        contextMenuEvents?: (bundle.IContextMenuEvent[]|null);

        /** Bundle frameRateEvent */
        frameRateEvent?: (bundle.IFrameRateEvent|null);
    }

    /** Represents a Bundle. */
    class Bundle implements IBundle {

        /**
         * Constructs a new Bundle.
         * @param [properties] Properties to set
         */
        constructor(properties?: bundle.IBundle);

        /**
         * Device location as a list of GPS coordinates. Granularity depends on app permissions.
         * Currently only supported through the Web SDK
         */
        public locationData: bundle.ILocation[];

        /** Bundle accelerometerData. */
        public accelerometerData: bundle.IAccelerometer[];

        /** Magnetic field as perceived by the device. */
        public magnetometerData: bundle.IMagnetometer[];

        /** Rate of rotation of the device around the three sensor axes. */
        public gyroscopeData: bundle.IGyroscope[];

        /** Bundle clientTime. */
        public clientTime?: (bundle.IClock|null);

        /** Bundle battery. */
        public battery?: (bundle.IBattery|null);

        /** Device orientation reported as azimuth, pitch and roll. */
        public orientationData: bundle.IOrientation[];

        /** Bundle pointerData. */
        public pointerData: bundle.IPointer[];

        /** Bundle linearAccelerometerData. */
        public linearAccelerometerData: bundle.IAccelerometer[];

        /** Bundle index. */
        public index: number;

        /** Bundle textChangeData. */
        public textChangeData: bundle.ITextChange[];

        /** Bundle keyPressData. */
        public keyPressData: bundle.IKeyPress[];

        /** Bundle focusChangeData. */
        public focusChangeData: bundle.IFocusChange[];

        /** Bundle viewportScrollData. */
        public viewportScrollData: bundle.IViewportScroll[];

        /** Bundle mouseWheelData. */
        public mouseWheelData: bundle.IMouseWheel[];

        /** Bundle permissionEvents. */
        public permissionEvents: bundle.IPermissionEvent[];

        /** Bundle viewportSizeEvents. */
        public viewportSizeEvents: bundle.IViewportSizeEvent[];

        /** Bundle appLifeCycleEvents. */
        public appLifeCycleEvents: bundle.IAppLifeCycleEvent[];

        /** Bundle customEvents. */
        public customEvents: bundle.ICustomEvent[];

        /** Bundle clickData. */
        public clickData: bundle.IClick[];

        /** Bundle isFinalBundle. */
        public isFinalBundle: boolean;

        /** Bundle features. */
        public features: { [k: string]: feature.IFeature };

        /** Bundle inputChangeData. */
        public inputChangeData: bundle.IInputChange[];

        /** Bundle formSubmitEvents. */
        public formSubmitEvents: bundle.IFormSubmitEvent[];

        /** Bundle contextMenuEvents. */
        public contextMenuEvents: bundle.IContextMenuEvent[];

        /** Bundle frameRateEvent. */
        public frameRateEvent?: (bundle.IFrameRateEvent|null);

        /**
         * Creates a new Bundle instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Bundle instance
         */
        public static create(properties?: bundle.IBundle): bundle.Bundle;

        /**
         * Encodes the specified Bundle message. Does not implicitly {@link bundle.Bundle.verify|verify} messages.
         * @param message Bundle message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bundle.IBundle, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Bundle message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Bundle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bundle.Bundle;
    }

    /** Properties of an Offset2D. */
    interface IOffset2D {

        /** Offset2D dx */
        dx?: (number|null);

        /** Offset2D dy */
        dy?: (number|null);
    }

    /** Represents an Offset2D. */
    class Offset2D implements IOffset2D {

        /**
         * Constructs a new Offset2D.
         * @param [properties] Properties to set
         */
        constructor(properties?: bundle.IOffset2D);

        /** Offset2D dx. */
        public dx: number;

        /** Offset2D dy. */
        public dy: number;

        /**
         * Creates a new Offset2D instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Offset2D instance
         */
        public static create(properties?: bundle.IOffset2D): bundle.Offset2D;

        /**
         * Encodes the specified Offset2D message. Does not implicitly {@link bundle.Offset2D.verify|verify} messages.
         * @param message Offset2D message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bundle.IOffset2D, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Offset2D message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Offset2D
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bundle.Offset2D;
    }

    /** Properties of a ClosedRange. */
    interface IClosedRange {

        /** ClosedRange lowerBound */
        lowerBound?: (number|null);

        /** ClosedRange upperBound */
        upperBound?: (number|null);
    }

    /** Represents a ClosedRange. */
    class ClosedRange implements IClosedRange {

        /**
         * Constructs a new ClosedRange.
         * @param [properties] Properties to set
         */
        constructor(properties?: bundle.IClosedRange);

        /** ClosedRange lowerBound. */
        public lowerBound: number;

        /** ClosedRange upperBound. */
        public upperBound: number;

        /**
         * Creates a new ClosedRange instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClosedRange instance
         */
        public static create(properties?: bundle.IClosedRange): bundle.ClosedRange;

        /**
         * Encodes the specified ClosedRange message. Does not implicitly {@link bundle.ClosedRange.verify|verify} messages.
         * @param message ClosedRange message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bundle.IClosedRange, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClosedRange message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClosedRange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bundle.ClosedRange;
    }

    /** Properties of a Battery. */
    interface IBattery {

        /** Battery capacity */
        capacity?: (number|null);

        /** Battery state */
        state?: (bundle.Battery.State|null);
    }

    /** Represents a Battery. */
    class Battery implements IBattery {

        /**
         * Constructs a new Battery.
         * @param [properties] Properties to set
         */
        constructor(properties?: bundle.IBattery);

        /** Battery capacity. */
        public capacity: number;

        /** Battery state. */
        public state: bundle.Battery.State;

        /**
         * Creates a new Battery instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Battery instance
         */
        public static create(properties?: bundle.IBattery): bundle.Battery;

        /**
         * Encodes the specified Battery message. Does not implicitly {@link bundle.Battery.verify|verify} messages.
         * @param message Battery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bundle.IBattery, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Battery message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Battery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bundle.Battery;
    }

    namespace Battery {

        /** State enum. */
        enum State {
            UNKNOWN = 0,
            CHARGING = 1,
            DISCHARGING = 2,
            FULL = 3
        }
    }

    /** Properties of an Orientation. */
    interface IOrientation {

        /** Orientation determinedAt */
        determinedAt?: (number|null);

        /** Orientation azimuth */
        azimuth?: (number|null);

        /** Orientation pitch */
        pitch?: (number|null);

        /** Orientation roll */
        roll?: (number|null);
    }

    /** Device orientation reported as azimuth, pitch and roll. */
    class Orientation implements IOrientation {

        /**
         * Constructs a new Orientation.
         * @param [properties] Properties to set
         */
        constructor(properties?: bundle.IOrientation);

        /** Orientation determinedAt. */
        public determinedAt: number;

        /** Orientation azimuth. */
        public azimuth: number;

        /** Orientation pitch. */
        public pitch: number;

        /** Orientation roll. */
        public roll: number;

        /**
         * Creates a new Orientation instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Orientation instance
         */
        public static create(properties?: bundle.IOrientation): bundle.Orientation;

        /**
         * Encodes the specified Orientation message. Does not implicitly {@link bundle.Orientation.verify|verify} messages.
         * @param message Orientation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bundle.IOrientation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Orientation message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Orientation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bundle.Orientation;
    }

    /** Properties of a Clock. */
    interface IClock {

        /** Clock wallTimeMillis */
        wallTimeMillis?: (number|null);

        /** Clock timerMillis */
        timerMillis?: (number|null);

        /** Clock timerRealtimeMillis */
        timerRealtimeMillis?: (number|null);
    }

    /** Represents a Clock. */
    class Clock implements IClock {

        /**
         * Constructs a new Clock.
         * @param [properties] Properties to set
         */
        constructor(properties?: bundle.IClock);

        /** Clock wallTimeMillis. */
        public wallTimeMillis: number;

        /** Clock timerMillis. */
        public timerMillis: number;

        /** Clock timerRealtimeMillis. */
        public timerRealtimeMillis: number;

        /**
         * Creates a new Clock instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Clock instance
         */
        public static create(properties?: bundle.IClock): bundle.Clock;

        /**
         * Encodes the specified Clock message. Does not implicitly {@link bundle.Clock.verify|verify} messages.
         * @param message Clock message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bundle.IClock, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Clock message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Clock
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bundle.Clock;
    }

    /** Properties of a Location. */
    interface ILocation {

        /** Location determinedAt */
        determinedAt?: (number|null);

        /** Location horizontalAccuracy */
        horizontalAccuracy?: (number|null);

        /** Location verticalAccurracy */
        verticalAccurracy?: (number|null);

        /** Location altitude */
        altitude?: (number|null);

        /** Location bearing */
        bearing?: (number|null);

        /** Location bearingAccuracyDegrees */
        bearingAccuracyDegrees?: (number|null);

        /** Location latitude */
        latitude?: (number|null);

        /** Location longitude */
        longitude?: (number|null);

        /** Location provider */
        provider?: (string|null);

        /** Location speed */
        speed?: (number|null);

        /** Location speedAccurracy */
        speedAccurracy?: (number|null);
    }

    /**
     * Android: https://developer.android.com/reference/android/location/Location.html
     * IOS(Core Location): https://developer.apple.com/documentation/corelocation/cllocation
     * This object is currently unused by the SDK.
     */
    class Location implements ILocation {

        /**
         * Constructs a new Location.
         * @param [properties] Properties to set
         */
        constructor(properties?: bundle.ILocation);

        /** Location determinedAt. */
        public determinedAt: number;

        /** Location horizontalAccuracy. */
        public horizontalAccuracy: number;

        /** Location verticalAccurracy. */
        public verticalAccurracy: number;

        /** Location altitude. */
        public altitude: number;

        /** Location bearing. */
        public bearing: number;

        /** Location bearingAccuracyDegrees. */
        public bearingAccuracyDegrees: number;

        /** Location latitude. */
        public latitude: number;

        /** Location longitude. */
        public longitude: number;

        /** Location provider. */
        public provider: string;

        /** Location speed. */
        public speed: number;

        /** Location speedAccurracy. */
        public speedAccurracy: number;

        /**
         * Creates a new Location instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Location instance
         */
        public static create(properties?: bundle.ILocation): bundle.Location;

        /**
         * Encodes the specified Location message. Does not implicitly {@link bundle.Location.verify|verify} messages.
         * @param message Location message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bundle.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Location message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Location
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bundle.Location;
    }

    /** Properties of an Accelerometer. */
    interface IAccelerometer {

        /** Accelerometer determinedAt */
        determinedAt?: (number|null);

        /** Accelerometer x */
        x?: (number|null);

        /** Accelerometer y */
        y?: (number|null);

        /** Accelerometer z */
        z?: (number|null);
    }

    /** Represents an Accelerometer. */
    class Accelerometer implements IAccelerometer {

        /**
         * Constructs a new Accelerometer.
         * @param [properties] Properties to set
         */
        constructor(properties?: bundle.IAccelerometer);

        /** Accelerometer determinedAt. */
        public determinedAt: number;

        /** Accelerometer x. */
        public x: number;

        /** Accelerometer y. */
        public y: number;

        /** Accelerometer z. */
        public z: number;

        /**
         * Creates a new Accelerometer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Accelerometer instance
         */
        public static create(properties?: bundle.IAccelerometer): bundle.Accelerometer;

        /**
         * Encodes the specified Accelerometer message. Does not implicitly {@link bundle.Accelerometer.verify|verify} messages.
         * @param message Accelerometer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bundle.IAccelerometer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Accelerometer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Accelerometer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bundle.Accelerometer;
    }

    /** Properties of a Magnetometer. */
    interface IMagnetometer {

        /** Magnetometer determinedAt */
        determinedAt?: (number|null);

        /** Magnetometer x */
        x?: (number|null);

        /** Magnetometer y */
        y?: (number|null);

        /** Magnetometer z */
        z?: (number|null);
    }

    /** Magnetic field as perceived by the device. */
    class Magnetometer implements IMagnetometer {

        /**
         * Constructs a new Magnetometer.
         * @param [properties] Properties to set
         */
        constructor(properties?: bundle.IMagnetometer);

        /** Magnetometer determinedAt. */
        public determinedAt: number;

        /** Magnetometer x. */
        public x: number;

        /** Magnetometer y. */
        public y: number;

        /** Magnetometer z. */
        public z: number;

        /**
         * Creates a new Magnetometer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Magnetometer instance
         */
        public static create(properties?: bundle.IMagnetometer): bundle.Magnetometer;

        /**
         * Encodes the specified Magnetometer message. Does not implicitly {@link bundle.Magnetometer.verify|verify} messages.
         * @param message Magnetometer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bundle.IMagnetometer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Magnetometer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Magnetometer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bundle.Magnetometer;
    }

    /** Properties of a Gyroscope. */
    interface IGyroscope {

        /** Gyroscope determinedAt */
        determinedAt?: (number|null);

        /** Gyroscope x */
        x?: (number|null);

        /** Gyroscope y */
        y?: (number|null);

        /** Gyroscope z */
        z?: (number|null);
    }

    /** Captures the rate of rotation of the device in radians around the x, y and z axis. */
    class Gyroscope implements IGyroscope {

        /**
         * Constructs a new Gyroscope.
         * @param [properties] Properties to set
         */
        constructor(properties?: bundle.IGyroscope);

        /** Gyroscope determinedAt. */
        public determinedAt: number;

        /** Gyroscope x. */
        public x: number;

        /** Gyroscope y. */
        public y: number;

        /** Gyroscope z. */
        public z: number;

        /**
         * Creates a new Gyroscope instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Gyroscope instance
         */
        public static create(properties?: bundle.IGyroscope): bundle.Gyroscope;

        /**
         * Encodes the specified Gyroscope message. Does not implicitly {@link bundle.Gyroscope.verify|verify} messages.
         * @param message Gyroscope message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bundle.IGyroscope, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Gyroscope message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Gyroscope
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bundle.Gyroscope;
    }

    /** Properties of a Pointer. */
    interface IPointer {

        /** Pointer determinedAt */
        determinedAt?: (number|null);

        /** Pointer type */
        type?: (bundle.Pointer.Type|null);

        /** Pointer buttons */
        buttons?: (number|null);

        /** Pointer delta */
        delta?: (bundle.IOffset2D|null);

        /** Pointer device */
        device?: (number|null);

        /** Pointer distance */
        distance?: (number|null);

        /** Pointer distanceRange */
        distanceRange?: (bundle.IClosedRange|null);

        /** Pointer obscured */
        obscured?: (boolean|null);

        /** Pointer orientation */
        orientation?: (number|null);

        /** Pointer position */
        position?: (bundle.IOffset2D|null);

        /** Pointer pressure */
        pressure?: (number|null);

        /** Pointer pressureRange */
        pressureRange?: (bundle.IClosedRange|null);

        /** Pointer radiusMajor */
        radiusMajor?: (number|null);

        /** Pointer radiusMinor */
        radiusMinor?: (number|null);

        /** Pointer radiusRange */
        radiusRange?: (bundle.IClosedRange|null);

        /** Pointer size */
        size?: (number|null);

        /** Pointer synthesized */
        synthesized?: (boolean|null);

        /** Pointer tilt */
        tilt?: (number|null);

        /** Pointer isSoftwareKeyboard */
        isSoftwareKeyboard?: (boolean|null);

        /** Pointer viewportBoundaryStatus */
        viewportBoundaryStatus?: (bundle.Pointer.ViewportBoundaryStatus|null);

        /** Pointer target */
        target?: (bundle.ITargetElement|null);
    }

    /** Represents a Pointer. */
    class Pointer implements IPointer {

        /**
         * Constructs a new Pointer.
         * @param [properties] Properties to set
         */
        constructor(properties?: bundle.IPointer);

        /** Pointer determinedAt. */
        public determinedAt: number;

        /** Pointer type. */
        public type: bundle.Pointer.Type;

        /** Pointer buttons. */
        public buttons: number;

        /** Pointer delta. */
        public delta?: (bundle.IOffset2D|null);

        /** Pointer device. */
        public device: number;

        /** Pointer distance. */
        public distance: number;

        /** Pointer distanceRange. */
        public distanceRange?: (bundle.IClosedRange|null);

        /** Pointer obscured. */
        public obscured: boolean;

        /** Pointer orientation. */
        public orientation: number;

        /** Pointer position. */
        public position?: (bundle.IOffset2D|null);

        /** Pointer pressure. */
        public pressure: number;

        /** Pointer pressureRange. */
        public pressureRange?: (bundle.IClosedRange|null);

        /** Pointer radiusMajor. */
        public radiusMajor: number;

        /** Pointer radiusMinor. */
        public radiusMinor: number;

        /** Pointer radiusRange. */
        public radiusRange?: (bundle.IClosedRange|null);

        /** Pointer size. */
        public size: number;

        /** Pointer synthesized. */
        public synthesized: boolean;

        /** Pointer tilt. */
        public tilt: number;

        /** Pointer isSoftwareKeyboard. */
        public isSoftwareKeyboard: boolean;

        /** Pointer viewportBoundaryStatus. */
        public viewportBoundaryStatus: bundle.Pointer.ViewportBoundaryStatus;

        /** Pointer target. */
        public target?: (bundle.ITargetElement|null);

        /**
         * Creates a new Pointer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Pointer instance
         */
        public static create(properties?: bundle.IPointer): bundle.Pointer;

        /**
         * Encodes the specified Pointer message. Does not implicitly {@link bundle.Pointer.verify|verify} messages.
         * @param message Pointer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bundle.IPointer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Pointer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Pointer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bundle.Pointer;
    }

    namespace Pointer {

        /** Type enum. */
        enum Type {
            UNKNOWN = 0,
            STYLUS = 1,
            INVERTED_STYLUS = 2,
            TOUCH = 3,
            MOUSE = 4
        }

        /** ViewportBoundaryStatus enum. */
        enum ViewportBoundaryStatus {
            UNKNOWN_VIEWPORT_BOUNDARY_STATUS = 0,
            ENTER_VIEWPORT = 1,
            IN_VIEWPORT = 2,
            LEAVE_VIEWPORT = 3
        }
    }

    /** Properties of a Click. */
    interface IClick {

        /** Click determinedAt */
        determinedAt?: (number|null);

        /** Click position */
        position?: (bundle.IOffset2D|null);

        /** Click target */
        target?: (bundle.ITargetElement|null);
    }

    /** Represents a Click. */
    class Click implements IClick {

        /**
         * Constructs a new Click.
         * @param [properties] Properties to set
         */
        constructor(properties?: bundle.IClick);

        /** Click determinedAt. */
        public determinedAt: number;

        /** Click position. */
        public position?: (bundle.IOffset2D|null);

        /** Click target. */
        public target?: (bundle.ITargetElement|null);

        /**
         * Creates a new Click instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Click instance
         */
        public static create(properties?: bundle.IClick): bundle.Click;

        /**
         * Encodes the specified Click message. Does not implicitly {@link bundle.Click.verify|verify} messages.
         * @param message Click message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bundle.IClick, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Click message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Click
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bundle.Click;
    }

    /** Properties of a TargetElement. */
    interface ITargetElement {

        /** TargetElement targetId */
        targetId?: (string|null);

        /** TargetElement targetType */
        targetType?: (string|null);
    }

    /** Represents a TargetElement. */
    class TargetElement implements ITargetElement {

        /**
         * Constructs a new TargetElement.
         * @param [properties] Properties to set
         */
        constructor(properties?: bundle.ITargetElement);

        /** TargetElement targetId. */
        public targetId: string;

        /** TargetElement targetType. */
        public targetType: string;

        /**
         * Creates a new TargetElement instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TargetElement instance
         */
        public static create(properties?: bundle.ITargetElement): bundle.TargetElement;

        /**
         * Encodes the specified TargetElement message. Does not implicitly {@link bundle.TargetElement.verify|verify} messages.
         * @param message TargetElement message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bundle.ITargetElement, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TargetElement message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TargetElement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bundle.TargetElement;
    }

    /** Properties of a TextChange. */
    interface ITextChange {

        /** TextChange determinedAt */
        determinedAt?: (number|null);

        /** TextChange target */
        target?: (bundle.ITargetElement|null);

        /** TextChange focus */
        focus?: (boolean|null);

        /** TextChange maskedText */
        maskedText?: (string|null);

        /** TextChange truncatedText */
        truncatedText?: (boolean|null);

        /** TextChange action */
        action?: (bundle.TextChange.Action|null);
    }

    /** Represents a TextChange. */
    class TextChange implements ITextChange {

        /**
         * Constructs a new TextChange.
         * @param [properties] Properties to set
         */
        constructor(properties?: bundle.ITextChange);

        /** TextChange determinedAt. */
        public determinedAt: number;

        /** TextChange target. */
        public target?: (bundle.ITargetElement|null);

        /** TextChange focus. */
        public focus: boolean;

        /** TextChange maskedText. */
        public maskedText: string;

        /** TextChange truncatedText. */
        public truncatedText: boolean;

        /** TextChange action. */
        public action: bundle.TextChange.Action;

        /**
         * Creates a new TextChange instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TextChange instance
         */
        public static create(properties?: bundle.ITextChange): bundle.TextChange;

        /**
         * Encodes the specified TextChange message. Does not implicitly {@link bundle.TextChange.verify|verify} messages.
         * @param message TextChange message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bundle.ITextChange, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TextChange message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TextChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bundle.TextChange;
    }

    namespace TextChange {

        /** Action enum. */
        enum Action {
            UNKNOWN = 0,
            CUT = 1,
            PASTE = 2
        }
    }

    /** Properties of an InputChange. */
    interface IInputChange {

        /** InputChange determinedAt */
        determinedAt?: (number|null);

        /** InputChange target */
        target?: (bundle.ITargetElement|null);

        /** InputChange focus */
        focus?: (boolean|null);

        /** InputChange maskedText */
        maskedText?: (string|null);

        /** InputChange truncatedText */
        truncatedText?: (boolean|null);

        /** InputChange action */
        action?: (bundle.InputChange.Action|null);
    }

    /** Represents an InputChange. */
    class InputChange implements IInputChange {

        /**
         * Constructs a new InputChange.
         * @param [properties] Properties to set
         */
        constructor(properties?: bundle.IInputChange);

        /** InputChange determinedAt. */
        public determinedAt: number;

        /** InputChange target. */
        public target?: (bundle.ITargetElement|null);

        /** InputChange focus. */
        public focus: boolean;

        /** InputChange maskedText. */
        public maskedText: string;

        /** InputChange truncatedText. */
        public truncatedText: boolean;

        /** InputChange action. */
        public action: bundle.InputChange.Action;

        /**
         * Creates a new InputChange instance using the specified properties.
         * @param [properties] Properties to set
         * @returns InputChange instance
         */
        public static create(properties?: bundle.IInputChange): bundle.InputChange;

        /**
         * Encodes the specified InputChange message. Does not implicitly {@link bundle.InputChange.verify|verify} messages.
         * @param message InputChange message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bundle.IInputChange, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an InputChange message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns InputChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bundle.InputChange;
    }

    namespace InputChange {

        /** Action enum. */
        enum Action {
            UNKNOWN = 0,
            CUT = 1,
            PASTE = 2,
            AUTOFILL = 3,
            REPLACEMENT = 4
        }
    }

    /** Properties of a KeyPress. */
    interface IKeyPress {

        /** KeyPress determinedAt */
        determinedAt?: (number|null);

        /** KeyPress type */
        type?: (bundle.KeyPress.Type|null);

        /** KeyPress specialKey */
        specialKey?: (string|null);

        /** KeyPress maskedKey */
        maskedKey?: (number|null);

        /** KeyPress target */
        target?: (bundle.ITargetElement|null);

        /** KeyPress altKey */
        altKey?: (boolean|null);

        /** KeyPress controlKey */
        controlKey?: (boolean|null);

        /** KeyPress metaKey */
        metaKey?: (boolean|null);

        /** KeyPress shiftKey */
        shiftKey?: (boolean|null);
    }

    /** Represents a KeyPress. */
    class KeyPress implements IKeyPress {

        /**
         * Constructs a new KeyPress.
         * @param [properties] Properties to set
         */
        constructor(properties?: bundle.IKeyPress);

        /** KeyPress determinedAt. */
        public determinedAt: number;

        /** KeyPress type. */
        public type: bundle.KeyPress.Type;

        /** KeyPress specialKey. */
        public specialKey: string;

        /** KeyPress maskedKey. */
        public maskedKey: number;

        /** KeyPress target. */
        public target?: (bundle.ITargetElement|null);

        /** KeyPress altKey. */
        public altKey: boolean;

        /** KeyPress controlKey. */
        public controlKey: boolean;

        /** KeyPress metaKey. */
        public metaKey: boolean;

        /** KeyPress shiftKey. */
        public shiftKey: boolean;

        /**
         * Creates a new KeyPress instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KeyPress instance
         */
        public static create(properties?: bundle.IKeyPress): bundle.KeyPress;

        /**
         * Encodes the specified KeyPress message. Does not implicitly {@link bundle.KeyPress.verify|verify} messages.
         * @param message KeyPress message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bundle.IKeyPress, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KeyPress message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KeyPress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bundle.KeyPress;
    }

    namespace KeyPress {

        /** Type enum. */
        enum Type {
            UNKNOWN = 0,
            KEY_UP = 1,
            KEY_DOWN = 2
        }
    }

    /** Properties of a FocusChange. */
    interface IFocusChange {

        /** FocusChange determinedAt */
        determinedAt?: (number|null);

        /** FocusChange type */
        type?: (bundle.FocusChange.Type|null);

        /** FocusChange target */
        target?: (bundle.ITargetElement|null);
    }

    /** Represents a FocusChange. */
    class FocusChange implements IFocusChange {

        /**
         * Constructs a new FocusChange.
         * @param [properties] Properties to set
         */
        constructor(properties?: bundle.IFocusChange);

        /** FocusChange determinedAt. */
        public determinedAt: number;

        /** FocusChange type. */
        public type: bundle.FocusChange.Type;

        /** FocusChange target. */
        public target?: (bundle.ITargetElement|null);

        /**
         * Creates a new FocusChange instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FocusChange instance
         */
        public static create(properties?: bundle.IFocusChange): bundle.FocusChange;

        /**
         * Encodes the specified FocusChange message. Does not implicitly {@link bundle.FocusChange.verify|verify} messages.
         * @param message FocusChange message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bundle.IFocusChange, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FocusChange message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FocusChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bundle.FocusChange;
    }

    namespace FocusChange {

        /** Type enum. */
        enum Type {
            UNKNOWN = 0,
            FOCUS_GAINED = 1,
            FOCUS_LOST = 2
        }
    }

    /** Properties of a ViewportScroll. */
    interface IViewportScroll {

        /** ViewportScroll determinedAt */
        determinedAt?: (number|null);

        /** ViewportScroll xPosition */
        xPosition?: (number|null);

        /** ViewportScroll yPosition */
        yPosition?: (number|null);
    }

    /** Represents a ViewportScroll. */
    class ViewportScroll implements IViewportScroll {

        /**
         * Constructs a new ViewportScroll.
         * @param [properties] Properties to set
         */
        constructor(properties?: bundle.IViewportScroll);

        /** ViewportScroll determinedAt. */
        public determinedAt: number;

        /** ViewportScroll xPosition. */
        public xPosition: number;

        /** ViewportScroll yPosition. */
        public yPosition: number;

        /**
         * Creates a new ViewportScroll instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ViewportScroll instance
         */
        public static create(properties?: bundle.IViewportScroll): bundle.ViewportScroll;

        /**
         * Encodes the specified ViewportScroll message. Does not implicitly {@link bundle.ViewportScroll.verify|verify} messages.
         * @param message ViewportScroll message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bundle.IViewportScroll, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ViewportScroll message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ViewportScroll
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bundle.ViewportScroll;
    }

    /** Properties of a MouseWheel. */
    interface IMouseWheel {

        /** MouseWheel determinedAt */
        determinedAt?: (number|null);

        /** MouseWheel wheelDeltaX */
        wheelDeltaX?: (number|null);

        /** MouseWheel wheelDeltaY */
        wheelDeltaY?: (number|null);

        /** MouseWheel wheelMode */
        wheelMode?: (bundle.MouseWheel.WheelMode|null);

        /** MouseWheel wheelDeltaXLine */
        wheelDeltaXLine?: (number|null);

        /** MouseWheel wheelDeltaYLine */
        wheelDeltaYLine?: (number|null);

        /** MouseWheel wheelDeltaXPage */
        wheelDeltaXPage?: (number|null);

        /** MouseWheel wheelDeltaYPage */
        wheelDeltaYPage?: (number|null);
    }

    /** Represents a MouseWheel. */
    class MouseWheel implements IMouseWheel {

        /**
         * Constructs a new MouseWheel.
         * @param [properties] Properties to set
         */
        constructor(properties?: bundle.IMouseWheel);

        /** MouseWheel determinedAt. */
        public determinedAt: number;

        /** MouseWheel wheelDeltaX. */
        public wheelDeltaX: number;

        /** MouseWheel wheelDeltaY. */
        public wheelDeltaY: number;

        /** MouseWheel wheelMode. */
        public wheelMode: bundle.MouseWheel.WheelMode;

        /** MouseWheel wheelDeltaXLine. */
        public wheelDeltaXLine: number;

        /** MouseWheel wheelDeltaYLine. */
        public wheelDeltaYLine: number;

        /** MouseWheel wheelDeltaXPage. */
        public wheelDeltaXPage: number;

        /** MouseWheel wheelDeltaYPage. */
        public wheelDeltaYPage: number;

        /**
         * Creates a new MouseWheel instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MouseWheel instance
         */
        public static create(properties?: bundle.IMouseWheel): bundle.MouseWheel;

        /**
         * Encodes the specified MouseWheel message. Does not implicitly {@link bundle.MouseWheel.verify|verify} messages.
         * @param message MouseWheel message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bundle.IMouseWheel, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MouseWheel message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MouseWheel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bundle.MouseWheel;
    }

    namespace MouseWheel {

        /** WheelMode enum. */
        enum WheelMode {
            UNKNOWN_WHEEL_MODE = 0,
            PIXEL = 1,
            LINE = 2,
            PAGE = 3
        }
    }

    /** Properties of a PermissionEvent. */
    interface IPermissionEvent {

        /** PermissionEvent determinedAt */
        determinedAt?: (number|null);

        /** PermissionEvent sensorType */
        sensorType?: (common.SensorType|null);

        /** PermissionEvent permissionStatus */
        permissionStatus?: (bundle.PermissionEvent.PermissionStatus|null);
    }

    /** Represents a PermissionEvent. */
    class PermissionEvent implements IPermissionEvent {

        /**
         * Constructs a new PermissionEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: bundle.IPermissionEvent);

        /** PermissionEvent determinedAt. */
        public determinedAt: number;

        /** PermissionEvent sensorType. */
        public sensorType: common.SensorType;

        /** PermissionEvent permissionStatus. */
        public permissionStatus: bundle.PermissionEvent.PermissionStatus;

        /**
         * Creates a new PermissionEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PermissionEvent instance
         */
        public static create(properties?: bundle.IPermissionEvent): bundle.PermissionEvent;

        /**
         * Encodes the specified PermissionEvent message. Does not implicitly {@link bundle.PermissionEvent.verify|verify} messages.
         * @param message PermissionEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bundle.IPermissionEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PermissionEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PermissionEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bundle.PermissionEvent;
    }

    namespace PermissionEvent {

        /** PermissionStatus enum. */
        enum PermissionStatus {
            UNKNOWN_PERMISSION_STATUS = 0,
            ALLOWED = 1,
            DENIED = 2,
            UNDETERMINED_BY_USER = 3,
            REQUIRES_PROMPT_TO_DETERMINE = 4,
            SENSOR_NOT_AVAILABLE = 5
        }
    }

    /** Properties of a ViewportSizeEvent. */
    interface IViewportSizeEvent {

        /** ViewportSizeEvent determinedAt */
        determinedAt?: (number|null);

        /** ViewportSizeEvent devicePhysicalWidth */
        devicePhysicalWidth?: (number|null);

        /** ViewportSizeEvent devicePhysicalHeight */
        devicePhysicalHeight?: (number|null);

        /** ViewportSizeEvent deviceLogicalWidth */
        deviceLogicalWidth?: (number|null);

        /** ViewportSizeEvent deviceLogicalHeight */
        deviceLogicalHeight?: (number|null);

        /** ViewportSizeEvent devicePixelRatio */
        devicePixelRatio?: (number|null);

        /** ViewportSizeEvent viewportOrientation */
        viewportOrientation?: (bundle.ViewportSizeEvent.ViewportOrientationDirection|null);
    }

    /** Represents a ViewportSizeEvent. */
    class ViewportSizeEvent implements IViewportSizeEvent {

        /**
         * Constructs a new ViewportSizeEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: bundle.IViewportSizeEvent);

        /** ViewportSizeEvent determinedAt. */
        public determinedAt: number;

        /** ViewportSizeEvent devicePhysicalWidth. */
        public devicePhysicalWidth: number;

        /** ViewportSizeEvent devicePhysicalHeight. */
        public devicePhysicalHeight: number;

        /** ViewportSizeEvent deviceLogicalWidth. */
        public deviceLogicalWidth: number;

        /** ViewportSizeEvent deviceLogicalHeight. */
        public deviceLogicalHeight: number;

        /** ViewportSizeEvent devicePixelRatio. */
        public devicePixelRatio: number;

        /** ViewportSizeEvent viewportOrientation. */
        public viewportOrientation: bundle.ViewportSizeEvent.ViewportOrientationDirection;

        /**
         * Creates a new ViewportSizeEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ViewportSizeEvent instance
         */
        public static create(properties?: bundle.IViewportSizeEvent): bundle.ViewportSizeEvent;

        /**
         * Encodes the specified ViewportSizeEvent message. Does not implicitly {@link bundle.ViewportSizeEvent.verify|verify} messages.
         * @param message ViewportSizeEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bundle.IViewportSizeEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ViewportSizeEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ViewportSizeEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bundle.ViewportSizeEvent;
    }

    namespace ViewportSizeEvent {

        /**
         * The orientation of the viewport on the device. This may or may not align with
         * the orientation reported by Orientation depending on whether the user has
         * rotation lock enabled on their device.
         */
        enum ViewportOrientationDirection {
            UNKNOWN_ORIENTATION_DIRECTION = 0,
            PORTRAIT_PRIMARY = 1,
            PORTRAIT_SECONDARY = 2,
            LANDSCAPE_PRIMARY = 3,
            LANDSCAPE_SECONDARY = 4
        }
    }

    /** Properties of an AppLifeCycleEvent. */
    interface IAppLifeCycleEvent {

        /** AppLifeCycleEvent determinedAt */
        determinedAt?: (number|null);

        /** AppLifeCycleEvent appLifeCycleStatus */
        appLifeCycleStatus?: (bundle.AppLifeCycleEvent.AppLifeCycleStatus|null);
    }

    /** Represents an AppLifeCycleEvent. */
    class AppLifeCycleEvent implements IAppLifeCycleEvent {

        /**
         * Constructs a new AppLifeCycleEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: bundle.IAppLifeCycleEvent);

        /** AppLifeCycleEvent determinedAt. */
        public determinedAt: number;

        /** AppLifeCycleEvent appLifeCycleStatus. */
        public appLifeCycleStatus: bundle.AppLifeCycleEvent.AppLifeCycleStatus;

        /**
         * Creates a new AppLifeCycleEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AppLifeCycleEvent instance
         */
        public static create(properties?: bundle.IAppLifeCycleEvent): bundle.AppLifeCycleEvent;

        /**
         * Encodes the specified AppLifeCycleEvent message. Does not implicitly {@link bundle.AppLifeCycleEvent.verify|verify} messages.
         * @param message AppLifeCycleEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bundle.IAppLifeCycleEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AppLifeCycleEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AppLifeCycleEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bundle.AppLifeCycleEvent;
    }

    namespace AppLifeCycleEvent {

        /** AppLifeCycleStatus enum. */
        enum AppLifeCycleStatus {
            UNKNOWN_APP_LIFE_CYCLE_STATUS = 0,
            FOREGROUND = 1,
            BACKGROUND = 2,
            DESTROY = 3
        }
    }

    /** Properties of a CustomEvent. */
    interface ICustomEvent {

        /** CustomEvent determinedAt */
        determinedAt?: (number|null);

        /** CustomEvent eventName */
        eventName?: (string|null);

        /** CustomEvent properties */
        properties?: ({ [k: string]: string }|null);

        /** CustomEvent eventKey */
        eventKey?: (string|null);
    }

    /** Represents a CustomEvent. */
    class CustomEvent implements ICustomEvent {

        /**
         * Constructs a new CustomEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: bundle.ICustomEvent);

        /** CustomEvent determinedAt. */
        public determinedAt: number;

        /** CustomEvent eventName. */
        public eventName: string;

        /** CustomEvent properties. */
        public properties: { [k: string]: string };

        /** CustomEvent eventKey. */
        public eventKey: string;

        /**
         * Creates a new CustomEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CustomEvent instance
         */
        public static create(properties?: bundle.ICustomEvent): bundle.CustomEvent;

        /**
         * Encodes the specified CustomEvent message. Does not implicitly {@link bundle.CustomEvent.verify|verify} messages.
         * @param message CustomEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bundle.ICustomEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CustomEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CustomEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bundle.CustomEvent;
    }

    /** Properties of a FormSubmitEvent. */
    interface IFormSubmitEvent {

        /** FormSubmitEvent determinedAt */
        determinedAt?: (number|null);

        /** FormSubmitEvent submitter */
        submitter?: (bundle.ITargetElement|null);

        /** FormSubmitEvent target */
        target?: (bundle.ITargetElement|null);
    }

    /** Represents a FormSubmitEvent. */
    class FormSubmitEvent implements IFormSubmitEvent {

        /**
         * Constructs a new FormSubmitEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: bundle.IFormSubmitEvent);

        /** FormSubmitEvent determinedAt. */
        public determinedAt: number;

        /** FormSubmitEvent submitter. */
        public submitter?: (bundle.ITargetElement|null);

        /** FormSubmitEvent target. */
        public target?: (bundle.ITargetElement|null);

        /**
         * Creates a new FormSubmitEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FormSubmitEvent instance
         */
        public static create(properties?: bundle.IFormSubmitEvent): bundle.FormSubmitEvent;

        /**
         * Encodes the specified FormSubmitEvent message. Does not implicitly {@link bundle.FormSubmitEvent.verify|verify} messages.
         * @param message FormSubmitEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bundle.IFormSubmitEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FormSubmitEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FormSubmitEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bundle.FormSubmitEvent;
    }

    /** Properties of a ContextMenuEvent. */
    interface IContextMenuEvent {

        /** ContextMenuEvent determinedAt */
        determinedAt?: (number|null);

        /** ContextMenuEvent contextMenuStatus */
        contextMenuStatus?: (bundle.ContextMenuEvent.ContextMenuStatus|null);

        /** ContextMenuEvent target */
        target?: (bundle.ITargetElement|null);
    }

    /** Represents a ContextMenuEvent. */
    class ContextMenuEvent implements IContextMenuEvent {

        /**
         * Constructs a new ContextMenuEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: bundle.IContextMenuEvent);

        /** ContextMenuEvent determinedAt. */
        public determinedAt: number;

        /** ContextMenuEvent contextMenuStatus. */
        public contextMenuStatus: bundle.ContextMenuEvent.ContextMenuStatus;

        /** ContextMenuEvent target. */
        public target?: (bundle.ITargetElement|null);

        /**
         * Creates a new ContextMenuEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ContextMenuEvent instance
         */
        public static create(properties?: bundle.IContextMenuEvent): bundle.ContextMenuEvent;

        /**
         * Encodes the specified ContextMenuEvent message. Does not implicitly {@link bundle.ContextMenuEvent.verify|verify} messages.
         * @param message ContextMenuEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bundle.IContextMenuEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ContextMenuEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ContextMenuEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bundle.ContextMenuEvent;
    }

    namespace ContextMenuEvent {

        /** ContextMenuStatus enum. */
        enum ContextMenuStatus {
            UNKNOWN_CONTEXT_MENU_STATUS = 0,
            OPEN = 1,
            CLOSED = 2
        }
    }

    /** Properties of a FrameRateEvent. */
    interface IFrameRateEvent {

        /** FrameRateEvent determinedAt */
        determinedAt?: (number|null);

        /** FrameRateEvent framesPerSecond */
        framesPerSecond?: (number|null);
    }

    /** Represents a FrameRateEvent. */
    class FrameRateEvent implements IFrameRateEvent {

        /**
         * Constructs a new FrameRateEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: bundle.IFrameRateEvent);

        /** FrameRateEvent determinedAt. */
        public determinedAt: number;

        /** FrameRateEvent framesPerSecond. */
        public framesPerSecond: number;

        /**
         * Creates a new FrameRateEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FrameRateEvent instance
         */
        public static create(properties?: bundle.IFrameRateEvent): bundle.FrameRateEvent;

        /**
         * Encodes the specified FrameRateEvent message. Does not implicitly {@link bundle.FrameRateEvent.verify|verify} messages.
         * @param message FrameRateEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bundle.IFrameRateEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FrameRateEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FrameRateEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bundle.FrameRateEvent;
    }
}

/** Namespace common. */
export namespace common {

    /** Properties of an Empty. */
    interface IEmpty {
    }

    /** Represents an Empty. */
    class Empty implements IEmpty {

        /**
         * Constructs a new Empty.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IEmpty);

        /**
         * Creates a new Empty instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Empty instance
         */
        public static create(properties?: common.IEmpty): common.Empty;

        /**
         * Encodes the specified Empty message. Does not implicitly {@link common.Empty.verify|verify} messages.
         * @param message Empty message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Empty message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.Empty;
    }

    /** Properties of an ErrorResponse. */
    interface IErrorResponse {

        /** ErrorResponse type */
        type?: (string|null);

        /** ErrorResponse param */
        param?: (string|null);

        /** ErrorResponse message */
        message?: (string|null);
    }

    /** Represents an ErrorResponse. */
    class ErrorResponse implements IErrorResponse {

        /**
         * Constructs a new ErrorResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IErrorResponse);

        /** ErrorResponse type. */
        public type: string;

        /** ErrorResponse param. */
        public param: string;

        /** ErrorResponse message. */
        public message: string;

        /**
         * Creates a new ErrorResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ErrorResponse instance
         */
        public static create(properties?: common.IErrorResponse): common.ErrorResponse;

        /**
         * Encodes the specified ErrorResponse message. Does not implicitly {@link common.ErrorResponse.verify|verify} messages.
         * @param message ErrorResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IErrorResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ErrorResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ErrorResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.ErrorResponse;
    }

    /** Properties of a TokenSelfResponse. */
    interface ITokenSelfResponse {

        /** TokenSelfResponse appId */
        appId?: (string|null);

        /** TokenSelfResponse projectId */
        projectId?: (string|null);

        /** TokenSelfResponse scopes */
        scopes?: (string|null);

        /** TokenSelfResponse userId */
        userId?: (string|null);

        /** TokenSelfResponse credentialId */
        credentialId?: (string|null);

        /** TokenSelfResponse type */
        type?: (number|null);
    }

    /** Represents a TokenSelfResponse. */
    class TokenSelfResponse implements ITokenSelfResponse {

        /**
         * Constructs a new TokenSelfResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.ITokenSelfResponse);

        /** TokenSelfResponse appId. */
        public appId: string;

        /** TokenSelfResponse projectId. */
        public projectId: string;

        /** TokenSelfResponse scopes. */
        public scopes: string;

        /** TokenSelfResponse userId. */
        public userId: string;

        /** TokenSelfResponse credentialId. */
        public credentialId: string;

        /** TokenSelfResponse type. */
        public type: number;

        /**
         * Creates a new TokenSelfResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TokenSelfResponse instance
         */
        public static create(properties?: common.ITokenSelfResponse): common.TokenSelfResponse;

        /**
         * Encodes the specified TokenSelfResponse message. Does not implicitly {@link common.TokenSelfResponse.verify|verify} messages.
         * @param message TokenSelfResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.ITokenSelfResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TokenSelfResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TokenSelfResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.TokenSelfResponse;
    }

    /** DevicePlatform enum. */
    enum DevicePlatform {
        UNKNOWN = 0,
        iOS = 1,
        ANDROID = 2,
        WEB = 3
    }

    /** SensorType enum. */
    enum SensorType {
        UNKNOWN_SENSOR = 0,
        LOCATION = 1,
        ACCELEROMETER = 2,
        LINEAR_ACCELEROMETER = 3,
        MAGNETOMETER = 4,
        GYROSCOPE = 5,
        BATTERY = 6,
        ORIENTATION = 7,
        POINTER = 14,
        TEXT_CHANGE = 15,
        KEY_PRESS = 16,
        FOCUS_CHANGE = 17,
        VIEW_SCROLL = 18,
        MOUSE_WHEEL = 19,
        CLICK = 20,
        INPUT_CHANGE = 21,
        FORM_SUBMIT = 22,
        CONTEXT_MENU = 23,
        FRAME_RATE = 24
    }
}

/** Namespace feature. */
export namespace feature {

    /** Properties of a BytesList. */
    interface IBytesList {

        /** BytesList value */
        value?: (Uint8Array[]|null);
    }

    /** Represents a BytesList. */
    class BytesList implements IBytesList {

        /**
         * Constructs a new BytesList.
         * @param [properties] Properties to set
         */
        constructor(properties?: feature.IBytesList);

        /** BytesList value. */
        public value: Uint8Array[];

        /**
         * Creates a new BytesList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BytesList instance
         */
        public static create(properties?: feature.IBytesList): feature.BytesList;

        /**
         * Encodes the specified BytesList message. Does not implicitly {@link feature.BytesList.verify|verify} messages.
         * @param message BytesList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: feature.IBytesList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BytesList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BytesList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): feature.BytesList;
    }

    /** Properties of a DoubleList. */
    interface IDoubleList {

        /** DoubleList value */
        value?: (number[]|null);
    }

    /** Represents a DoubleList. */
    class DoubleList implements IDoubleList {

        /**
         * Constructs a new DoubleList.
         * @param [properties] Properties to set
         */
        constructor(properties?: feature.IDoubleList);

        /** DoubleList value. */
        public value: number[];

        /**
         * Creates a new DoubleList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DoubleList instance
         */
        public static create(properties?: feature.IDoubleList): feature.DoubleList;

        /**
         * Encodes the specified DoubleList message. Does not implicitly {@link feature.DoubleList.verify|verify} messages.
         * @param message DoubleList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: feature.IDoubleList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DoubleList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DoubleList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): feature.DoubleList;
    }

    /** Properties of a DoubleMap. */
    interface IDoubleMap {

        /** DoubleMap value */
        value?: ({ [k: string]: number }|null);
    }

    /** Represents a DoubleMap. */
    class DoubleMap implements IDoubleMap {

        /**
         * Constructs a new DoubleMap.
         * @param [properties] Properties to set
         */
        constructor(properties?: feature.IDoubleMap);

        /** DoubleMap value. */
        public value: { [k: string]: number };

        /**
         * Creates a new DoubleMap instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DoubleMap instance
         */
        public static create(properties?: feature.IDoubleMap): feature.DoubleMap;

        /**
         * Encodes the specified DoubleMap message. Does not implicitly {@link feature.DoubleMap.verify|verify} messages.
         * @param message DoubleMap message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: feature.IDoubleMap, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DoubleMap message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DoubleMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): feature.DoubleMap;
    }

    /** Properties of an Int64List. */
    interface IInt64List {

        /** Int64List value */
        value?: (number[]|null);
    }

    /** Represents an Int64List. */
    class Int64List implements IInt64List {

        /**
         * Constructs a new Int64List.
         * @param [properties] Properties to set
         */
        constructor(properties?: feature.IInt64List);

        /** Int64List value. */
        public value: number[];

        /**
         * Creates a new Int64List instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Int64List instance
         */
        public static create(properties?: feature.IInt64List): feature.Int64List;

        /**
         * Encodes the specified Int64List message. Does not implicitly {@link feature.Int64List.verify|verify} messages.
         * @param message Int64List message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: feature.IInt64List, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Int64List message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Int64List
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): feature.Int64List;
    }

    /** Properties of a StringList. */
    interface IStringList {

        /** StringList value */
        value?: (string[]|null);
    }

    /** Represents a StringList. */
    class StringList implements IStringList {

        /**
         * Constructs a new StringList.
         * @param [properties] Properties to set
         */
        constructor(properties?: feature.IStringList);

        /** StringList value. */
        public value: string[];

        /**
         * Creates a new StringList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StringList instance
         */
        public static create(properties?: feature.IStringList): feature.StringList;

        /**
         * Encodes the specified StringList message. Does not implicitly {@link feature.StringList.verify|verify} messages.
         * @param message StringList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: feature.IStringList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StringList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StringList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): feature.StringList;
    }

    /** Properties of a Feature. */
    interface IFeature {

        /** Feature bytesList */
        bytesList?: (feature.IBytesList|null);

        /** Feature doubleList */
        doubleList?: (feature.IDoubleList|null);

        /** Feature int64List */
        int64List?: (feature.IInt64List|null);

        /** Feature stringList */
        stringList?: (feature.IStringList|null);

        /** Feature doubleMap */
        doubleMap?: (feature.IDoubleMap|null);
    }

    /** Represents a Feature. */
    class Feature implements IFeature {

        /**
         * Constructs a new Feature.
         * @param [properties] Properties to set
         */
        constructor(properties?: feature.IFeature);

        /** Feature bytesList. */
        public bytesList?: (feature.IBytesList|null);

        /** Feature doubleList. */
        public doubleList?: (feature.IDoubleList|null);

        /** Feature int64List. */
        public int64List?: (feature.IInt64List|null);

        /** Feature stringList. */
        public stringList?: (feature.IStringList|null);

        /** Feature doubleMap. */
        public doubleMap?: (feature.IDoubleMap|null);

        /** Feature kind. */
        public kind?: ("bytesList"|"doubleList"|"int64List"|"stringList"|"doubleMap");

        /**
         * Creates a new Feature instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Feature instance
         */
        public static create(properties?: feature.IFeature): feature.Feature;

        /**
         * Encodes the specified Feature message. Does not implicitly {@link feature.Feature.verify|verify} messages.
         * @param message Feature message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: feature.IFeature, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Feature message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Feature
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): feature.Feature;
    }
}

/** Namespace controlplane. */
export namespace controlplane {

    /** Properties of a DataPlaneRegion. */
    interface IDataPlaneRegion {

        /** DataPlaneRegion name */
        name?: (string|null);

        /** DataPlaneRegion url */
        url?: (string|null);

        /** DataPlaneRegion lat */
        lat?: (number|null);

        /** DataPlaneRegion lon */
        lon?: (number|null);

        /** DataPlaneRegion region */
        region?: (string|null);

        /** DataPlaneRegion labels */
        labels?: (string[]|null);

        /** DataPlaneRegion defaultPrimary */
        defaultPrimary?: (boolean|null);

        /** DataPlaneRegion defaultBackup */
        defaultBackup?: (boolean|null);

        /** DataPlaneRegion status */
        status?: (string|null);
    }

    /** Represents a DataPlaneRegion. */
    class DataPlaneRegion implements IDataPlaneRegion {

        /**
         * Constructs a new DataPlaneRegion.
         * @param [properties] Properties to set
         */
        constructor(properties?: controlplane.IDataPlaneRegion);

        /** DataPlaneRegion name. */
        public name: string;

        /** DataPlaneRegion url. */
        public url: string;

        /** DataPlaneRegion lat. */
        public lat: number;

        /** DataPlaneRegion lon. */
        public lon: number;

        /** DataPlaneRegion region. */
        public region: string;

        /** DataPlaneRegion labels. */
        public labels: string[];

        /** DataPlaneRegion defaultPrimary. */
        public defaultPrimary: boolean;

        /** DataPlaneRegion defaultBackup. */
        public defaultBackup: boolean;

        /** DataPlaneRegion status. */
        public status: string;

        /**
         * Creates a new DataPlaneRegion instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DataPlaneRegion instance
         */
        public static create(properties?: controlplane.IDataPlaneRegion): controlplane.DataPlaneRegion;

        /**
         * Encodes the specified DataPlaneRegion message. Does not implicitly {@link controlplane.DataPlaneRegion.verify|verify} messages.
         * @param message DataPlaneRegion message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: controlplane.IDataPlaneRegion, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DataPlaneRegion message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DataPlaneRegion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): controlplane.DataPlaneRegion;
    }

    /** Properties of a DataRegionsLocateResponse. */
    interface IDataRegionsLocateResponse {

        /** DataRegionsLocateResponse primaryUrl */
        primaryUrl?: (string|null);

        /** DataRegionsLocateResponse backupUrl */
        backupUrl?: (string|null);

        /** DataRegionsLocateResponse primaryNetworkUrl */
        primaryNetworkUrl?: (string|null);

        /** DataRegionsLocateResponse backupNetworkUrl */
        backupNetworkUrl?: (string|null);
    }

    /** Represents a DataRegionsLocateResponse. */
    class DataRegionsLocateResponse implements IDataRegionsLocateResponse {

        /**
         * Constructs a new DataRegionsLocateResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: controlplane.IDataRegionsLocateResponse);

        /** DataRegionsLocateResponse primaryUrl. */
        public primaryUrl: string;

        /** DataRegionsLocateResponse backupUrl. */
        public backupUrl: string;

        /** DataRegionsLocateResponse primaryNetworkUrl. */
        public primaryNetworkUrl: string;

        /** DataRegionsLocateResponse backupNetworkUrl. */
        public backupNetworkUrl: string;

        /**
         * Creates a new DataRegionsLocateResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DataRegionsLocateResponse instance
         */
        public static create(properties?: controlplane.IDataRegionsLocateResponse): controlplane.DataRegionsLocateResponse;

        /**
         * Encodes the specified DataRegionsLocateResponse message. Does not implicitly {@link controlplane.DataRegionsLocateResponse.verify|verify} messages.
         * @param message DataRegionsLocateResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: controlplane.IDataRegionsLocateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DataRegionsLocateResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DataRegionsLocateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): controlplane.DataRegionsLocateResponse;
    }

    /** Properties of a DataRegionsListResponse. */
    interface IDataRegionsListResponse {

        /** DataRegionsListResponse regions */
        regions?: (controlplane.IDataPlaneRegion[]|null);
    }

    /** Represents a DataRegionsListResponse. */
    class DataRegionsListResponse implements IDataRegionsListResponse {

        /**
         * Constructs a new DataRegionsListResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: controlplane.IDataRegionsListResponse);

        /** DataRegionsListResponse regions. */
        public regions: controlplane.IDataPlaneRegion[];

        /**
         * Creates a new DataRegionsListResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DataRegionsListResponse instance
         */
        public static create(properties?: controlplane.IDataRegionsListResponse): controlplane.DataRegionsListResponse;

        /**
         * Encodes the specified DataRegionsListResponse message. Does not implicitly {@link controlplane.DataRegionsListResponse.verify|verify} messages.
         * @param message DataRegionsListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: controlplane.IDataRegionsListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DataRegionsListResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DataRegionsListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): controlplane.DataRegionsListResponse;
    }

    /** Properties of a TokenUpgradeRequest. */
    interface ITokenUpgradeRequest {

        /** TokenUpgradeRequest publicToken */
        publicToken?: (string|null);

        /** TokenUpgradeRequest userId */
        userId?: (string|null);

        /** TokenUpgradeRequest expiresInSeconds */
        expiresInSeconds?: (number|null);

        /** TokenUpgradeRequest maxIdleTimeMinutes */
        maxIdleTimeMinutes?: (number|null);
    }

    /** Represents a TokenUpgradeRequest. */
    class TokenUpgradeRequest implements ITokenUpgradeRequest {

        /**
         * Constructs a new TokenUpgradeRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: controlplane.ITokenUpgradeRequest);

        /** TokenUpgradeRequest publicToken. */
        public publicToken: string;

        /** TokenUpgradeRequest userId. */
        public userId: string;

        /** TokenUpgradeRequest expiresInSeconds. */
        public expiresInSeconds: number;

        /** TokenUpgradeRequest maxIdleTimeMinutes. */
        public maxIdleTimeMinutes: number;

        /**
         * Creates a new TokenUpgradeRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TokenUpgradeRequest instance
         */
        public static create(properties?: controlplane.ITokenUpgradeRequest): controlplane.TokenUpgradeRequest;

        /**
         * Encodes the specified TokenUpgradeRequest message. Does not implicitly {@link controlplane.TokenUpgradeRequest.verify|verify} messages.
         * @param message TokenUpgradeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: controlplane.ITokenUpgradeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TokenUpgradeRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TokenUpgradeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): controlplane.TokenUpgradeRequest;
    }

    /** Properties of a TokenUpgradeResponse. */
    interface ITokenUpgradeResponse {

        /** TokenUpgradeResponse appAccessToken */
        appAccessToken?: (string|null);
    }

    /** Represents a TokenUpgradeResponse. */
    class TokenUpgradeResponse implements ITokenUpgradeResponse {

        /**
         * Constructs a new TokenUpgradeResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: controlplane.ITokenUpgradeResponse);

        /** TokenUpgradeResponse appAccessToken. */
        public appAccessToken: string;

        /**
         * Creates a new TokenUpgradeResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TokenUpgradeResponse instance
         */
        public static create(properties?: controlplane.ITokenUpgradeResponse): controlplane.TokenUpgradeResponse;

        /**
         * Encodes the specified TokenUpgradeResponse message. Does not implicitly {@link controlplane.TokenUpgradeResponse.verify|verify} messages.
         * @param message TokenUpgradeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: controlplane.ITokenUpgradeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TokenUpgradeResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TokenUpgradeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): controlplane.TokenUpgradeResponse;
    }

    /** Properties of a RevokeAppTokenRequest. */
    interface IRevokeAppTokenRequest {

        /** RevokeAppTokenRequest userId */
        userId?: (string|null);
    }

    /** Represents a RevokeAppTokenRequest. */
    class RevokeAppTokenRequest implements IRevokeAppTokenRequest {

        /**
         * Constructs a new RevokeAppTokenRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: controlplane.IRevokeAppTokenRequest);

        /** RevokeAppTokenRequest userId. */
        public userId: string;

        /**
         * Creates a new RevokeAppTokenRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RevokeAppTokenRequest instance
         */
        public static create(properties?: controlplane.IRevokeAppTokenRequest): controlplane.RevokeAppTokenRequest;

        /**
         * Encodes the specified RevokeAppTokenRequest message. Does not implicitly {@link controlplane.RevokeAppTokenRequest.verify|verify} messages.
         * @param message RevokeAppTokenRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: controlplane.IRevokeAppTokenRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RevokeAppTokenRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RevokeAppTokenRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): controlplane.RevokeAppTokenRequest;
    }
}

/** Namespace dataplane. */
export namespace dataplane {

    /** Properties of a LatitudeLongitude. */
    interface ILatitudeLongitude {

        /** LatitudeLongitude latitude */
        latitude?: (number|null);

        /** LatitudeLongitude longitude */
        longitude?: (number|null);
    }

    /** Represents a LatitudeLongitude. */
    class LatitudeLongitude implements ILatitudeLongitude {

        /**
         * Constructs a new LatitudeLongitude.
         * @param [properties] Properties to set
         */
        constructor(properties?: dataplane.ILatitudeLongitude);

        /** LatitudeLongitude latitude. */
        public latitude: number;

        /** LatitudeLongitude longitude. */
        public longitude: number;

        /**
         * Creates a new LatitudeLongitude instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LatitudeLongitude instance
         */
        public static create(properties?: dataplane.ILatitudeLongitude): dataplane.LatitudeLongitude;

        /**
         * Encodes the specified LatitudeLongitude message. Does not implicitly {@link dataplane.LatitudeLongitude.verify|verify} messages.
         * @param message LatitudeLongitude message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dataplane.ILatitudeLongitude, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LatitudeLongitude message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LatitudeLongitude
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dataplane.LatitudeLongitude;
    }

    /** Properties of a BoundingCircle. */
    interface IBoundingCircle {

        /** BoundingCircle centroid */
        centroid?: (dataplane.ILatitudeLongitude|null);

        /** BoundingCircle radius */
        radius?: (number|null);
    }

    /** Represents a BoundingCircle. */
    class BoundingCircle implements IBoundingCircle {

        /**
         * Constructs a new BoundingCircle.
         * @param [properties] Properties to set
         */
        constructor(properties?: dataplane.IBoundingCircle);

        /** BoundingCircle centroid. */
        public centroid?: (dataplane.ILatitudeLongitude|null);

        /** BoundingCircle radius. */
        public radius: number;

        /**
         * Creates a new BoundingCircle instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BoundingCircle instance
         */
        public static create(properties?: dataplane.IBoundingCircle): dataplane.BoundingCircle;

        /**
         * Encodes the specified BoundingCircle message. Does not implicitly {@link dataplane.BoundingCircle.verify|verify} messages.
         * @param message BoundingCircle message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dataplane.IBoundingCircle, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BoundingCircle message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BoundingCircle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dataplane.BoundingCircle;
    }

    /** Properties of a RecordingProfile. */
    interface IRecordingProfile {

        /** RecordingProfile name */
        name?: (string|null);

        /** RecordingProfile version */
        version?: (number|null);
    }

    /** Represents a RecordingProfile. */
    class RecordingProfile implements IRecordingProfile {

        /**
         * Constructs a new RecordingProfile.
         * @param [properties] Properties to set
         */
        constructor(properties?: dataplane.IRecordingProfile);

        /** RecordingProfile name. */
        public name: string;

        /** RecordingProfile version. */
        public version: number;

        /**
         * Creates a new RecordingProfile instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RecordingProfile instance
         */
        public static create(properties?: dataplane.IRecordingProfile): dataplane.RecordingProfile;

        /**
         * Encodes the specified RecordingProfile message. Does not implicitly {@link dataplane.RecordingProfile.verify|verify} messages.
         * @param message RecordingProfile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dataplane.IRecordingProfile, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RecordingProfile message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RecordingProfile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dataplane.RecordingProfile;
    }

    /** Properties of a SessionMetadata. */
    interface ISessionMetadata {

        /** SessionMetadata installId */
        installId?: (string|null);

        /** SessionMetadata platform */
        platform?: (dataplane.SessionMetadata.Platform|null);

        /** SessionMetadata manufacturer */
        manufacturer?: (string|null);

        /** SessionMetadata model */
        model?: (string|null);

        /** SessionMetadata systemVersion */
        systemVersion?: (string|null);

        /** SessionMetadata isDevicePhysical */
        isDevicePhysical?: (boolean|null);

        /** SessionMetadata recordingProfile */
        recordingProfile?: (dataplane.IRecordingProfile|null);

        /** SessionMetadata devicePhysicalWidth */
        devicePhysicalWidth?: (number|null);

        /** SessionMetadata devicePhysicalHeight */
        devicePhysicalHeight?: (number|null);

        /** SessionMetadata deviceLogicalWidth */
        deviceLogicalWidth?: (number|null);

        /** SessionMetadata deviceLogicalHeight */
        deviceLogicalHeight?: (number|null);

        /** SessionMetadata devicePixelRatio */
        devicePixelRatio?: (number|null);

        /** SessionMetadata releaseVersion */
        releaseVersion?: (string|null);
    }

    /** Represents a SessionMetadata. */
    class SessionMetadata implements ISessionMetadata {

        /**
         * Constructs a new SessionMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: dataplane.ISessionMetadata);

        /** SessionMetadata installId. */
        public installId: string;

        /** SessionMetadata platform. */
        public platform: dataplane.SessionMetadata.Platform;

        /** SessionMetadata manufacturer. */
        public manufacturer: string;

        /** SessionMetadata model. */
        public model: string;

        /** SessionMetadata systemVersion. */
        public systemVersion: string;

        /** SessionMetadata isDevicePhysical. */
        public isDevicePhysical: boolean;

        /** SessionMetadata recordingProfile. */
        public recordingProfile?: (dataplane.IRecordingProfile|null);

        /** SessionMetadata devicePhysicalWidth. */
        public devicePhysicalWidth: number;

        /** SessionMetadata devicePhysicalHeight. */
        public devicePhysicalHeight: number;

        /** SessionMetadata deviceLogicalWidth. */
        public deviceLogicalWidth: number;

        /** SessionMetadata deviceLogicalHeight. */
        public deviceLogicalHeight: number;

        /** SessionMetadata devicePixelRatio. */
        public devicePixelRatio: number;

        /** SessionMetadata releaseVersion. */
        public releaseVersion: string;

        /**
         * Creates a new SessionMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SessionMetadata instance
         */
        public static create(properties?: dataplane.ISessionMetadata): dataplane.SessionMetadata;

        /**
         * Encodes the specified SessionMetadata message. Does not implicitly {@link dataplane.SessionMetadata.verify|verify} messages.
         * @param message SessionMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dataplane.ISessionMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SessionMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SessionMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dataplane.SessionMetadata;
    }

    namespace SessionMetadata {

        /** Platform enum. */
        enum Platform {
            UNKNOWN = 0,
            iOS = 1,
            ANDROID = 2,
            WEB = 3
        }
    }

    /** Properties of a SessionConfig. */
    interface ISessionConfig {

        /** SessionConfig requestedDurationMillis */
        requestedDurationMillis?: (number|null);

        /** SessionConfig maskText */
        maskText?: (boolean|null);

        /** SessionConfig sensorSamplingRate */
        sensorSamplingRate?: (number|null);

        /** SessionConfig bundleGenerationIntervalMillis */
        bundleGenerationIntervalMillis?: (number|null);

        /** SessionConfig requestedSensors */
        requestedSensors?: (common.SensorType[]|null);
    }

    /** Represents a SessionConfig. */
    class SessionConfig implements ISessionConfig {

        /**
         * Constructs a new SessionConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: dataplane.ISessionConfig);

        /** SessionConfig requestedDurationMillis. */
        public requestedDurationMillis: number;

        /** SessionConfig maskText. */
        public maskText: boolean;

        /** SessionConfig sensorSamplingRate. */
        public sensorSamplingRate: number;

        /** SessionConfig bundleGenerationIntervalMillis. */
        public bundleGenerationIntervalMillis: number;

        /** SessionConfig requestedSensors. */
        public requestedSensors: common.SensorType[];

        /**
         * Creates a new SessionConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SessionConfig instance
         */
        public static create(properties?: dataplane.ISessionConfig): dataplane.SessionConfig;

        /**
         * Encodes the specified SessionConfig message. Does not implicitly {@link dataplane.SessionConfig.verify|verify} messages.
         * @param message SessionConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dataplane.ISessionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SessionConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SessionConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dataplane.SessionConfig;
    }

    /** Properties of a SessionLabel. */
    interface ISessionLabel {

        /** SessionLabel labelId */
        labelId?: (string|null);

        /** SessionLabel sessionLabelId */
        sessionLabelId?: (string|null);

        /** SessionLabel name */
        name?: (string|null);

        /** SessionLabel createdAt */
        createdAt?: (google.protobuf.ITimestamp|null);
    }

    /** Represents a SessionLabel. */
    class SessionLabel implements ISessionLabel {

        /**
         * Constructs a new SessionLabel.
         * @param [properties] Properties to set
         */
        constructor(properties?: dataplane.ISessionLabel);

        /** SessionLabel labelId. */
        public labelId: string;

        /** SessionLabel sessionLabelId. */
        public sessionLabelId: string;

        /** SessionLabel name. */
        public name: string;

        /** SessionLabel createdAt. */
        public createdAt?: (google.protobuf.ITimestamp|null);

        /**
         * Creates a new SessionLabel instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SessionLabel instance
         */
        public static create(properties?: dataplane.ISessionLabel): dataplane.SessionLabel;

        /**
         * Encodes the specified SessionLabel message. Does not implicitly {@link dataplane.SessionLabel.verify|verify} messages.
         * @param message SessionLabel message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dataplane.ISessionLabel, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SessionLabel message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SessionLabel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dataplane.SessionLabel;
    }

    /** Properties of a BucketedCounter. */
    interface IBucketedCounter {

        /** BucketedCounter buckets */
        buckets?: (dataplane.BucketedCounter.IBucket[]|null);

        /** BucketedCounter total */
        total?: (number|null);
    }

    /** Represents a BucketedCounter. */
    class BucketedCounter implements IBucketedCounter {

        /**
         * Constructs a new BucketedCounter.
         * @param [properties] Properties to set
         */
        constructor(properties?: dataplane.IBucketedCounter);

        /** BucketedCounter buckets. */
        public buckets: dataplane.BucketedCounter.IBucket[];

        /** BucketedCounter total. */
        public total: number;

        /**
         * Creates a new BucketedCounter instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BucketedCounter instance
         */
        public static create(properties?: dataplane.IBucketedCounter): dataplane.BucketedCounter;

        /**
         * Encodes the specified BucketedCounter message. Does not implicitly {@link dataplane.BucketedCounter.verify|verify} messages.
         * @param message BucketedCounter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dataplane.IBucketedCounter, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BucketedCounter message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BucketedCounter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dataplane.BucketedCounter;
    }

    namespace BucketedCounter {

        /** Properties of a Bucket. */
        interface IBucket {

            /** Bucket startTime */
            startTime?: (number|null);

            /** Bucket value */
            value?: (number|null);
        }

        /** Represents a Bucket. */
        class Bucket implements IBucket {

            /**
             * Constructs a new Bucket.
             * @param [properties] Properties to set
             */
            constructor(properties?: dataplane.BucketedCounter.IBucket);

            /** Bucket startTime. */
            public startTime: number;

            /** Bucket value. */
            public value: number;

            /**
             * Creates a new Bucket instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Bucket instance
             */
            public static create(properties?: dataplane.BucketedCounter.IBucket): dataplane.BucketedCounter.Bucket;

            /**
             * Encodes the specified Bucket message. Does not implicitly {@link dataplane.BucketedCounter.Bucket.verify|verify} messages.
             * @param message Bucket message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: dataplane.BucketedCounter.IBucket, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Bucket message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Bucket
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dataplane.BucketedCounter.Bucket;
        }
    }

    /** Properties of a CDF. */
    interface ICDF {

        /** CDF values */
        values?: (number[]|null);
    }

    /** Represents a CDF. */
    class CDF implements ICDF {

        /**
         * Constructs a new CDF.
         * @param [properties] Properties to set
         */
        constructor(properties?: dataplane.ICDF);

        /** CDF values. */
        public values: number[];

        /**
         * Creates a new CDF instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CDF instance
         */
        public static create(properties?: dataplane.ICDF): dataplane.CDF;

        /**
         * Encodes the specified CDF message. Does not implicitly {@link dataplane.CDF.verify|verify} messages.
         * @param message CDF message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dataplane.ICDF, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CDF message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CDF
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dataplane.CDF;
    }

    /** Properties of a Session. */
    interface ISession {

        /** Session sessionId */
        sessionId?: (string|null);

        /** Session appId */
        appId?: (string|null);

        /** Session oldestEvent */
        oldestEvent?: (google.protobuf.ITimestamp|null);

        /** Session newestEvent */
        newestEvent?: (google.protobuf.ITimestamp|null);

        /** Session createdAt */
        createdAt?: (google.protobuf.ITimestamp|null);

        /** Session circle */
        circle?: (dataplane.IBoundingCircle|null);

        /** Session metadata */
        metadata?: (dataplane.ISessionMetadata|null);

        /** Session counters */
        counters?: ({ [k: string]: dataplane.IBucketedCounter }|null);

        /** Session labels */
        labels?: (dataplane.ISessionLabel[]|null);

        /** Session cdfs */
        cdfs?: ({ [k: string]: dataplane.ICDF }|null);

        /** Session regionId */
        regionId?: (string|null);

        /** Session clientSessionGroupId */
        clientSessionGroupId?: (string|null);

        /** Session config */
        config?: (dataplane.ISessionConfig|null);

        /** Session journeyId */
        journeyId?: (string|null);
    }

    /** Represents a Session. */
    class Session implements ISession {

        /**
         * Constructs a new Session.
         * @param [properties] Properties to set
         */
        constructor(properties?: dataplane.ISession);

        /** Session sessionId. */
        public sessionId: string;

        /** Session appId. */
        public appId: string;

        /** Session oldestEvent. */
        public oldestEvent?: (google.protobuf.ITimestamp|null);

        /** Session newestEvent. */
        public newestEvent?: (google.protobuf.ITimestamp|null);

        /** Session createdAt. */
        public createdAt?: (google.protobuf.ITimestamp|null);

        /** Session circle. */
        public circle?: (dataplane.IBoundingCircle|null);

        /** Session metadata. */
        public metadata?: (dataplane.ISessionMetadata|null);

        /** Session counters. */
        public counters: { [k: string]: dataplane.IBucketedCounter };

        /** Session labels. */
        public labels: dataplane.ISessionLabel[];

        /** Session cdfs. */
        public cdfs: { [k: string]: dataplane.ICDF };

        /** Session regionId. */
        public regionId: string;

        /** Session clientSessionGroupId. */
        public clientSessionGroupId: string;

        /** Session config. */
        public config?: (dataplane.ISessionConfig|null);

        /** Session journeyId. */
        public journeyId: string;

        /**
         * Creates a new Session instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Session instance
         */
        public static create(properties?: dataplane.ISession): dataplane.Session;

        /**
         * Encodes the specified Session message. Does not implicitly {@link dataplane.Session.verify|verify} messages.
         * @param message Session message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dataplane.ISession, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Session message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Session
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dataplane.Session;
    }

    /** Properties of a SessionLabelCreateRequest. */
    interface ISessionLabelCreateRequest {

        /** SessionLabelCreateRequest labels */
        labels?: (dataplane.ISessionLabel[]|null);
    }

    /** Represents a SessionLabelCreateRequest. */
    class SessionLabelCreateRequest implements ISessionLabelCreateRequest {

        /**
         * Constructs a new SessionLabelCreateRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: dataplane.ISessionLabelCreateRequest);

        /** SessionLabelCreateRequest labels. */
        public labels: dataplane.ISessionLabel[];

        /**
         * Creates a new SessionLabelCreateRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SessionLabelCreateRequest instance
         */
        public static create(properties?: dataplane.ISessionLabelCreateRequest): dataplane.SessionLabelCreateRequest;

        /**
         * Encodes the specified SessionLabelCreateRequest message. Does not implicitly {@link dataplane.SessionLabelCreateRequest.verify|verify} messages.
         * @param message SessionLabelCreateRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dataplane.ISessionLabelCreateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SessionLabelCreateRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SessionLabelCreateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dataplane.SessionLabelCreateRequest;
    }

    /** Properties of a SessionLabelCreateResponse. */
    interface ISessionLabelCreateResponse {
    }

    /** Represents a SessionLabelCreateResponse. */
    class SessionLabelCreateResponse implements ISessionLabelCreateResponse {

        /**
         * Constructs a new SessionLabelCreateResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: dataplane.ISessionLabelCreateResponse);

        /**
         * Creates a new SessionLabelCreateResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SessionLabelCreateResponse instance
         */
        public static create(properties?: dataplane.ISessionLabelCreateResponse): dataplane.SessionLabelCreateResponse;

        /**
         * Encodes the specified SessionLabelCreateResponse message. Does not implicitly {@link dataplane.SessionLabelCreateResponse.verify|verify} messages.
         * @param message SessionLabelCreateResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dataplane.ISessionLabelCreateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SessionLabelCreateResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SessionLabelCreateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dataplane.SessionLabelCreateResponse;
    }

    /** Properties of a NetworkPacketCaptureClientResponse. */
    interface INetworkPacketCaptureClientResponse {

        /** NetworkPacketCaptureClientResponse sessionId */
        sessionId?: (string|null);
    }

    /** Represents a NetworkPacketCaptureClientResponse. */
    class NetworkPacketCaptureClientResponse implements INetworkPacketCaptureClientResponse {

        /**
         * Constructs a new NetworkPacketCaptureClientResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: dataplane.INetworkPacketCaptureClientResponse);

        /** NetworkPacketCaptureClientResponse sessionId. */
        public sessionId: string;

        /**
         * Creates a new NetworkPacketCaptureClientResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NetworkPacketCaptureClientResponse instance
         */
        public static create(properties?: dataplane.INetworkPacketCaptureClientResponse): dataplane.NetworkPacketCaptureClientResponse;

        /**
         * Encodes the specified NetworkPacketCaptureClientResponse message. Does not implicitly {@link dataplane.NetworkPacketCaptureClientResponse.verify|verify} messages.
         * @param message NetworkPacketCaptureClientResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dataplane.INetworkPacketCaptureClientResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NetworkPacketCaptureClientResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NetworkPacketCaptureClientResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dataplane.NetworkPacketCaptureClientResponse;
    }

    /** Properties of a BundleCreateRequest. */
    interface IBundleCreateRequest {

        /** BundleCreateRequest sessionId */
        sessionId?: (string|null);

        /** BundleCreateRequest bundles */
        bundles?: (bundle.IBundle[]|null);

        /** BundleCreateRequest installId */
        installId?: (string|null);

        /** BundleCreateRequest clientUserId */
        clientUserId?: (string|null);
    }

    /** Represents a BundleCreateRequest. */
    class BundleCreateRequest implements IBundleCreateRequest {

        /**
         * Constructs a new BundleCreateRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: dataplane.IBundleCreateRequest);

        /** BundleCreateRequest sessionId. */
        public sessionId: string;

        /** BundleCreateRequest bundles. */
        public bundles: bundle.IBundle[];

        /** BundleCreateRequest installId. */
        public installId: string;

        /** BundleCreateRequest clientUserId. */
        public clientUserId: string;

        /**
         * Creates a new BundleCreateRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BundleCreateRequest instance
         */
        public static create(properties?: dataplane.IBundleCreateRequest): dataplane.BundleCreateRequest;

        /**
         * Encodes the specified BundleCreateRequest message. Does not implicitly {@link dataplane.BundleCreateRequest.verify|verify} messages.
         * @param message BundleCreateRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dataplane.IBundleCreateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BundleCreateRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BundleCreateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dataplane.BundleCreateRequest;
    }

    /** Properties of a BundleCreateResponse. */
    interface IBundleCreateResponse {

        /** BundleCreateResponse errorCount */
        errorCount?: (number|null);

        /** BundleCreateResponse successCount */
        successCount?: (number|null);
    }

    /** Represents a BundleCreateResponse. */
    class BundleCreateResponse implements IBundleCreateResponse {

        /**
         * Constructs a new BundleCreateResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: dataplane.IBundleCreateResponse);

        /** BundleCreateResponse errorCount. */
        public errorCount: number;

        /** BundleCreateResponse successCount. */
        public successCount: number;

        /**
         * Creates a new BundleCreateResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BundleCreateResponse instance
         */
        public static create(properties?: dataplane.IBundleCreateResponse): dataplane.BundleCreateResponse;

        /**
         * Encodes the specified BundleCreateResponse message. Does not implicitly {@link dataplane.BundleCreateResponse.verify|verify} messages.
         * @param message BundleCreateResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dataplane.IBundleCreateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BundleCreateResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BundleCreateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dataplane.BundleCreateResponse;
    }

    /** Properties of a LabelWithStats. */
    interface ILabelWithStats {

        /** LabelWithStats name */
        name?: (string|null);

        /** LabelWithStats sessionsCount */
        sessionsCount?: (number|null);
    }

    /** Represents a LabelWithStats. */
    class LabelWithStats implements ILabelWithStats {

        /**
         * Constructs a new LabelWithStats.
         * @param [properties] Properties to set
         */
        constructor(properties?: dataplane.ILabelWithStats);

        /** LabelWithStats name. */
        public name: string;

        /** LabelWithStats sessionsCount. */
        public sessionsCount: number;

        /**
         * Creates a new LabelWithStats instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LabelWithStats instance
         */
        public static create(properties?: dataplane.ILabelWithStats): dataplane.LabelWithStats;

        /**
         * Encodes the specified LabelWithStats message. Does not implicitly {@link dataplane.LabelWithStats.verify|verify} messages.
         * @param message LabelWithStats message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dataplane.ILabelWithStats, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LabelWithStats message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LabelWithStats
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dataplane.LabelWithStats;
    }

    /** Properties of an App. */
    interface IApp {

        /** App appId */
        appId?: (string|null);

        /** App projectId */
        projectId?: (string|null);

        /** App createdAt */
        createdAt?: (google.protobuf.ITimestamp|null);
    }

    /** Represents an App. */
    class App implements IApp {

        /**
         * Constructs a new App.
         * @param [properties] Properties to set
         */
        constructor(properties?: dataplane.IApp);

        /** App appId. */
        public appId: string;

        /** App projectId. */
        public projectId: string;

        /** App createdAt. */
        public createdAt?: (google.protobuf.ITimestamp|null);

        /**
         * Creates a new App instance using the specified properties.
         * @param [properties] Properties to set
         * @returns App instance
         */
        public static create(properties?: dataplane.IApp): dataplane.App;

        /**
         * Encodes the specified App message. Does not implicitly {@link dataplane.App.verify|verify} messages.
         * @param message App message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dataplane.IApp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an App message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns App
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dataplane.App;
    }

    /** Properties of an AppStats. */
    interface IAppStats {

        /** AppStats appId */
        appId?: (string|null);

        /** AppStats recordingProfileStats */
        recordingProfileStats?: ({ [k: string]: number }|null);
    }

    /** Represents an AppStats. */
    class AppStats implements IAppStats {

        /**
         * Constructs a new AppStats.
         * @param [properties] Properties to set
         */
        constructor(properties?: dataplane.IAppStats);

        /** AppStats appId. */
        public appId: string;

        /** AppStats recordingProfileStats. */
        public recordingProfileStats: { [k: string]: number };

        /**
         * Creates a new AppStats instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AppStats instance
         */
        public static create(properties?: dataplane.IAppStats): dataplane.AppStats;

        /**
         * Encodes the specified AppStats message. Does not implicitly {@link dataplane.AppStats.verify|verify} messages.
         * @param message AppStats message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dataplane.IAppStats, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AppStats message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AppStats
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dataplane.AppStats;
    }

    /** Properties of a Chunk. */
    interface IChunk {

        /** Chunk chunkId */
        chunkId?: (string|null);

        /** Chunk md5 */
        md5?: (string|null);

        /** Chunk createdAt */
        createdAt?: (google.protobuf.ITimestamp|null);
    }

    /** Represents a Chunk. */
    class Chunk implements IChunk {

        /**
         * Constructs a new Chunk.
         * @param [properties] Properties to set
         */
        constructor(properties?: dataplane.IChunk);

        /** Chunk chunkId. */
        public chunkId: string;

        /** Chunk md5. */
        public md5: string;

        /** Chunk createdAt. */
        public createdAt?: (google.protobuf.ITimestamp|null);

        /**
         * Creates a new Chunk instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Chunk instance
         */
        public static create(properties?: dataplane.IChunk): dataplane.Chunk;

        /**
         * Encodes the specified Chunk message. Does not implicitly {@link dataplane.Chunk.verify|verify} messages.
         * @param message Chunk message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dataplane.IChunk, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Chunk message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Chunk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dataplane.Chunk;
    }

    /** Properties of a Card. */
    interface ICard {

        /** Card sessionId */
        sessionId?: (string|null);

        /** Card cardId */
        cardId?: (string|null);

        /** Card title */
        title?: (string|null);

        /** Card description */
        description?: (string|null);

        /** Card sourceType */
        sourceType?: (string|null);

        /** Card sourceId */
        sourceId?: (string|null);

        /** Card payload */
        payload?: (string|null);

        /** Card createdAt */
        createdAt?: (google.protobuf.ITimestamp|null);
    }

    /** Represents a Card. */
    class Card implements ICard {

        /**
         * Constructs a new Card.
         * @param [properties] Properties to set
         */
        constructor(properties?: dataplane.ICard);

        /** Card sessionId. */
        public sessionId: string;

        /** Card cardId. */
        public cardId: string;

        /** Card title. */
        public title: string;

        /** Card description. */
        public description: string;

        /** Card sourceType. */
        public sourceType: string;

        /** Card sourceId. */
        public sourceId: string;

        /** Card payload. */
        public payload: string;

        /** Card createdAt. */
        public createdAt?: (google.protobuf.ITimestamp|null);

        /**
         * Creates a new Card instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Card instance
         */
        public static create(properties?: dataplane.ICard): dataplane.Card;

        /**
         * Encodes the specified Card message. Does not implicitly {@link dataplane.Card.verify|verify} messages.
         * @param message Card message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dataplane.ICard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Card message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Card
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dataplane.Card;
    }

    /** WebhookEventTypes enum. */
    enum WebhookEventTypes {
        UNKNOWN = 0,
        SESSION_CREATED = 1,
        BUNDLE_RECEIVED = 2,
        CHUNK_PERSISTED = 3,
        SESSION_INACTIVE = 4
    }

    /** Properties of a WebhookPayload. */
    interface IWebhookPayload {

        /** WebhookPayload projectId */
        projectId?: (string|null);

        /** WebhookPayload appId */
        appId?: (string|null);

        /** WebhookPayload sessionId */
        sessionId?: (string|null);

        /** WebhookPayload eventType */
        eventType?: (dataplane.WebhookEventTypes|null);

        /** WebhookPayload bundle */
        bundle?: (bundle.ISealedBundle|null);

        /** WebhookPayload clientSessionGroupId */
        clientSessionGroupId?: (string|null);

        /** WebhookPayload sessionLabels */
        sessionLabels?: (string[]|null);

        /** WebhookPayload journeyId */
        journeyId?: (string|null);
    }

    /** Represents a WebhookPayload. */
    class WebhookPayload implements IWebhookPayload {

        /**
         * Constructs a new WebhookPayload.
         * @param [properties] Properties to set
         */
        constructor(properties?: dataplane.IWebhookPayload);

        /** WebhookPayload projectId. */
        public projectId: string;

        /** WebhookPayload appId. */
        public appId: string;

        /** WebhookPayload sessionId. */
        public sessionId: string;

        /** WebhookPayload eventType. */
        public eventType: dataplane.WebhookEventTypes;

        /** WebhookPayload bundle. */
        public bundle?: (bundle.ISealedBundle|null);

        /** WebhookPayload clientSessionGroupId. */
        public clientSessionGroupId: string;

        /** WebhookPayload sessionLabels. */
        public sessionLabels: string[];

        /** WebhookPayload journeyId. */
        public journeyId: string;

        /**
         * Creates a new WebhookPayload instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WebhookPayload instance
         */
        public static create(properties?: dataplane.IWebhookPayload): dataplane.WebhookPayload;

        /**
         * Encodes the specified WebhookPayload message. Does not implicitly {@link dataplane.WebhookPayload.verify|verify} messages.
         * @param message WebhookPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dataplane.IWebhookPayload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WebhookPayload message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WebhookPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dataplane.WebhookPayload;
    }

    /** Properties of a Journey. */
    interface IJourney {

        /** Journey journeyId */
        journeyId?: (string|null);

        /** Journey appId */
        appId?: (string|null);

        /** Journey oldestEvent */
        oldestEvent?: (google.protobuf.ITimestamp|null);

        /** Journey newestEvent */
        newestEvent?: (google.protobuf.ITimestamp|null);

        /** Journey createdAt */
        createdAt?: (google.protobuf.ITimestamp|null);

        /** Journey sessionCount */
        sessionCount?: (number|null);

        /** Journey primaryPlatform */
        primaryPlatform?: (common.DevicePlatform|null);

        /** Journey primaryRegionId */
        primaryRegionId?: (string|null);
    }

    /** Represents a Journey. */
    class Journey implements IJourney {

        /**
         * Constructs a new Journey.
         * @param [properties] Properties to set
         */
        constructor(properties?: dataplane.IJourney);

        /** Journey journeyId. */
        public journeyId: string;

        /** Journey appId. */
        public appId: string;

        /** Journey oldestEvent. */
        public oldestEvent?: (google.protobuf.ITimestamp|null);

        /** Journey newestEvent. */
        public newestEvent?: (google.protobuf.ITimestamp|null);

        /** Journey createdAt. */
        public createdAt?: (google.protobuf.ITimestamp|null);

        /** Journey sessionCount. */
        public sessionCount: number;

        /** Journey primaryPlatform. */
        public primaryPlatform: common.DevicePlatform;

        /** Journey primaryRegionId. */
        public primaryRegionId: string;

        /**
         * Creates a new Journey instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Journey instance
         */
        public static create(properties?: dataplane.IJourney): dataplane.Journey;

        /**
         * Encodes the specified Journey message. Does not implicitly {@link dataplane.Journey.verify|verify} messages.
         * @param message Journey message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dataplane.IJourney, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Journey message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Journey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dataplane.Journey;
    }

    /** Properties of a SessionListResponse. */
    interface ISessionListResponse {

        /** SessionListResponse sessions */
        sessions?: (dataplane.ISession[]|null);

        /** SessionListResponse pagination */
        pagination?: (pagination.IPaginationResponse|null);
    }

    /** Represents a SessionListResponse. */
    class SessionListResponse implements ISessionListResponse {

        /**
         * Constructs a new SessionListResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: dataplane.ISessionListResponse);

        /** SessionListResponse sessions. */
        public sessions: dataplane.ISession[];

        /** SessionListResponse pagination. */
        public pagination?: (pagination.IPaginationResponse|null);

        /**
         * Creates a new SessionListResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SessionListResponse instance
         */
        public static create(properties?: dataplane.ISessionListResponse): dataplane.SessionListResponse;

        /**
         * Encodes the specified SessionListResponse message. Does not implicitly {@link dataplane.SessionListResponse.verify|verify} messages.
         * @param message SessionListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dataplane.ISessionListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SessionListResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SessionListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dataplane.SessionListResponse;
    }

    /** Properties of a SessionDeleteResponse. */
    interface ISessionDeleteResponse {

        /** SessionDeleteResponse sessionId */
        sessionId?: (string|null);
    }

    /** Represents a SessionDeleteResponse. */
    class SessionDeleteResponse implements ISessionDeleteResponse {

        /**
         * Constructs a new SessionDeleteResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: dataplane.ISessionDeleteResponse);

        /** SessionDeleteResponse sessionId. */
        public sessionId: string;

        /**
         * Creates a new SessionDeleteResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SessionDeleteResponse instance
         */
        public static create(properties?: dataplane.ISessionDeleteResponse): dataplane.SessionDeleteResponse;

        /**
         * Encodes the specified SessionDeleteResponse message. Does not implicitly {@link dataplane.SessionDeleteResponse.verify|verify} messages.
         * @param message SessionDeleteResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dataplane.ISessionDeleteResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SessionDeleteResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SessionDeleteResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dataplane.SessionDeleteResponse;
    }

    /** Properties of a JourneyListResponse. */
    interface IJourneyListResponse {

        /** JourneyListResponse journeys */
        journeys?: (dataplane.IJourney[]|null);

        /** JourneyListResponse pagination */
        pagination?: (pagination.IPaginationResponse|null);
    }

    /** Represents a JourneyListResponse. */
    class JourneyListResponse implements IJourneyListResponse {

        /**
         * Constructs a new JourneyListResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: dataplane.IJourneyListResponse);

        /** JourneyListResponse journeys. */
        public journeys: dataplane.IJourney[];

        /** JourneyListResponse pagination. */
        public pagination?: (pagination.IPaginationResponse|null);

        /**
         * Creates a new JourneyListResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JourneyListResponse instance
         */
        public static create(properties?: dataplane.IJourneyListResponse): dataplane.JourneyListResponse;

        /**
         * Encodes the specified JourneyListResponse message. Does not implicitly {@link dataplane.JourneyListResponse.verify|verify} messages.
         * @param message JourneyListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dataplane.IJourneyListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a JourneyListResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns JourneyListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dataplane.JourneyListResponse;
    }

    /** Properties of a JourneyDetailResponse. */
    interface IJourneyDetailResponse {

        /** JourneyDetailResponse journey */
        journey?: (dataplane.IJourney|null);

        /** JourneyDetailResponse sessions */
        sessions?: (dataplane.ISession[]|null);
    }

    /** Represents a JourneyDetailResponse. */
    class JourneyDetailResponse implements IJourneyDetailResponse {

        /**
         * Constructs a new JourneyDetailResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: dataplane.IJourneyDetailResponse);

        /** JourneyDetailResponse journey. */
        public journey?: (dataplane.IJourney|null);

        /** JourneyDetailResponse sessions. */
        public sessions: dataplane.ISession[];

        /**
         * Creates a new JourneyDetailResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JourneyDetailResponse instance
         */
        public static create(properties?: dataplane.IJourneyDetailResponse): dataplane.JourneyDetailResponse;

        /**
         * Encodes the specified JourneyDetailResponse message. Does not implicitly {@link dataplane.JourneyDetailResponse.verify|verify} messages.
         * @param message JourneyDetailResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dataplane.IJourneyDetailResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a JourneyDetailResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns JourneyDetailResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dataplane.JourneyDetailResponse;
    }

    /** Properties of a ChunksListResponse. */
    interface IChunksListResponse {

        /** ChunksListResponse sessionId */
        sessionId?: (string|null);

        /** ChunksListResponse chunks */
        chunks?: (dataplane.IChunk[]|null);

        /** ChunksListResponse pagination */
        pagination?: (pagination.IPaginationResponse|null);
    }

    /** Represents a ChunksListResponse. */
    class ChunksListResponse implements IChunksListResponse {

        /**
         * Constructs a new ChunksListResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: dataplane.IChunksListResponse);

        /** ChunksListResponse sessionId. */
        public sessionId: string;

        /** ChunksListResponse chunks. */
        public chunks: dataplane.IChunk[];

        /** ChunksListResponse pagination. */
        public pagination?: (pagination.IPaginationResponse|null);

        /**
         * Creates a new ChunksListResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChunksListResponse instance
         */
        public static create(properties?: dataplane.IChunksListResponse): dataplane.ChunksListResponse;

        /**
         * Encodes the specified ChunksListResponse message. Does not implicitly {@link dataplane.ChunksListResponse.verify|verify} messages.
         * @param message ChunksListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dataplane.IChunksListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChunksListResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChunksListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dataplane.ChunksListResponse;
    }

    /** Properties of a CardListResponse. */
    interface ICardListResponse {

        /** CardListResponse sessionId */
        sessionId?: (string|null);

        /** CardListResponse cards */
        cards?: (dataplane.ICard[]|null);

        /** CardListResponse pagination */
        pagination?: (pagination.IPaginationResponse|null);
    }

    /** Represents a CardListResponse. */
    class CardListResponse implements ICardListResponse {

        /**
         * Constructs a new CardListResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: dataplane.ICardListResponse);

        /** CardListResponse sessionId. */
        public sessionId: string;

        /** CardListResponse cards. */
        public cards: dataplane.ICard[];

        /** CardListResponse pagination. */
        public pagination?: (pagination.IPaginationResponse|null);

        /**
         * Creates a new CardListResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CardListResponse instance
         */
        public static create(properties?: dataplane.ICardListResponse): dataplane.CardListResponse;

        /**
         * Encodes the specified CardListResponse message. Does not implicitly {@link dataplane.CardListResponse.verify|verify} messages.
         * @param message CardListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dataplane.ICardListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CardListResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CardListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dataplane.CardListResponse;
    }

    /** Properties of a CardDeleteResponse. */
    interface ICardDeleteResponse {

        /** CardDeleteResponse cardId */
        cardId?: (string|null);
    }

    /** Represents a CardDeleteResponse. */
    class CardDeleteResponse implements ICardDeleteResponse {

        /**
         * Constructs a new CardDeleteResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: dataplane.ICardDeleteResponse);

        /** CardDeleteResponse cardId. */
        public cardId: string;

        /**
         * Creates a new CardDeleteResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CardDeleteResponse instance
         */
        public static create(properties?: dataplane.ICardDeleteResponse): dataplane.CardDeleteResponse;

        /**
         * Encodes the specified CardDeleteResponse message. Does not implicitly {@link dataplane.CardDeleteResponse.verify|verify} messages.
         * @param message CardDeleteResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dataplane.ICardDeleteResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CardDeleteResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CardDeleteResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dataplane.CardDeleteResponse;
    }

    /** Properties of a LabelListResponse. */
    interface ILabelListResponse {

        /** LabelListResponse labels */
        labels?: (dataplane.ISessionLabel[]|null);
    }

    /** Represents a LabelListResponse. */
    class LabelListResponse implements ILabelListResponse {

        /**
         * Constructs a new LabelListResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: dataplane.ILabelListResponse);

        /** LabelListResponse labels. */
        public labels: dataplane.ISessionLabel[];

        /**
         * Creates a new LabelListResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LabelListResponse instance
         */
        public static create(properties?: dataplane.ILabelListResponse): dataplane.LabelListResponse;

        /**
         * Encodes the specified LabelListResponse message. Does not implicitly {@link dataplane.LabelListResponse.verify|verify} messages.
         * @param message LabelListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dataplane.ILabelListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LabelListResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LabelListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dataplane.LabelListResponse;
    }

    /** Properties of a LabelsTopResponse. */
    interface ILabelsTopResponse {

        /** LabelsTopResponse labels */
        labels?: (dataplane.ILabelWithStats[]|null);
    }

    /** Represents a LabelsTopResponse. */
    class LabelsTopResponse implements ILabelsTopResponse {

        /**
         * Constructs a new LabelsTopResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: dataplane.ILabelsTopResponse);

        /** LabelsTopResponse labels. */
        public labels: dataplane.ILabelWithStats[];

        /**
         * Creates a new LabelsTopResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LabelsTopResponse instance
         */
        public static create(properties?: dataplane.ILabelsTopResponse): dataplane.LabelsTopResponse;

        /**
         * Encodes the specified LabelsTopResponse message. Does not implicitly {@link dataplane.LabelsTopResponse.verify|verify} messages.
         * @param message LabelsTopResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dataplane.ILabelsTopResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LabelsTopResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LabelsTopResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dataplane.LabelsTopResponse;
    }

    /** Properties of a PaginatedFieldsResponse. */
    interface IPaginatedFieldsResponse {

        /** PaginatedFieldsResponse bundle */
        bundle?: (bundle.IBundle|null);

        /** PaginatedFieldsResponse maxDeterminedAt */
        maxDeterminedAt?: (number|null);

        /** PaginatedFieldsResponse fromBundleCursor */
        fromBundleCursor?: (number|null);
    }

    /** Represents a PaginatedFieldsResponse. */
    class PaginatedFieldsResponse implements IPaginatedFieldsResponse {

        /**
         * Constructs a new PaginatedFieldsResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: dataplane.IPaginatedFieldsResponse);

        /** PaginatedFieldsResponse bundle. */
        public bundle?: (bundle.IBundle|null);

        /** PaginatedFieldsResponse maxDeterminedAt. */
        public maxDeterminedAt: number;

        /** PaginatedFieldsResponse fromBundleCursor. */
        public fromBundleCursor: number;

        /**
         * Creates a new PaginatedFieldsResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PaginatedFieldsResponse instance
         */
        public static create(properties?: dataplane.IPaginatedFieldsResponse): dataplane.PaginatedFieldsResponse;

        /**
         * Encodes the specified PaginatedFieldsResponse message. Does not implicitly {@link dataplane.PaginatedFieldsResponse.verify|verify} messages.
         * @param message PaginatedFieldsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dataplane.IPaginatedFieldsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PaginatedFieldsResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PaginatedFieldsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dataplane.PaginatedFieldsResponse;
    }

    /** Properties of a FeatureEnvelope. */
    interface IFeatureEnvelope {

        /** FeatureEnvelope feature */
        feature?: (feature.IFeature|null);

        /** FeatureEnvelope key */
        key?: (string|null);
    }

    /** Represents a FeatureEnvelope. */
    class FeatureEnvelope implements IFeatureEnvelope {

        /**
         * Constructs a new FeatureEnvelope.
         * @param [properties] Properties to set
         */
        constructor(properties?: dataplane.IFeatureEnvelope);

        /** FeatureEnvelope feature. */
        public feature?: (feature.IFeature|null);

        /** FeatureEnvelope key. */
        public key: string;

        /**
         * Creates a new FeatureEnvelope instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FeatureEnvelope instance
         */
        public static create(properties?: dataplane.IFeatureEnvelope): dataplane.FeatureEnvelope;

        /**
         * Encodes the specified FeatureEnvelope message. Does not implicitly {@link dataplane.FeatureEnvelope.verify|verify} messages.
         * @param message FeatureEnvelope message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dataplane.IFeatureEnvelope, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FeatureEnvelope message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FeatureEnvelope
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dataplane.FeatureEnvelope;
    }

    /** Properties of a FeatureEnvelopeList. */
    interface IFeatureEnvelopeList {

        /** FeatureEnvelopeList features */
        features?: (dataplane.IFeatureEnvelope[]|null);
    }

    /** Represents a FeatureEnvelopeList. */
    class FeatureEnvelopeList implements IFeatureEnvelopeList {

        /**
         * Constructs a new FeatureEnvelopeList.
         * @param [properties] Properties to set
         */
        constructor(properties?: dataplane.IFeatureEnvelopeList);

        /** FeatureEnvelopeList features. */
        public features: dataplane.IFeatureEnvelope[];

        /**
         * Creates a new FeatureEnvelopeList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FeatureEnvelopeList instance
         */
        public static create(properties?: dataplane.IFeatureEnvelopeList): dataplane.FeatureEnvelopeList;

        /**
         * Encodes the specified FeatureEnvelopeList message. Does not implicitly {@link dataplane.FeatureEnvelopeList.verify|verify} messages.
         * @param message FeatureEnvelopeList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dataplane.IFeatureEnvelopeList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FeatureEnvelopeList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FeatureEnvelopeList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dataplane.FeatureEnvelopeList;
    }

    /** Properties of a FeatureListResponse. */
    interface IFeatureListResponse {

        /** FeatureListResponse sessionId */
        sessionId?: (string|null);

        /** FeatureListResponse features */
        features?: ({ [k: string]: dataplane.IFeatureEnvelopeList }|null);
    }

    /** Represents a FeatureListResponse. */
    class FeatureListResponse implements IFeatureListResponse {

        /**
         * Constructs a new FeatureListResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: dataplane.IFeatureListResponse);

        /** FeatureListResponse sessionId. */
        public sessionId: string;

        /** FeatureListResponse features. */
        public features: { [k: string]: dataplane.IFeatureEnvelopeList };

        /**
         * Creates a new FeatureListResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FeatureListResponse instance
         */
        public static create(properties?: dataplane.IFeatureListResponse): dataplane.FeatureListResponse;

        /**
         * Encodes the specified FeatureListResponse message. Does not implicitly {@link dataplane.FeatureListResponse.verify|verify} messages.
         * @param message FeatureListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dataplane.IFeatureListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FeatureListResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FeatureListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dataplane.FeatureListResponse;
    }

    /** Properties of a SessionFeaturesResponse. */
    interface ISessionFeaturesResponse {

        /** SessionFeaturesResponse sessionId */
        sessionId?: (string|null);

        /** SessionFeaturesResponse clientSdk */
        clientSdk?: ({ [k: string]: feature.IFeature }|null);

        /** SessionFeaturesResponse cloudNetwork */
        cloudNetwork?: ({ [k: string]: feature.IFeature }|null);

        /** SessionFeaturesResponse cloudBehavioral */
        cloudBehavioral?: ({ [k: string]: feature.IFeature }|null);
    }

    /** Represents a SessionFeaturesResponse. */
    class SessionFeaturesResponse implements ISessionFeaturesResponse {

        /**
         * Constructs a new SessionFeaturesResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: dataplane.ISessionFeaturesResponse);

        /** SessionFeaturesResponse sessionId. */
        public sessionId: string;

        /** SessionFeaturesResponse clientSdk. */
        public clientSdk: { [k: string]: feature.IFeature };

        /** SessionFeaturesResponse cloudNetwork. */
        public cloudNetwork: { [k: string]: feature.IFeature };

        /** SessionFeaturesResponse cloudBehavioral. */
        public cloudBehavioral: { [k: string]: feature.IFeature };

        /**
         * Creates a new SessionFeaturesResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SessionFeaturesResponse instance
         */
        public static create(properties?: dataplane.ISessionFeaturesResponse): dataplane.SessionFeaturesResponse;

        /**
         * Encodes the specified SessionFeaturesResponse message. Does not implicitly {@link dataplane.SessionFeaturesResponse.verify|verify} messages.
         * @param message SessionFeaturesResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dataplane.ISessionFeaturesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SessionFeaturesResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SessionFeaturesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dataplane.SessionFeaturesResponse;
    }

    /** Properties of a JourneyFeaturesResponse. */
    interface IJourneyFeaturesResponse {

        /** JourneyFeaturesResponse journeyId */
        journeyId?: (string|null);

        /** JourneyFeaturesResponse clientSdk */
        clientSdk?: ({ [k: string]: feature.IFeature }|null);

        /** JourneyFeaturesResponse cloudNetwork */
        cloudNetwork?: ({ [k: string]: feature.IFeature }|null);

        /** JourneyFeaturesResponse cloudBehavioral */
        cloudBehavioral?: ({ [k: string]: feature.IFeature }|null);
    }

    /** Represents a JourneyFeaturesResponse. */
    class JourneyFeaturesResponse implements IJourneyFeaturesResponse {

        /**
         * Constructs a new JourneyFeaturesResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: dataplane.IJourneyFeaturesResponse);

        /** JourneyFeaturesResponse journeyId. */
        public journeyId: string;

        /** JourneyFeaturesResponse clientSdk. */
        public clientSdk: { [k: string]: feature.IFeature };

        /** JourneyFeaturesResponse cloudNetwork. */
        public cloudNetwork: { [k: string]: feature.IFeature };

        /** JourneyFeaturesResponse cloudBehavioral. */
        public cloudBehavioral: { [k: string]: feature.IFeature };

        /**
         * Creates a new JourneyFeaturesResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JourneyFeaturesResponse instance
         */
        public static create(properties?: dataplane.IJourneyFeaturesResponse): dataplane.JourneyFeaturesResponse;

        /**
         * Encodes the specified JourneyFeaturesResponse message. Does not implicitly {@link dataplane.JourneyFeaturesResponse.verify|verify} messages.
         * @param message JourneyFeaturesResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dataplane.IJourneyFeaturesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a JourneyFeaturesResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns JourneyFeaturesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dataplane.JourneyFeaturesResponse;
    }

    /** Properties of a SignalsResponse. */
    interface ISignalsResponse {

        /** SignalsResponse os */
        os?: (v2.signal.IOs|null);
    }

    /** Represents a SignalsResponse. */
    class SignalsResponse implements ISignalsResponse {

        /**
         * Constructs a new SignalsResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: dataplane.ISignalsResponse);

        /** SignalsResponse os. */
        public os?: (v2.signal.IOs|null);

        /**
         * Creates a new SignalsResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SignalsResponse instance
         */
        public static create(properties?: dataplane.ISignalsResponse): dataplane.SignalsResponse;

        /**
         * Encodes the specified SignalsResponse message. Does not implicitly {@link dataplane.SignalsResponse.verify|verify} messages.
         * @param message SignalsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dataplane.ISignalsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SignalsResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SignalsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dataplane.SignalsResponse;
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: number;

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;
        }
    }
}

/** Namespace error_reporting. */
export namespace error_reporting {

    /** Properties of a Frame. */
    interface IFrame {

        /** Frame function */
        "function"?: (string|null);

        /** Frame module */
        module?: (string|null);

        /** Frame filename */
        filename?: (string|null);

        /** Frame lineNo */
        lineNo?: (number|null);

        /** Frame colNo */
        colNo?: (number|null);
    }

    /** Represents a Frame. */
    class Frame implements IFrame {

        /**
         * Constructs a new Frame.
         * @param [properties] Properties to set
         */
        constructor(properties?: error_reporting.IFrame);

        /** Frame function. */
        public function: string;

        /** Frame module. */
        public module: string;

        /** Frame filename. */
        public filename: string;

        /** Frame lineNo. */
        public lineNo: number;

        /** Frame colNo. */
        public colNo: number;

        /**
         * Creates a new Frame instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Frame instance
         */
        public static create(properties?: error_reporting.IFrame): error_reporting.Frame;

        /**
         * Encodes the specified Frame message. Does not implicitly {@link error_reporting.Frame.verify|verify} messages.
         * @param message Frame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: error_reporting.IFrame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Frame message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Frame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): error_reporting.Frame;
    }

    /** Properties of an Exception. */
    interface IException {

        /** Exception type */
        type?: (string|null);

        /** Exception value */
        value?: (string|null);

        /** Exception stacktrace */
        stacktrace?: (error_reporting.IFrame[]|null);
    }

    /** Represents an Exception. */
    class Exception implements IException {

        /**
         * Constructs a new Exception.
         * @param [properties] Properties to set
         */
        constructor(properties?: error_reporting.IException);

        /** Exception type. */
        public type: string;

        /** Exception value. */
        public value: string;

        /** Exception stacktrace. */
        public stacktrace: error_reporting.IFrame[];

        /**
         * Creates a new Exception instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Exception instance
         */
        public static create(properties?: error_reporting.IException): error_reporting.Exception;

        /**
         * Encodes the specified Exception message. Does not implicitly {@link error_reporting.Exception.verify|verify} messages.
         * @param message Exception message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: error_reporting.IException, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Exception message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Exception
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): error_reporting.Exception;
    }

    /** Properties of an ErrorMessage. */
    interface IErrorMessage {

        /** ErrorMessage title */
        title?: (string|null);

        /** ErrorMessage timestamp */
        timestamp?: (number|null);

        /** ErrorMessage platform */
        platform?: (common.DevicePlatform|null);

        /** ErrorMessage manufacturer */
        manufacturer?: (string|null);

        /** ErrorMessage model */
        model?: (string|null);

        /** ErrorMessage osVersion */
        osVersion?: (string|null);

        /** ErrorMessage level */
        level?: (error_reporting.ErrorMessage.Level|null);

        /** ErrorMessage releaseVersion */
        releaseVersion?: (string|null);

        /** ErrorMessage proguardUuid */
        proguardUuid?: (string|null);

        /** ErrorMessage exception */
        exception?: (error_reporting.IException|null);

        /** ErrorMessage additionalTags */
        additionalTags?: ({ [k: string]: string }|null);
    }

    /** Represents an ErrorMessage. */
    class ErrorMessage implements IErrorMessage {

        /**
         * Constructs a new ErrorMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: error_reporting.IErrorMessage);

        /** ErrorMessage title. */
        public title: string;

        /** ErrorMessage timestamp. */
        public timestamp: number;

        /** ErrorMessage platform. */
        public platform: common.DevicePlatform;

        /** ErrorMessage manufacturer. */
        public manufacturer: string;

        /** ErrorMessage model. */
        public model: string;

        /** ErrorMessage osVersion. */
        public osVersion: string;

        /** ErrorMessage level. */
        public level: error_reporting.ErrorMessage.Level;

        /** ErrorMessage releaseVersion. */
        public releaseVersion: string;

        /** ErrorMessage proguardUuid. */
        public proguardUuid: string;

        /** ErrorMessage exception. */
        public exception?: (error_reporting.IException|null);

        /** ErrorMessage additionalTags. */
        public additionalTags: { [k: string]: string };

        /**
         * Creates a new ErrorMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ErrorMessage instance
         */
        public static create(properties?: error_reporting.IErrorMessage): error_reporting.ErrorMessage;

        /**
         * Encodes the specified ErrorMessage message. Does not implicitly {@link error_reporting.ErrorMessage.verify|verify} messages.
         * @param message ErrorMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: error_reporting.IErrorMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ErrorMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ErrorMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): error_reporting.ErrorMessage;
    }

    namespace ErrorMessage {

        /** Level enum. */
        enum Level {
            INVALID = 0,
            DEBUG = 1,
            INFO = 2,
            WARNING = 3,
            ERROR = 4,
            FATAL = 5
        }
    }
}

/** Namespace pagination. */
export namespace pagination {

    /** Properties of a PaginationRequest. */
    interface IPaginationRequest {
    }

    /** Represents a PaginationRequest. */
    class PaginationRequest implements IPaginationRequest {

        /**
         * Constructs a new PaginationRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: pagination.IPaginationRequest);

        /**
         * Creates a new PaginationRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PaginationRequest instance
         */
        public static create(properties?: pagination.IPaginationRequest): pagination.PaginationRequest;

        /**
         * Encodes the specified PaginationRequest message. Does not implicitly {@link pagination.PaginationRequest.verify|verify} messages.
         * @param message PaginationRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pagination.IPaginationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PaginationRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PaginationRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pagination.PaginationRequest;
    }

    /** Properties of a PaginationResponse. */
    interface IPaginationResponse {

        /** PaginationResponse currentPage */
        currentPage?: (number|null);

        /** PaginationResponse previousPage */
        previousPage?: (number|null);

        /** PaginationResponse nextPage */
        nextPage?: (number|null);

        /** PaginationResponse perPage */
        perPage?: (number|null);

        /** PaginationResponse totalPages */
        totalPages?: (number|null);

        /** PaginationResponse totalCount */
        totalCount?: (number|null);
    }

    /** Represents a PaginationResponse. */
    class PaginationResponse implements IPaginationResponse {

        /**
         * Constructs a new PaginationResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: pagination.IPaginationResponse);

        /** PaginationResponse currentPage. */
        public currentPage: number;

        /** PaginationResponse previousPage. */
        public previousPage: number;

        /** PaginationResponse nextPage. */
        public nextPage: number;

        /** PaginationResponse perPage. */
        public perPage: number;

        /** PaginationResponse totalPages. */
        public totalPages: number;

        /** PaginationResponse totalCount. */
        public totalCount: number;

        /**
         * Creates a new PaginationResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PaginationResponse instance
         */
        public static create(properties?: pagination.IPaginationResponse): pagination.PaginationResponse;

        /**
         * Encodes the specified PaginationResponse message. Does not implicitly {@link pagination.PaginationResponse.verify|verify} messages.
         * @param message PaginationResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pagination.IPaginationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PaginationResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PaginationResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pagination.PaginationResponse;
    }
}

/** Namespace v2. */
export namespace v2 {

    /** Namespace signal. */
    namespace signal {

        /** Properties of an Os. */
        interface IOs {

            /** Os predictedOsFamily */
            predictedOsFamily?: (string|null);

            /** Os predictedOsFamilyScore */
            predictedOsFamilyScore?: (number|null);
        }

        /** Represents an Os. */
        class Os implements IOs {

            /**
             * Constructs a new Os.
             * @param [properties] Properties to set
             */
            constructor(properties?: v2.signal.IOs);

            /** Os predictedOsFamily. */
            public predictedOsFamily: string;

            /** Os predictedOsFamilyScore. */
            public predictedOsFamilyScore: number;

            /**
             * Creates a new Os instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Os instance
             */
            public static create(properties?: v2.signal.IOs): v2.signal.Os;

            /**
             * Encodes the specified Os message. Does not implicitly {@link v2.signal.Os.verify|verify} messages.
             * @param message Os message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v2.signal.IOs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Os message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Os
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v2.signal.Os;
        }
    }
}
