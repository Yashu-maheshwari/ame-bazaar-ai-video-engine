# AME Bazaar AI Video Engine - STORE DATA COLLECTION PROTOCOL
Version: 1.0

# STORE DATA COLLECTION PROTOCOL

--------------------------------------------------
MISSION
--------------------------------------------------

This protocol defines the collection process for all visual information required to recreate the physical AME Bazaar showroom inside Google Flow. It details *what* and *how* to capture showroom architecture without relying on assumptions.

--------------------------------------------------
1. COMPLETE STORE CAPTURE CHECKLIST
--------------------------------------------------

### Category parameters
For each area of the store, the capture team must record:
- **Exterior**: Capture street visibility, signs, facade textures. (High Priority)
- **Entrance**: Transition from street level to interior. (High Priority)
- **Sections (Men's, Women's, Kids')**: Rack arrangements, display structures, flooring changes. (High Priority)
- **Counter / Billing**: Signage details, point-of-sale layout. (Medium Priority)
- **Trial Rooms**: Doors, curtain fabrics, lighting context. (Medium Priority)
- **Fixtures (Racks, Shelves)**: Material close-ups (wood/metal), hanger styling. (Medium Priority)
- **Lighting / Ceiling**: Exposed bulbs, panels, spotlight angles. (High Priority)

--------------------------------------------------
2. PHOTO CAPTURE STANDARDS
--------------------------------------------------
- **Wide Angle**: Capture entire sections from opposite corners (Recommended Height: 1.5m, Distance: maximum possible, Lens: 14-24mm equivalent).
- **Medium Angle**: Focus on individual displays and shelves (Recommended Height: 1.3m, Distance: 2-3m, Lens: 35mm equivalent).
- **Close-up / Detail**: Material textures, label branding, shelf joins (Recommended Height: Target level, Lens: 50mm or Macro).
- **Hero Angle**: Capture shots matching high-intent camera target perspectives.

--------------------------------------------------
3. VIDEO CAPTURE STANDARDS
--------------------------------------------------
Record the following movements at 60fps in landscape orientation:
- **Slow Walk (Forward / Backward)**: Constant speed along walking paths.
- **Pans (Left-to-Right / Right-to-Left)**: Pivot from central points at eye level.
- **360 View**: Full rotation from the center of each main section.
- **Static**: 5-second lock on key zones (entrance, checkout counter) to capture natural ambient light.

--------------------------------------------------
4. FOLDER STRUCTURE
--------------------------------------------------
Organize raw captured files locally before uploading to `REFERENCE/`:
```text
REFERENCE/store/
├── raw_exterior/
├── raw_entrance/
├── raw_sections/
│   ├── mens/
│   ├── womens/
│   └── kids/
├── raw_fixtures/
└── raw_lighting/
```

--------------------------------------------------
5. FILE NAMING STANDARD
--------------------------------------------------
- Format: `[area]_[shot_type]_[movement]_[index].[ext]`
- Examples:
  - `store_entrance_wide_static_001.jpg`
  - `womens_section_tracking_forward_001.mp4`
  - `billing_counter_close_pan_left_001.mp4`

--------------------------------------------------
6. CAPTURE ORDER
--------------------------------------------------
1. **Exterior & Facade** (Natural ambient baseline)
2. **Entrance Transition** (Inward tracking)
3. **Core Showroom Sections** (Womens → Mens → Kids)
4. **Fixtures & Lighting details** (Macro/Detail closeups)
5. **Staff/Customer pathways** (Walking views)

--------------------------------------------------
7. QUALITY CHECKLIST
--------------------------------------------------
- [ ] No motion blur on any photo frames.
- [ ] Working area clear of people blocking racks/shelves.
- [ ] White balance calibrated to reflect original warm/cool lighting.
- [ ] Landscape orientation maintained for all video files.
- [ ] Minimum resolution: 4K for video, 12MP for photos.
