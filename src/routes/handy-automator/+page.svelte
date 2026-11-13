<script lang="ts">
	import RotatingBackground from '$lib/components/RotatingBackground.svelte';
</script>

<RotatingBackground />
<main
	id="top"
	class="relative z-10 mx-auto w-full max-w-6xl px-4 pt-6 pb-20 font-sans text-gray-800 sm:px-6 sm:pt-12 lg:pb-28"
>
	<article
		id="handy-automator"
		class="grid gap-5 sm:gap-6 focus-visible:[&_a]:outline-2 focus-visible:[&_a]:outline-offset-4 focus-visible:[&_a]:outline-indigo-300 [&_section]:scroll-mt-6 [&_section]:rounded-3xl [&_section]:border [&_section]:border-gray-300 [&_section]:bg-gray-100 [&_section]:p-5 [&_section]:shadow-[0_16px_48px_rgba(15,23,42,0.10)] [&_section]:backdrop-blur-xl sm:[&_section]:p-8 [&_section_a]:font-semibold [&_section_a]:text-indigo-600 [&_section_a]:underline [&_section_a]:decoration-indigo-200 [&_section_a]:underline-offset-4 [&_section_a:hover]:text-indigo-800 [&_section_a:hover]:decoration-current [&_section_code]:rounded-md [&_section_code]:border [&_section_code]:border-gray-200 [&_section_code]:bg-gray-100 [&_section_code]:px-1 [&_section_code]:py-0.5 [&_section_code]:text-[0.88em] [&_section_code]:text-indigo-700 [&_section_h3]:mb-5 [&_section_h3]:text-2xl [&_section_h3]:font-bold [&_section_h3]:tracking-tight [&_section_h3]:text-gray-900 sm:[&_section_h3]:text-3xl [&_section_h4]:mt-7 [&_section_h4]:mb-2 [&_section_h4]:text-lg [&_section_h4]:font-bold [&_section_h4]:text-indigo-900 [&_section_li::marker]:font-bold [&_section_li::marker]:text-indigo-500 [&_section_math]:my-5 [&_section_math]:block [&_section_math]:max-w-full [&_section_math]:overflow-x-auto [&_section_math]:p-3 [&_section_math]:text-center [&_section_math]:text-indigo-900 [&_section_ol]:my-4 [&_section_ol]:grid [&_section_ol]:list-decimal [&_section_ol]:gap-2.5 [&_section_ol]:pl-6 [&_section_ol]:leading-7 [&_section_ol]:text-gray-600 [&_section_p]:my-3 [&_section_p]:text-base [&_section_p]:leading-8 [&_section_p]:text-gray-600 [&_section_pre]:my-5 [&_section_pre]:overflow-x-auto [&_section_pre]:rounded-2xl [&_section_pre]:border [&_section_pre]:border-slate-700 [&_section_pre]:bg-slate-900 [&_section_pre]:p-5 [&_section_pre]:text-sm [&_section_pre]:leading-7 [&_section_pre]:text-gray-200 [&_section_pre_code]:border-0 [&_section_pre_code]:bg-transparent [&_section_pre_code]:p-0 [&_section_pre_code]:text-inherit [&_section_strong]:text-gray-700 [&_section_ul]:my-4 [&_section_ul]:grid [&_section_ul]:list-disc [&_section_ul]:gap-2.5 [&_section_ul]:pl-6 [&_section_ul]:leading-7 [&_section_ul]:text-gray-600 [&_section_ul_ul]:mt-2 [&_section_ul_ul]:list-[circle] [&_section_video]:my-5 [&_section_video]:aspect-video [&_section_video]:w-full [&_section_video]:rounded-2xl [&_section_video]:border [&_section_video]:border-gray-200 [&_section_video]:bg-gray-900 [&_section_video]:object-contain [&_section_video]:shadow-xl"
	>
		<header
			class="relative overflow-hidden rounded-3xl border border-gray-300 bg-gray-100 p-6 shadow-[0_16px_48px_rgba(15,23,42,0.10)] backdrop-blur-xl sm:p-10 lg:p-16"
		>
			<a
				class="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 transition-colors hover:text-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-300"
				href="/#projects">← Back to portfolio</a
			>
			<p class="mt-8 mb-3 text-xs font-bold tracking-[0.14em] text-indigo-600 uppercase">
				Selected project <span class="px-1 text-gray-400" aria-hidden="true">/</span> Computer vision
			</p>
			<h1
				class="m-0 max-w-[14ch] text-5xl leading-none font-extrabold tracking-[-0.065em] text-gray-900 sm:text-7xl lg:text-8xl"
			>
				Handy Automator
			</h1>
			<p class="mt-3 mb-0 text-xl font-semibold tracking-tight text-gray-600 sm:text-2xl">
				Gesture-Based Home Automation with Computer Vision
			</p>
			<p class="mt-6 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
				A real-time computer vision pipeline that recognized who was in front of a camera, figured
				out whose hand was making which gesture, and turned that into a home automation command. I
				built the entire computer vision component (the "Processing Unit") of this team project.
			</p>
			<div class="mt-6">
				<a
					class="inline-flex items-center gap-3 rounded-full border border-indigo-700 bg-indigo-600 px-5 py-3 text-sm font-semibold text-white no-underline shadow-lg shadow-indigo-600/20 transition hover:-translate-y-0.5 hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-300"
					href="https://github.com/caiocotts/handy-automator"
				>
					GitHub repository
					<span aria-hidden="true">↗</span>
				</a>
			</div>
			<p
				class="mt-8 mb-0 flex flex-wrap items-baseline gap-x-3 gap-y-2 border-t border-gray-200/90 pt-5 text-sm leading-7 text-gray-500"
			>
				<strong class="text-xs tracking-widest text-gray-700 uppercase">Tech</strong>
				<span
					>Python, OpenCV, DeepFace (ArcFace + RetinaFace), MediaPipe Tasks (Pose and Gesture),
					NumPy, SciPy, pytest</span
				>
			</p>
		</header>

		<nav
			class="flex flex-nowrap items-center gap-2 overflow-x-auto px-0.5 py-1 pb-3 sm:flex-wrap sm:overflow-visible"
			aria-label="On this page"
		>
			<span
				class="sticky left-0 z-10 shrink-0 bg-[#FDFDFD] pr-1 text-xs font-bold text-gray-500 sm:static sm:bg-transparent"
				>Page sections</span
			>
			<a
				class="shrink-0 rounded-full border border-gray-200/90 bg-white/75 px-3 py-1.5 text-xs font-semibold text-gray-600 no-underline transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-300"
				href="#overview">Overview</a
			>
			<a
				class="shrink-0 rounded-full border border-gray-200/90 bg-white/75 px-3 py-1.5 text-xs font-semibold text-gray-600 no-underline transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-300"
				href="#demo">Demo</a
			>
			<a
				class="shrink-0 rounded-full border border-gray-200/90 bg-white/75 px-3 py-1.5 text-xs font-semibold text-gray-600 no-underline transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-300"
				href="#architecture">Architecture</a
			>
			<a
				class="shrink-0 rounded-full border border-gray-200/90 bg-white/75 px-3 py-1.5 text-xs font-semibold text-gray-600 no-underline transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-300"
				href="#face-recognition">Face recognition</a
			>
			<a
				class="shrink-0 rounded-full border border-gray-200/90 bg-white/75 px-3 py-1.5 text-xs font-semibold text-gray-600 no-underline transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-300"
				href="#pose-gesture">Pose &amp; gestures</a
			>
			<a
				class="shrink-0 rounded-full border border-gray-200/90 bg-white/75 px-3 py-1.5 text-xs font-semibold text-gray-600 no-underline transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-300"
				href="#linking">Identity linking</a
			>
		</nav>

		<section id="overview">
			<h3>Overview</h3>
			<p>
				Most smart-home systems relied on voice commands or a phone app. Handy Automator explored a
				lower-friction alternative: users could walk into view, get recognized, make a hand gesture,
				and trigger a user-defined workflow (for example, toggling a light).
			</p>
			<p>
				The hard part was not detecting a face or a gesture on its own. It was answering
				<em>"whose hand was that?"</em> when more than one person could be in the frame, while
				making sure gestures from unrecognized people were ignored. My part of the project was the
				pipeline that solved this. The rest of the system (a Go REST server, a React Native app, and
				ESP32 edge devices) was built by teammates and consumed the events my pipeline produced. For
				more on the technical side of the Go REST API server, visit
				<a href="https://caiocotts.com/projects/handy-automator/">Caio Cotts's website</a>!
			</p>
		</section>

		<section id="demo">
			<h3>Demo</h3>
			<div
				class="relative mx-auto my-5 aspect-video w-full max-w-5xl overflow-hidden rounded-2xl border border-gray-300 bg-gray-950 shadow-xl"
			>
				<iframe
					class="absolute inset-0 h-full w-full border-0"
					src="https://www.youtube.com/embed/AcotRploBiE?si=QIT9lPUiGPDaRXpf"
					title="Handy Automator project demo"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerpolicy="strict-origin-when-cross-origin"
					allowfullscreen
				></iframe>
			</div>
			<p>
				<span class="italic">
					You're probably looking at me wondering why my eyes are so red and why I look half-asleep.
					Honestly, this project was huge, and we were grinding right up until the last few minutes
					before submission. This demo covers one of the use cases and highlights it's functioanlity
					using ESP32 boards controlling LED
				</span>
			</p>
		</section>

		<section id="architecture">
			<h3>Pipeline Architecture</h3>
			<p>
				A single loop captured webcam frames with OpenCV and fed three independent perception
				modules. A linking step then combined their outputs into <code>(user, gesture)</code> events.
			</p>
			<ol>
				<li>
					<strong>Face recognition (<code>face_recognition.py</code>):</strong> found faces, identified
					them, and tracked them between frames.
				</li>
				<li>
					<strong>Pose estimation (<code>pose.py</code>):</strong> provided a body skeleton that acted
					as a bridge between a face and a hand.
				</li>
				<li>
					<strong>Gesture recognition (<code>gesture_recognition.py</code>):</strong> detected hands and
					classified gestures.
				</li>
				<li>
					<strong>Integration (<code>main.py</code>):</strong> ran the spatial verification logic that
					bound identity to gesture.
				</li>
			</ol>
			<p>
				Both MediaPipe tasks ran in <code>LIVE_STREAM</code> mode. Each frame was submitted with a millisecond
				timestamp, and a non-blocking callback stored the latest result, so the video loop never waited
				on inference.
			</p>
		</section>

		<section id="face-recognition">
			<h3>Face Recognition and Identity Tracking</h3>

			<h4>Enrollment</h4>
			<p>
				On startup, the system scanned <code>database/auth_users</code> for reference images and
				used each filename as that person's identity (<code>User1.png</code> became
				<code>User1</code>). Each image was converted to an embedding using
				<strong>DeepFace</strong>
				with the
				<strong>ArcFace</strong>
				model. Enrollment used the slower but more accurate <strong>RetinaFace</strong> detector, since
				it only ran once per image.
			</p>

			<h4>Live detection and recognition</h4>
			<p>
				Running a deep model on every frame made the first version of the Processing Unit very
				laggy. I split the work into a fast path and a slow path:
			</p>
			<ul>
				<li>
					<strong>Fast path (every frame):</strong> an OpenCV Haar cascade detected face bounding boxes
					on grayscale frames.
				</li>
				<li>
					<strong>Slow path (once per second):</strong> the face crop was embedded with ArcFace,
					using DeepFace's faster
					<code>opencv</code> detector backend and compared against the stored embeddings.
				</li>
			</ul>
			<p>
				Identities were compared using cosine distance. A face was accepted when the distance to a
				stored embedding fell below a threshold of 0.6:
			</p>
			<math display="block">
				<mrow>
					<msub><mi>d</mi><mtext>cos</mtext></msub>
					<mo>(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo>)</mo>
					<mo>=</mo>
					<mn>1</mn><mo>&#x2212;</mo>
					<mfrac>
						<mrow><mi>a</mi><mo>&#x22C5;</mo><mi>b</mi></mrow>
						<mrow
							><mo>&#x2016;</mo><mi>a</mi><mo>&#x2016;</mo><mo>&#x2009;</mo><mo>&#x2016;</mo><mi
								>b</mi
							><mo>&#x2016;</mo></mrow
						>
					</mfrac>
					<mo>&lt;</mo>
					<mn>0.6</mn>
				</mrow>
			</math>
			<p>
				Once a face was verified, the user stayed authorized for a 7-second lock window, so a brief
				detection miss did not immediately revoke access.
			</p>

			<h4>Keeping labels stable between recognition checks</h4>
			<p>
				Since recognition only ran once per second, the system needed to remember who was who in the
				frames in between. I implemented a lightweight centroid tracker. For each detected face, it
				computed the center of the bounding box and compared it to the previous frame's face
				centers. If a face moved less than 50 pixels, it inherited the same identity:
			</p>
			<math display="block">
				<mrow>
					<mi>d</mi><mo>=</mo>
					<msqrt>
						<mrow>
							<msup
								><mrow
									><mo>(</mo><msub><mi>x</mi><mn>2</mn></msub><mo>&#x2212;</mo><msub
										><mi>x</mi><mn>1</mn></msub
									><mo>)</mo></mrow
								><mn>2</mn></msup
							>
							<mo>+</mo>
							<msup
								><mrow
									><mo>(</mo><msub><mi>y</mi><mn>2</mn></msub><mo>&#x2212;</mo><msub
										><mi>y</mi><mn>1</mn></msub
									><mo>)</mo></mrow
								><mn>2</mn></msup
							>
						</mrow>
					</msqrt>
					<mo>&lt;</mo>
					<mn>50</mn><mtext>&#x2009;px</mtext>
				</mrow>
			</math>
			<p>
				The detection function returned a list of <code>(bounding_box, name)</code> pairs.
				Unrecognized faces were labeled <code>Unknown</code>, which let the system ignore them
				later.
			</p>
		</section>

		<section id="pose-gesture">
			<h3>Pose and Gesture Recognition</h3>
			<p>
				For gestures, I used MediaPipe's <code>GestureRecognizer</code>, configured to track up to
				two hands with a minimum detection confidence of 0.7. For each hand, it returned 21
				landmarks and a top gesture with a confidence score. I wrote the drawing code in plain
				OpenCV rather than using MediaPipe's built-in utilities. It plotted the landmarks, connected
				them using a hardcoded hand-connection map, and labeled the gesture above the wrist.
			</p>
			<p>
				MediaPipe's <code>PoseLandmarker</code> supplied the pieces needed to link a face to a hand:
				the
				<strong>nose</strong> and the <strong>left and right wrists</strong>. MediaPipe returned
				normalized coordinates, so I converted them to pixel coordinates using the frame size:
			</p>
			<math display="block">
				<mrow>
					<mo>(</mo><msub><mi>x</mi><mtext>px</mtext></msub><mo>,</mo><msub
						><mi>y</mi><mtext>px</mtext></msub
					><mo>)</mo>
					<mo>=</mo>
					<mo>(</mo><msub><mi>x</mi><mtext>norm</mtext></msub><mo>&#x22C5;</mo><mi>W</mi><mo>,</mo
					><mo>&#x2009;</mo><msub><mi>y</mi><mtext>norm</mtext></msub><mo>&#x22C5;</mo><mi>H</mi><mo
						>)</mo
					>
					<mspace width="1em" />
					<msub><mi>x</mi><mtext>norm</mtext></msub><mo>,</mo><msub
						><mi>y</mi><mtext>norm</mtext></msub
					><mo>&#x2208;</mo><mo>[</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>]</mo>
				</mrow>
			</math>
		</section>

		<section id="linking">
			<h3>How Gestures Were Linked to People</h3>
			<p>
				This was the most interesting design problem, and the approach went through three
				iterations.
			</p>
			<ol>
				<li>
					<strong>Global session state.</strong> Once anyone was authenticated, any gesture was attributed
					to them. That approach was simple, but another person in the frame could trigger someone else's
					workflows.
				</li>
				<li>
					<strong>Nearest-face proximity.</strong> Each hand was assigned to the face whose center was
					closest. It broke down when people stood close together or reached across each other.
				</li>
				<li>
					<strong>Pose-bridged linking (final).</strong> A body skeleton connected the face to the hand,
					so ownership depended on anatomy rather than just distance.
				</li>
			</ol>

			<p>The final approach was a two-step chain of checks:</p>
			<ol>
				<li>
					<strong>Face to skeleton:</strong> if the pose's nose landmark lay inside a face's bounding
					box, that skeleton belonged to that face's identity.
				</li>
				<li>
					<strong>Skeleton to hand:</strong> if the gesture recognizer's wrist landmark was within 50
					pixels of one of the skeleton's wrist landmarks, that hand belonged to the skeleton.
				</li>
			</ol>

			<p><span class="italic">A simplified version of the core logic:</span></p>
			<pre><code
					>def get_dist(p1, p2):
    return math.hypot(p1[0] - p2[0], p1[1] - p2[1])

# 1. Face -> skeleton: checked whether the pose's nose was inside a face box.
nose_x, nose_y = get_nose_coords(pose_result, frame_w, frame_h)
owner = None
for (fx, fy, fw, fh), name in faces:
    if fx &lt; nose_x &lt; fx + fw and fy &lt; nose_y &lt; fy + fh:
        owner = name

# 2. Skeleton -> hand: matched this hand's wrist against a pose wrist.
for hand in gesture_result.hand_landmarks:
    hand_wrist = to_pixels(hand[0], frame_w, frame_h)
    if any(get_dist(hand_wrist, w) &lt; 50
        for w in get_wrist_coords(pose_result, frame_w, frame_h)):
        if owner and owner != "Unknown":
            emit(owner, gesture_name)   # e.g. ("User1", "Thumb_Up")</code
				></pre>

			<p>
				When both checks passed, the pipeline output a <code>(user, gesture)</code> event and drew
				<code>NAME + hand</code> above the person's head along with the hand skeleton. Gestures from
				<code>Unknown</code>
				faces, and gestures that could not be tied to a recognized skeleton, were discarded.
			</p>
		</section>
	</article>
</main>
