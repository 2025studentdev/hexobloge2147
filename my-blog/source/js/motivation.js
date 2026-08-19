(function() {

    const quotes = [
        "不要去等谁，所有的不期而遇都正在路上等你。",
        "愿你的身后总有力量，愿你成为自己的太阳。",
        "你风尘仆仆走向我，胜过所有遥远的温柔。",
        "我曾踏月而来，只因你在山中。",
        "山月不知心里事，水风空落眼前花。",
        "春风再美也比不上你的笑，没见过你的人不会明了。",
        "愿你三冬暖，愿你春不寒，愿你天黑有灯，下雨有伞。",
        "愿所有的美好都如期而至，愿所有的幸运都不期而遇。",
        "有些路很远，走下去会很累，可是不走，会后悔。",
        "你做三四月的事，在八九月自有答案。",
        "不要因为结束而哭泣，微笑吧，为你的曾经拥有。",
        "如果你瞄准月亮，即使迷失也是落在星辰之间。",
        "不是所有的鱼都生活在同一片海里。",
        "愿你出走半生，归来仍是少年。",
        "人的一切痛苦，本质上都是对自己无能的愤怒。",
        "一个人知道自己为什么而活，就可以忍受任何一种生活。",
        "但凡不能杀死你的，最终都会使你更强大。",
        "每个不曾起舞的日子，都是对生命的辜负。",
        "其实人跟树是一样的，越是向往高处的阳光，它的根就越要伸向黑暗的地底。",
        "我们走得太快，灵魂都跟不上了。",
        "一个人行走的范围，就是他的世界。",
        "星辰大海从未遥不可及，唯有热爱可抵岁月漫长。",
        "既然选择了远方，便只顾风雨兼程。",
        "没有比脚更长的路，没有比人更高的山。",
        "如果这世界上真有奇迹，那只是努力的另一个名字。",
        "生命中最难的阶段不是没有人懂你，而是你不懂你自己。",
        "世界以痛吻我，要我报之以歌。",
        "当你为错过太阳而哭泣的时候，你也要再错过群星了。",
        "不要因为走得太远，忘了我们为什么出发。",
        "一个人至少拥有一个梦想，有一个理由去坚强。心若没有栖息的地方，到哪里都是在流浪。",
        "时间并不会真的帮我们解决什么问题，它只是把原来怎么也想不通的问题，变得不再重要了。",
        "成熟的人，不问过去；聪明的人，不问现在；豁达的人，不问未来。",
        "人生最大的遗憾，莫过于轻易地放弃了不该放弃的，固执地坚持了不该坚持的。",
        "世间所有的相遇，都是久别重逢。",
        "最好的时光在路上，最美的自己在远方。",
        "愿你有前进一寸的勇气，亦有后退一尺的从容。",
        "生命是一场盛大的遇见，若你懂得，就请珍惜。",
        "即便前路混沌，你踏出的每一步都算数。",
        "山有顶峰，湖有彼岸，在人生漫漫长途中，万物皆有回转。",
        "当你觉得余味苦涩时，请你相信，一切终有回甘。",
        "也许我们终将在某个路口走散，但一起走过的路，都算数。",
        "有些路，只能一个人走，那些邀约好同行的人，终会在某个渡口离散。",
        "时间是最公平的，你种下什么，就会收获什么。",
        "没有人能替你承受痛苦，也没有人能抢走你的坚强。",
        "你若不伤，岁月无恙。",
        "愿你的每一天，都如阳光般明媚。",
        "清晨的阳光会照进每一个努力的人的生活。",
        "我宁愿犯错，也不愿什么都不做。",
        "每一个优秀的人，都有一段沉默的时光，是付出了很多努力却得不到结果的日子，我们把它叫做扎根。",
        "如果梦想有捷径的话，那么这条路的名字一定叫坚持。",
        "不要在应该奋斗的年纪选择了安逸。",
        "你不必生来勇敢，天赋过人。只要能投入勤奋，诚诚恳恳。",
        "万物皆有裂痕，那是光照进来的地方。",
        "愿我们能始终温柔，哪怕这世界以痛吻我。",
        "人生如逆旅，我亦是行人。",
        "且将新火试新茶，诗酒趁年华。",
        "休对故人思故国，且将新火试新茶。",
        "梦里不知身是客，一晌贪欢。",
        "独自莫凭栏，无限江山，别时容易见时难。",
        "流水落花春去也，天上人间。",
        "剪一段时光，放在最美的段落。",
        "时光静好，与君语；细水流年，与君同；繁华落尽，与君老。",
        "你若盛开，清风自来。",
        "心安之处，便是故乡。",
        "人生没有白走的路，每一步都算数。",
        "只愿岁月无可回首，且以深情共白头。",
        "愿做你生命中的一束光，照亮你前行的路。",
        "既许一人以偏爱，愿尽余生之慷慨。",
        "余生很长，不必慌张。",
        "愿你遇到那个懂你悲欢、知你冷暖的人。",
        "世界上最快乐的事，莫过于为理想而奋斗。",
        "生活或许沉闷，但跑起来就有风。",
        "你未必光芒万丈，但始终温暖有光。",
        "愿你所到之处，遍地阳光；愿你梦的远方，温暖为向。",
        "即使翅膀断了，心也要飞翔。",
        "没有伞的孩子，必须努力奔跑。",
        "你要悄悄拔尖，然后惊艳所有人。",
        "虽然辛苦，但我还是会选择那种滚烫的人生。",
        "哪有什么一夜成名，其实都是百炼成钢。",
        "机会永远留给有准备的人。",
        "你若决定灿烂，山无遮，海无拦。",
        "半山腰总是最挤的，你得去山顶看看。",
        "如果觉得累，说明你在走上坡路。",
        "生活原本沉闷，但跑起来就有风。",
        "你只管努力，剩下的交给时光。",
        "往事不回头，未来不将就。",
        "愿你眼里有星辰，心中有山海。",
        "世界很大，请带着梦想一起奔跑。",
        "愿你在迷茫时，坚信你的珍贵。",
        "爱你所爱，行你所行，听从你心，无问西东。",
        "人生没有如果，只有后果和结果。",
        "没有一种不通过蔑视、忍受和奋斗就可以征服的命运。",
        "不要小看自己，因为人有无限的可能。",
        "今天的努力，是幸运的伏笔；当下的付出，是明日的花开。",
        "你不努力，谁也给不了你想要的生活。",
        "每一个不曾起舞的日子，都是对生命的辜负。",
        "不要等待机会，而要创造机会。",
        "越是黑暗的地方，就越要心向光明。",
        "愿你我既能朝九晚五，又能浪迹天涯。",
        "愿你历经山河，仍觉得人间值得。",
        "请成为永远疯狂永远浪漫永远清澈的存在。",
        "愿你是披荆斩棘的勇士，也是被世界温柔以待的幸运儿。",
        "所有的失去，都会以另一种方式归来。",
        "总有一天，你会站在最亮的地方，活成自己曾经渴望的模样。",
        "愿你所遇皆温柔，所行皆坦途。",
        "心中有丘壑，眉目作山河。",
        "凡是过往，皆为序章。",
        "愿你一生努力，一生被爱，想要的都拥有，得不到的都释怀。",
        "知世故而不世故，才是最善良的成熟。",
        "愿我们永远年轻，永远热泪盈眶。",
        "前方无绝路，希望在转角。",
        "心若向阳，无谓悲伤。",
        "愿你心向暖阳，一路生花。",
        "愿你三冬暖，愿你春不寒，愿你天黑有灯，下雨有伞。",
        "愿你余生平安喜乐，万事胜意。",
        "岁月极美，在于它必然的流逝。春花、秋月、夏日、冬雪。",
        "我们终将上岸，阳光万里，鲜花沿路开放。",
        "道阻且长，行则将至；行而不辍，未来可期。"
    ];

    // ============================================================
    // CSS 样式（白底黑字，字体调小，标题居中，无多余提示）
    // ============================================================
    const style = document.createElement('style');
    style.textContent = `
    #motivation-card {
      cursor: default;
      border-radius: 12px;
      padding: 18px 20px;
      margin-bottom: 20px;
      background: #ffffff;
      box-shadow: 0 4px 12px rgba(0,0,0,0.08);
      border: 1px solid #f0f0f0;
      transition: all 0.3s ease;
      min-height: 80px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      user-select: none;
    }
    #motivation-card:hover {
      box-shadow: 0 6px 20px rgba(0,0,0,0.12);
      transform: translateY(-2px);
    }
    #motivation-card .card-header {
      font-size: 14px;
      color: #999;
      letter-spacing: 2px;
      margin-bottom: 8px;
      font-weight: 400;
      text-align: center;
    }
    #motivation-card .quote-display {
      font-size: 14px;
      line-height: 1.7;
      color: #2c3e50;
      font-weight: 500;
      min-height: 24px;
      font-family: -apple-system, "PingFang SC", "Microsoft YaHei", sans-serif;
    }
    #motivation-card .cursor-blink {
      display: inline-block;
      width: 2px;
      height: 18px;
      background: #2c3e50;
      margin-left: 2px;
      vertical-align: text-bottom;
      animation: blink 0.8s step-end infinite;
    }
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
  `;
    document.head.appendChild(style);

    // ============================================================
    // 核心打字机逻辑（无点击，纯自动轮播，速度调慢）
    // ============================================================
    let timer = null;
    let isDeleting = false;
    let currentText = '';
    let displayCharIndex = 0;
    let currentQuote = '';

    const card = document.createElement('div');
    card.id = 'motivation-card';
    card.innerHTML = `
    <div class="card-header">每日一言</div>
    <div class="quote-display">
      <span id="textSpan"></span><span class="cursor-blink"></span>
    </div>
  `;

    const textSpan = card.querySelector('#textSpan');

    function clearTimer() {
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
    }

    function getRandomQuote() {
        if (quotes.length === 0) return '请添加励志句子';
        if (quotes.length === 1) return quotes[0];
        let newQuote = currentQuote;
        while (newQuote === currentQuote) {
            newQuote = quotes[Math.floor(Math.random() * quotes.length)];
        }
        return newQuote;
    }

    function typeStep() {
        if (isDeleting) {
            displayCharIndex--;
            textSpan.textContent = currentText.substring(0, displayCharIndex);
            if (displayCharIndex <= 0) {
                isDeleting = false;
                currentQuote = getRandomQuote();
                currentText = currentQuote;
                displayCharIndex = 0;
                timer = setTimeout(() => {
                    typeStep();
                }, 500); // 删除后停顿
            } else {
                timer = setTimeout(() => {
                    typeStep();
                }, 100); // 删除速度
            }
            return;
        }

        if (displayCharIndex < currentText.length) {
            displayCharIndex++;
            textSpan.textContent = currentText.substring(0, displayCharIndex);
            timer = setTimeout(() => {
                typeStep();
            }, 200); // 打字速度
        } else {
            timer = setTimeout(() => {
                isDeleting = true;
                typeStep();
            }, 4000); // 打完停顿
        }
    }

    // 挂载到侧边栏
    function init() {
        const layout = document.querySelector('#aside-content .sticky_layout');
        const container = document.querySelector('#aside-content');
        if (!container) return;

        if (layout) {
            layout.prepend(card);
        } else {
            container.prepend(card);
        }

        if (quotes.length === 0) {
            textSpan.textContent = '⚠️ 请添加句子';
            return;
        }
        currentQuote = quotes[Math.floor(Math.random() * quotes.length)];
        currentText = currentQuote;
        displayCharIndex = 0;
        setTimeout(() => {
            typeStep();
        }, 300);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();