/**
 * dummy remuxer
 */

class DummyRemuxer {
    constructor() {
        this.PES_TIMESCALE = 90000;
    }

    get timescale() {
        return this.PES_TIMESCALE;
    }

    destroy() {}

    insertDiscontinuity() {}

    remux(audioTrack, videoTrack, timeOffset) {
        this._remuxAACSamples(audioTrack, timeOffset);
        this._remuxAVCSamples(videoTrack, timeOffset);
    }

    _remuxAVCSamples(track, timeOffset) {
        var avcSample, unit;
        // loop through track.samples
        while (track.samples.length) {
            avcSample = track.samples.shift();
            // loop through AVC sample NALUs
            while (avcSample.units.units.length) {
                unit = avcSample.units.units.shift();
            }
        }
        //please lint
        timeOffset = timeOffset;
    }

    _remuxAACSamples(track, timeOffset) {
        var aacSample, unit;
        // loop through track.samples
        while (track.samples.length) {
            aacSample = track.samples.shift();
            unit = aacSample.unit;
        }
        //please lint
        timeOffset = timeOffset;
    }
}

export default DummyRemuxer;
