import Sound from 'react-native-sound';

class PlayASound {
  private hitsCount = 0;
  private sounds = [
    'shao_laugh.mp3',
    'impressive.mp3',
    'ronnie_lightweight.mp3',
    'yeahbuddy.mp3',
    'mlg_airhorn.mp3',
  ];
  private streaks = {
    FIRST_BLOOD: 'first_blood.mp3',
    ULTRA_KILL: 'ultrakill.wav',
    GOD_LIKE: 'godlike.wav',
  };
  soundOn = true;

  private getRandomSound() {
    const isRandom = Math.floor(Math.random() * 4 + 1);
    if (isRandom !== 4) {
      return 'success.mp3';
    }
    const index = Math.floor(Math.random() * this.sounds.length);
    return this.sounds[index];
  }
  private play(name: string) {
    if (!this.soundOn) {
      return;
    }
    Sound.setCategory('Playback');
    var mySound = new Sound(name, Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log('Error loading sound: ' + error, name);
        return;
      } else {
        mySound.play(success => {
          if (success) {
          } else {
            console.log('Issue playing file');
          }
        });
      }
    });
    mySound.setVolume(1.0);
    mySound.release();
  }
  onSetSubmit() {
    this.hitsCount++;
    switch (this.hitsCount) {
      case 1:
        this.play(this.streaks.FIRST_BLOOD);
        break;
      case 4:
        this.play(this.streaks.ULTRA_KILL);
        break;
      case 7:
      case 14:
      case 21:
        this.play(this.streaks.GOD_LIKE);
        break;
      default:
        this.play(this.getRandomSound());
        break;
    }
  }
  onWorkOutSubmit() {
    this.play('shao_laugh.mp3');
  }
  resetScore() {
    this.hitsCount = 0;
  }
  switchSound(bool: boolean) {
    this.soundOn = bool;
  }
}

export const playASound = new PlayASound();
