import { CheckBoxConainter } from './styled';

function CheckBox() {
  return (
    <CheckBoxConainter>
      <div>
        <input type="checkbox" />
        <label>전체동의</label>
      </div>

      <div>
        <input type="checkbox" id="personalInfo" />
        <label htmlFor="personalInfo">
          개인정보취급방침에 동의 <a href="#">[자세히 보기]</a>
        </label>
      </div>

      <div>
        <input type="checkbox" id="usingAgree" />
        <label htmlFor="usingAgree">
          이용약관에 동의 <a href="#">[자세히 보기]</a>
        </label>
      </div>
    </CheckBoxConainter>
  );
}

export default CheckBox;
