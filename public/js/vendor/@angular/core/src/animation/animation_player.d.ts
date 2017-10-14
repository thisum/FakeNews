/**
 * @experimental Animation support is experimental.
 */
export declare abstract class AnimationPlayer {
    abstract onDone(fn: Function): void;
    abstract init(): void;
    abstract hasStarted(): boolean;
    abstract play(): void;
    abstract pause(): void;
    abstract restart(): void;
    abstract finish(): void;
    abstract destroy(): void;
    abstract reset(): void;
    abstract setPosition(p: any): void;
    abstract getPosition(): number;
    parentPlayer: AnimationPlayer;
}
export declare class NoOpAnimationPlayer implements AnimationPlayer {
    private _subscriptions;
    private _started;
    parentPlayer: AnimationPlayer;
    constructor();
    onDone(fn: Function): void;
    hasStarted(): boolean;
    init(): void;
    play(): void;
    pause(): void;
    restart(): void;
    finish(): void;
    destroy(): void;
    reset(): void;
    setPosition(p: any): void;
    getPosition(): number;
}