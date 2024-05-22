import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skills-slider',
  templateUrl: './skills-slider.component.html',
  styleUrls: ['./skills-slider.component.scss']
})
export class SkillsSliderComponent {

  @Input() skills: any[] = [];

  calculateWidth(skillsLength: number) {
    const itemWidth = 200;
    const totalWidth = itemWidth * skillsLength;
    return `${totalWidth}px`;
  }

  calculateTransform(skillsLength: number) {
    const itemWidth = 200;
    return `calc(-${itemWidth}px * ${skillsLength})`;
  }

  calculateDuration(skillsLength: number) {
    const durationPerItem = 3;
    const totalDuration = durationPerItem * skillsLength;
    return `${totalDuration}s`;
  }

}
